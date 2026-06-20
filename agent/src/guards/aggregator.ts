import { Verdict, CautionFlag, type VerdictType } from "../config.js";
import { checkDrawdown } from "./drawdown.js";
import { checkVolatility } from "./volatility.js";
import { checkRSI } from "./rsi.js";
import { checkSpread, estimateSpreadBps } from "./spread.js";
import { checkCooldown } from "./cooldown.js";
import { type TokenSnapshot } from "../monitor/snapshot.js";
import { logger } from "../utils/logger.js";

export interface GuardResult {
  verdict: VerdictType;
  cautionFlags: number;
  drawdownBps: number;
  atrMultiple10: number;
  rsi: number;
  spreadBps: number;
  reason: string;
  details: {
    drawdown: string;
    volatility: string;
    rsi: string;
    spread: string;
    cooldown: string;
  };
}

export function runGuards(
  token: TokenSnapshot,
  portfolioUsd: number,
  peakUsd: number,
  rsi: number
): GuardResult {
  const spreadBps = estimateSpreadBps(token.volume24h, token.price);

  const drawdown = checkDrawdown(portfolioUsd, peakUsd);
  const volatility = checkVolatility(token.high24h, token.low24h, token.price);
  const rsiResult = checkRSI(rsi);
  const spread = checkSpread(spreadBps);
  const cooldown = checkCooldown(token.symbol);

  const results = [drawdown, volatility, rsiResult, spread, cooldown];

  const worstVerdict = results.reduce<VerdictType>(
    (worst, r) => (r.verdict > worst ? r.verdict : worst),
    Verdict.CLEAR
  );

  const cautionFlags = results.reduce((flags, r) => flags | r.cautionFlag, 0);

  const worstResult = results.find((r) => r.verdict === worstVerdict)!;

  const drawdownPct = drawdown.drawdownPct;
  const drawdownBps = Math.round(drawdownPct * -100);

  logger.debug("Guard result", {
    symbol: token.symbol,
    verdict: Object.keys(Verdict)[worstVerdict],
    flags: cautionFlags.toString(2).padStart(5, "0"),
  });

  return {
    verdict: worstVerdict,
    cautionFlags,
    drawdownBps,
    atrMultiple10: Math.round((token.high24h - token.low24h) / Math.max(token.price, 1) * 100),
    rsi: Math.round(rsi),
    spreadBps,
    reason: worstResult.reason,
    details: {
      drawdown: drawdown.reason,
      volatility: volatility.reason,
      rsi: rsiResult.reason,
      spread: spread.reason,
      cooldown: cooldown.reason,
    },
  };
}

export function verdictLabel(v: VerdictType): string {
  return (Object.keys(Verdict) as (keyof typeof Verdict)[]).find(
    (k) => Verdict[k] === v
  ) ?? "UNKNOWN";
}

export function activeCautionFlags(flags: number): string[] {
  const active: string[] = [];
  if (flags & CautionFlag.DRAWDOWN) active.push("DRAWDOWN");
  if (flags & CautionFlag.VOLATILITY) active.push("VOLATILITY");
  if (flags & CautionFlag.RSI) active.push("RSI");
  if (flags & CautionFlag.SPREAD) active.push("SPREAD");
  if (flags & CautionFlag.COOLDOWN) active.push("COOLDOWN");
  return active;
}