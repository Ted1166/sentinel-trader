import { type Address, type Hash } from "viem";
import { type TradeDecision } from "../brain/fallback.js";
export declare function logTradeOpen(decision: TradeDecision, assetAddress: Address, entryPrice: number, guardVerdict: number, swapTxHash: string): Promise<{
    logHash: Hash | null;
}>;
export declare function logTradeClose(tradeId: bigint, exitPrice: number, exitTxHash: string, stoppedOut: boolean): Promise<Hash | null>;
//# sourceMappingURL=tradeLog.d.ts.map