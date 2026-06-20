import { type TokenSnapshot } from "../monitor/snapshot.js";
export type FGSignal = "STRONG_BUY" | "BUY" | "NEUTRAL" | "SELL" | "STRONG_SELL";
export interface FearGreedSignal {
    symbol: string;
    signal: FGSignal;
    score: number;
    fearGreed: number;
    fundingRate: number;
    reason: string;
}
/**
 * Core strategy: CMC Fear & Greed + funding rate rotation.
 *
 * Logic:
 *   F&G < 25 (extreme fear) + funding rate < 0  → STRONG_BUY  (fear + shorts paying longs)
 *   F&G < 40 (fear)         + funding rate < 0  → BUY
 *   F&G > 75 (extreme greed)+ funding rate > 0  → STRONG_SELL (greed + longs paying shorts)
 *   F&G > 60 (greed)        + funding rate > 0  → SELL
 *   Otherwise                                   → NEUTRAL
 */
export declare function computeFearGreedSignal(token: TokenSnapshot, fearGreed: number): FearGreedSignal;
export declare function scoreFearGreed(tokens: TokenSnapshot[], fearGreed: number): FearGreedSignal[];
//# sourceMappingURL=fearGreed.d.ts.map