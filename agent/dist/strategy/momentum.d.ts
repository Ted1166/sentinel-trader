import { type TokenSnapshot } from "../monitor/snapshot.js";
export interface MomentumSignal {
    symbol: string;
    score: number;
    rsi: number;
    macd: number;
    reason: string;
}
export declare function computeMomentumSignal(token: TokenSnapshot, rsi: number): MomentumSignal;
export declare function scoreMomentum(tokens: TokenSnapshot[], rsiMap: Record<string, number>): MomentumSignal[];
//# sourceMappingURL=momentum.d.ts.map