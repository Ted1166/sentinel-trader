import { type VerdictType } from "../config.js";
export interface CooldownResult {
    verdict: VerdictType;
    cautionFlag: number;
    secondsLeft: number;
    reason: string;
}
export declare function recordStopLoss(symbol: string): void;
export declare function checkCooldown(symbol: string): CooldownResult;
export declare function clearCooldown(symbol: string): void;
//# sourceMappingURL=cooldown.d.ts.map