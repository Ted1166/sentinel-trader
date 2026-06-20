import { type Address, type Hash } from "viem";
export declare function protectUserTokens(user: Address, token: Address, amount: bigint, reason: string): Promise<Hash | null>;
export declare function batchProtectOnHalt(token: Address, reason: string): Promise<Hash | null>;
//# sourceMappingURL=vault.d.ts.map