import { type TokenSnapshot } from "../monitor/snapshot.js";
export interface SentimentSignal {
    symbol: string;
    score: number;
    divergence: boolean;
    socialScore: number;
    kolScore: number;
    reason: string;
}
/**
 * Sentiment divergence strategy.
 * Flags when social heat and KOL signals disagree — high-alpha signal.
 *
 * Divergence cases:
 *   High social buzz + KOL bearish → possible pump, fade signal
 *   Low social + KOL bullish       → under-radar accumulation signal
 */
export declare function computeSentimentSignal(token: TokenSnapshot): SentimentSignal;
export declare function scoreSentiment(tokens: TokenSnapshot[]): SentimentSignal[];
//# sourceMappingURL=sentiment.d.ts.map