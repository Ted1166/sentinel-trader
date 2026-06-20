import { type VerdictType } from "../config.js";
export interface DrawdownResult {
    verdict: VerdictType;
    cautionFlag: number;
    drawdownPct: number;
    reason: string;
}
export declare function checkDrawdown(portfolioUsd: number, peakUsd: number): DrawdownResult;
//# sourceMappingURL=drawdown.d.ts.map