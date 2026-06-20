import { type Address, type Hash } from "viem";
/**
 * Protect a user's tokens by moving them into GuardianVault.
 * Only callable when oracle reports the asset is HALTed.
 */
export declare function protectUserTokens(user: Address, token: Address, amount: bigint, reason: string): Promise<Hash | null>;
/**
 * Batch protect all opted-in wallets on HALT.
 */
export declare function batchProtectOnHalt(token: Address, reason: string): Promise<Hash | null>;
//# sourceMappingURL=vault.d.ts.map