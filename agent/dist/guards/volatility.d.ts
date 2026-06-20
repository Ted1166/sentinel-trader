import { type VerdictType } from "../config.js";
export interface VolatilityResult {
    verdict: VerdictType;
    cautionFlag: number;
    atr: number;
    atrMultiple: number;
    reason: string;
}
export declare function computeATR(highs: number[], lows: number[], closes: number[]): number;
export declare function checkVolatility(high24h: number, low24h: number, price: number): VolatilityResult;
//# sourceMappingURL=volatility.d.ts.map