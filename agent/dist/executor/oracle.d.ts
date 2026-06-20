import { type Address, type Hash } from "viem";
import { type GuardResult } from "../guards/aggregator.js";
/**
 * Write a guard verdict to RiskGuardOracle on BSC.
 * Called every cycle to maintain the on-chain record for judges.
 */
export declare function writeOracleVerdict(asset: Address, guardResult: GuardResult): Promise<Hash | null>;
//# sourceMappingURL=oracle.d.ts.map