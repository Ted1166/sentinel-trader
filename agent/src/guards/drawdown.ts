import { Verdict, CautionFlag, RISK, type VerdictType } from "../config.js";

export interface DrawdownResult {
  verdict: VerdictType;
  cautionFlag: number;
  drawdownPct: number;
  reason: string;
}

export function checkDrawdown(portfolioUsd: number, peakUsd: number): DrawdownResult {
  if (peakUsd <= 0) {
    return { verdict: Verdict.CLEAR, cautionFlag: 0, drawdownPct: 0, reason: "no peak yet" };
  }

  const drawdownPct = ((peakUsd - portfolioUsd) / peakUsd) * 100;

  if (drawdownPct >= RISK.haltDrawdownPct) {
    return {
      verdict: Verdict.HALT,
      cautionFlag: CautionFlag.DRAWDOWN,
      drawdownPct,
      reason: `drawdown ${drawdownPct.toFixed(2)}% >= halt threshold ${RISK.haltDrawdownPct}%`,
    };
  }

  if (drawdownPct >= RISK.cautionDrawdownPct) {
    return {
      verdict: Verdict.CAUTION,
      cautionFlag: CautionFlag.DRAWDOWN,
      drawdownPct,
      reason: `drawdown ${drawdownPct.toFixed(2)}% >= caution threshold ${RISK.cautionDrawdownPct}%`,
    };
  }

  return {
    verdict: Verdict.CLEAR,
    cautionFlag: 0,
    drawdownPct,
    reason: `drawdown ${drawdownPct.toFixed(2)}% within limits`,
  };
}