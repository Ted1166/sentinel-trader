import { type VerdictType } from "../config.js";
export interface RSIResult {
    verdict: VerdictType;
    cautionFlag: number;
    rsi: number;
    reason: string;
}
/**
 * Compute RSI from an array of close prices.
 * Uses standard 14-period RSI.
 */
export declare function computeRSI(closes: number[], period?: number): number;
/**
 * RSI guard — uses live price data approximation.
 * rsi: precomputed RSI value (0–100)
 */
export declare function checkRSI(rsi: number): RSIResult;
//# sourceMappingURL=rsi.d.ts.map