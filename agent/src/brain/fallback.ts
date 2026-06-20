import { Verdict } from "../config.js";
import { type GuardResult } from "../guards/aggregator.js";
import { type ScorerOutput } from "../strategy/scorer.js";

export interface TradeDecision {
  action: "BUY" | "SELL" | "HOLD";
  symbol: string | null;
  sizeUsd: number;
  stopLossPct: number;
  takeProfitPct: number;
  confidence: number;
  strategyTag: string;
  reason: string;
}

export function fallbackDecision(
  guardResult: GuardResult,
  scorer: ScorerOutput,
  portfolioUsd: number
): TradeDecision {
  if (guardResult.verdict === Verdict.HALT) {
    return {
      action: "HOLD", symbol: null, sizeUsd: 0,
      stopLossPct: 5, takeProfitPct: 10, confidence: 95,
      strategyTag: "halt-protection",
      reason: `Guard HALT: ${guardResult.reason}`,
    };
  }

  const sizeMultiplier = guardResult.verdict === Verdict.CAUTION ? 0.67 : 1.0;
  const maxSize = portfolioUsd * 0.20 * sizeMultiplier;

  const topBuy = scorer.topBuys[0];
  const topSell = scorer.topSells[0];

  if (topBuy && topBuy.totalScore >= 65 && guardResult.verdict === Verdict.CLEAR) {
    return {
      action: "BUY", symbol: topBuy.symbol,
      sizeUsd: Math.min(maxSize, 500),
      stopLossPct: 5, takeProfitPct: 10,
      confidence: Math.round(topBuy.totalScore * 0.9),
      strategyTag: topBuy.fearGreed.signal.includes("BUY") ? "fear-greed-rotation" : "momentum-rsi",
      reason: topBuy.fearGreed.reason,
    };
  }

  if (topSell && topSell.totalScore <= 35 && guardResult.verdict === Verdict.CLEAR) {
    return {
      action: "SELL", symbol: topSell.symbol,
      sizeUsd: Math.min(maxSize, 500),
      stopLossPct: 5, takeProfitPct: 10,
      confidence: Math.round((100 - topSell.totalScore) * 0.9),
      strategyTag: "fear-greed-rotation",
      reason: topSell.fearGreed.reason,
    };
  }

  return {
    action: "HOLD", symbol: null, sizeUsd: 0,
    stopLossPct: 5, takeProfitPct: 10,
    confidence: 60,
    strategyTag: "no-signal",
    reason: `No strong signal — top score: ${topBuy?.totalScore ?? 0}, F&G: ${scorer.fearGreed}`,
  };
}