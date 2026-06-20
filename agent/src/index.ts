import "dotenv/config";
import { AGENT, Verdict } from "./config.js";
import { logger } from "./utils/logger.js";
import { buildSnapshot } from "./monitor/snapshot.js";
import { runGuards, verdictLabel } from "./guards/aggregator.js";
import { computeRSI } from "./guards/rsi.js";
import { recordStopLoss } from "./guards/cooldown.js";
import { scoreAllTokens } from "./strategy/scorer.js";
import { getTradeDecision } from "./brain/claude.js";
import { writeOracleVerdict } from "./executor/oracle.js";
import { logTradeOpen, logTradeClose } from "./executor/tradeLog.js";
import { batchProtectOnHalt } from "./executor/vault.js";
import {
  getPortfolioUsd,
  executeSwap,
  registerForCompetition,
} from "./executor/twak.js";
import { TOKENS } from "./utils/tokens.js";
import { type Address } from "viem";
import { type TradeDecision } from "./brain/fallback.js";

let peakPortfolioUsd = 0;
let cycleCount = 0;
let dailyTradeCount = 0;
let lastDayReset = new Date().getUTCDate();

interface OpenPosition {
  tradeId: bigint;
  symbol: string;
  address: Address;
  direction: "BUY" | "SELL";
  entryPrice: number;
  sizeUsd: number;
  stopLossPct: number;
  takeProfitPct: number;
  openedAt: number;
}

const openPositions: Map<string, OpenPosition> = new Map();

function checkDayReset(): void {
  const today = new Date().getUTCDate();
  if (today !== lastDayReset) {
    dailyTradeCount = 0;
    lastDayReset = today;
    logger.info("Daily trade count reset");
  }
}

async function checkExits(snapshot: ReturnType<typeof buildSnapshot> extends Promise<infer T> ? T : never): Promise<void> {
  for (const [symbol, pos] of openPositions.entries()) {
    const token = snapshot.tokens.find((t) => t.symbol === symbol);
    if (!token || token.price <= 0) continue;

    const priceDiff = (token.price - pos.entryPrice) / pos.entryPrice * 100;
    const pnl = pos.direction === "BUY" ? priceDiff : -priceDiff;

    let shouldExit = false;
    let stoppedOut = false;
    let exitReason = "";

    if (pnl <= -pos.stopLossPct) {
      shouldExit = true;
      stoppedOut = true;
      exitReason = `stop-loss hit at ${pnl.toFixed(2)}%`;
      recordStopLoss(symbol);
    } else if (pnl >= pos.takeProfitPct) {
      shouldExit = true;
      exitReason = `take-profit hit at ${pnl.toFixed(2)}%`;
    }

    if (shouldExit) {
      logger.info("Exiting position", { symbol, pnl: pnl.toFixed(2), reason: exitReason });

      const usdcAddr = TOKENS.USDC.address;
      const swapResult = await executeSwap({
        fromToken: pos.address,
        toToken: usdcAddr,
        amountUsd: pos.sizeUsd,
        slippagePct: 0.5,
      });

      await logTradeClose(
        pos.tradeId,
        token.price,
        swapResult.txHash,
        stoppedOut
      );

      openPositions.delete(symbol);
    }
  }
}

