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
/**
 * Deterministic fallback — used when AI is disabled or Claude call fails.
 * Simple rule: top scorer BUY if score >= 65 and CLEAR, else HOLD.
 */
export declare function fallbackDecision(guardResult: GuardResult, scorer: ScorerOutput, portfolioUsd: number): TradeDecision;
//# sourceMappingURL=fallback.d.ts.map