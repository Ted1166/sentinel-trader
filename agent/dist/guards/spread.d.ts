import { type VerdictType } from "../config.js";
export interface SpreadResult {
    verdict: VerdictType;
    cautionFlag: number;
    spreadBps: number;
    reason: string;
}
/**
 * Bid/ask spread guard.
 * Approximates spread from 24h price range when real order book is unavailable.
 * spreadBps: bid/ask spread in basis points
 */
export declare function checkSpread(spreadBps: number): SpreadResult;
/** Estimate spread from volume — low volume = wider spread */
export declare function estimateSpreadBps(volume24h: number, price: number): number;
//# sourceMappingURL=spread.d.ts.map