async function runCycle(): Promise<void> {
  cycleCount++;
  checkDayReset();

  logger.info(`─── Cycle #${cycleCount} ───`);

  const snapshot = await buildSnapshot();

  await checkExits(snapshot);

  const portfolioUsd = await getPortfolioUsd();
  if (portfolioUsd > peakPortfolioUsd) peakPortfolioUsd = portfolioUsd;

  logger.info("Portfolio", {
    current: `$${portfolioUsd.toFixed(2)}`,
    peak: `$${peakPortfolioUsd.toFixed(2)}`,
    openPositions: openPositions.size,
  });

  const rsiMap: Record<string, number> = {};
  for (const token of snapshot.tokens) {
    const range = token.high24h - token.low24h;
    if (range > 0 && token.price > 0) {
      const position = (token.price - token.low24h) / range * 100;
      rsiMap[token.symbol] = 30 + position * 0.4;
    } else {
      rsiMap[token.symbol] = 50;
    }
  }

  const scorerOutput = scoreAllTokens(
    snapshot.tokens,
    snapshot.fearGreedValue,
    rsiMap
  );

  const topCandidate = scorerOutput.topBuys[0] ?? scorerOutput.ranked[0]!;
  const topToken = snapshot.tokens.find((t) => t.symbol === topCandidate.symbol);

  const guardResult = topToken
    ? runGuards(topToken, portfolioUsd, peakPortfolioUsd, rsiMap[topToken.symbol] ?? 50)
    : { verdict: Verdict.HALT, cautionFlags: 0, drawdownBps: 0, atrMultiple10: 0, rsi: 50, spreadBps: 0, reason: "no token data", details: { drawdown: "", volatility: "", rsi: "", spread: "", cooldown: "" } };

  logger.info("Guard verdict", {
    verdict: verdictLabel(guardResult.verdict),
    reason: guardResult.reason,
    flags: guardResult.cautionFlags.toString(2).padStart(5, "0"),
  });

  if (topToken) {
    await writeOracleVerdict(topToken.address, guardResult);
  }

  if (guardResult.verdict === Verdict.HALT) {
    logger.warn("HALT verdict — protecting vaults, skipping trade");
    if (topToken) {
      await batchProtectOnHalt(topToken.address, guardResult.reason);
    }
    return;
  }

  if (dailyTradeCount >= AGENT.cycleIntervalSecs) {
    logger.info("Daily trade limit reached, skipping");
    return;
  }

  const decision: TradeDecision = await getTradeDecision({
    snapshot,
    scorerOutput,
    guardResult,
    portfolioUsd,
    openPositions: [...openPositions.keys()],
  });

  logger.info("Trade decision", {
    action: decision.action,
    symbol: decision.symbol,
    sizeUsd: decision.sizeUsd,
    confidence: decision.confidence,
    tag: decision.strategyTag,
  });

  if (decision.action !== "HOLD" && decision.symbol) {
    const tokenInfo = TOKENS[decision.symbol as keyof typeof TOKENS];
    if (!tokenInfo) {
      logger.warn("Token not in eligible list", { symbol: decision.symbol });
      return;
    }

    if (openPositions.has(decision.symbol)) {
      logger.info("Already have position", { symbol: decision.symbol });
      return;
    }

    const usdcAddr = TOKENS.USDC.address;

    const swapResult = await executeSwap({
      fromToken: decision.action === "BUY" ? usdcAddr : tokenInfo.address,
      toToken: decision.action === "BUY" ? tokenInfo.address : usdcAddr,
      amountUsd: Math.min(decision.sizeUsd, 500),
      slippagePct: 0.5,
    });

    if (!swapResult.success) {
      logger.error("Swap failed, skipping trade log");
      return;
    }

    const tokenSnapshot = snapshot.tokens.find((t) => t.symbol === decision.symbol);
    const entryPrice = tokenSnapshot?.price ?? 0;

    const { logHash } = await logTradeOpen(
      decision,
      tokenInfo.address,
      entryPrice,
      guardResult.verdict,
      swapResult.txHash
    );

    if (logHash) {
      dailyTradeCount++;
      openPositions.set(decision.symbol, {
        tradeId: 0n,
        symbol: decision.symbol,
        address: tokenInfo.address,
        direction: decision.action as "BUY" | "SELL",
        entryPrice,
        sizeUsd: decision.sizeUsd,
        stopLossPct: decision.stopLossPct,
        takeProfitPct: decision.takeProfitPct,
        openedAt: Date.now(),
      });

      logger.info("Position opened", {
        symbol: decision.symbol,
        direction: decision.action,
        size: `$${decision.sizeUsd}`,
        entry: entryPrice,
        swapTx: swapResult.txHash,
        logTx: logHash,
      });
    }
  }
}

async function main(): Promise<void> {
  logger.info("SentinelTrader agent starting", {
    cycleInterval: AGENT.cycleIntervalSecs,
    aiEnabled: AGENT.aiEnabled,
  });

  await registerForCompetition();

  await runCycle();

  setInterval(async () => {
    try {
      await runCycle();
    } catch (err) {
      logger.error("Cycle error", { err });
    }
  }, AGENT.cycleIntervalSecs * 1000);
}

main().catch((err) => {
  logger.error("Fatal error", { err });
  process.exit(1);
});