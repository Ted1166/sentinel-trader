import { type TokenSnapshot } from "../monitor/snapshot.js";
export interface SentimentSignal {
    symbol: string;
    score: number;
    divergence: boolean;
    socialScore: number;
    kolScore: number;
    reason: string;
}
export declare function computeSentimentSignal(token: TokenSnapshot): SentimentSignal;
export declare function scoreSentiment(tokens: TokenSnapshot[]): SentimentSignal[];
//# sourceMappingURL=sentiment.d.ts.map