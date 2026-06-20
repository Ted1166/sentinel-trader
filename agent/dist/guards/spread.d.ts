import { type VerdictType } from "../config.js";
export interface SpreadResult {
    verdict: VerdictType;
    cautionFlag: number;
    spreadBps: number;
    reason: string;
}
export declare function checkSpread(spreadBps: number): SpreadResult;
export declare function estimateSpreadBps(volume24h: number, price: number): number;
//# sourceMappingURL=spread.d.ts.map