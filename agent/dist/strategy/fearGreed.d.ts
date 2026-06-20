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
export declare function computeFearGreedSignal(token: TokenSnapshot, fearGreed: number): FearGreedSignal;
export declare function scoreFearGreed(tokens: TokenSnapshot[], fearGreed: number): FearGreedSignal[];
//# sourceMappingURL=fearGreed.d.ts.map