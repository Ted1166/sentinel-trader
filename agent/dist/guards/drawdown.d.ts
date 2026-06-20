import { type VerdictType } from "../config.js";
export interface DrawdownResult {
    verdict: VerdictType;
    cautionFlag: number;
    drawdownPct: number;
    reason: string;
}
/**
 * Compares current portfolio value against peak to compute drawdown.
 * portfolioUsd: current total value
 * peakUsd:      highest portfolio value seen this session
 */
export declare function checkDrawdown(portfolioUsd: number, peakUsd: number): DrawdownResult;
//# sourceMappingURL=drawdown.d.ts.map