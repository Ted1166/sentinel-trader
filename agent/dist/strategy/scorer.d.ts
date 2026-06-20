import { type TokenSnapshot } from "../monitor/snapshot.js";
import { type FearGreedSignal } from "./fearGreed.js";
import { type MomentumSignal } from "./momentum.js";
import { type SentimentSignal } from "./sentiment.js";
export interface TokenScore {
    symbol: string;
    totalScore: number;
    fearGreed: FearGreedSignal;
    momentum: MomentumSignal;
    sentiment: SentimentSignal;
    rsi: number;
    rank: number;
}
export interface ScorerOutput {
    ranked: TokenScore[];
    topBuys: TokenScore[];
    topSells: TokenScore[];
    fearGreed: number;
    scoredAt: number;
}
export declare function scoreAllTokens(tokens: TokenSnapshot[], fearGreed: number, rsiMap: Record<string, number>): ScorerOutput;
//# sourceMappingURL=scorer.d.ts.map