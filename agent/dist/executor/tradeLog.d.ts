import { type Address, type Hash } from "viem";
import { type TradeDecision } from "../brain/fallback.js";
/**
 * Open a trade on TradeLogger.sol — immutable on-chain PnL proof.
 * Call this AFTER the real swap has already executed via TWAK.
 */
export declare function logTradeOpen(decision: TradeDecision, assetAddress: Address, entryPrice: number, guardVerdict: number, swapTxHash: string): Promise<{
    logHash: Hash | null;
}>;
/**
 * Close a trade on TradeLogger.sol.
 * Call this AFTER the real exit swap has already executed via TWAK.
 */
export declare function logTradeClose(tradeId: bigint, exitPrice: number, exitTxHash: string, stoppedOut: boolean): Promise<Hash | null>;
//# sourceMappingURL=tradeLog.d.ts.map