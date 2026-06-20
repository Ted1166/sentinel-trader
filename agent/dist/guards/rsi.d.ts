import { type VerdictType } from "../config.js";
export interface RSIResult {
    verdict: VerdictType;
    cautionFlag: number;
    rsi: number;
    reason: string;
}
export declare function computeRSI(closes: number[], period?: number): number;
export declare function checkRSI(rsi: number): RSIResult;
//# sourceMappingURL=rsi.d.ts.map