import { type VerdictType } from "../config.js";
import { type TokenSnapshot } from "../monitor/snapshot.js";
export interface GuardResult {
    verdict: VerdictType;
    cautionFlags: number;
    drawdownBps: number;
    atrMultiple10: number;
    rsi: number;
    spreadBps: number;
    reason: string;
    details: {
        drawdown: string;
        volatility: string;
        rsi: string;
        spread: string;
        cooldown: string;
    };
}
export declare function runGuards(token: TokenSnapshot, portfolioUsd: number, peakUsd: number, rsi: number): GuardResult;
export declare function verdictLabel(v: VerdictType): string;
export declare function activeCautionFlags(flags: number): string[];
//# sourceMappingURL=aggregator.d.ts.map