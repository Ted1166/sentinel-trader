import { createWalletClient, http, type Address, type Hash } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { bsc, bscTestnet } from "viem/chains";
import { BSC_CHAIN, CONTRACTS, RISK_GUARD_ORACLE_ABI } from "../config.js";
import { type GuardResult } from "../guards/aggregator.js";
import { logger } from "../utils/logger.js";

const chain = BSC_CHAIN.id === 56 ? bsc : bscTestnet;

function getLoggerWalletClient() {
  const pk = process.env.LOGGER_PRIVATE_KEY as `0x${string}` | undefined;
  if (!pk) throw new Error("LOGGER_PRIVATE_KEY not set — required for on-chain verdict logging");
  return createWalletClient({
    account: privateKeyToAccount(pk),
    chain,
    transport: http(BSC_CHAIN.rpcUrl),
  });
}

export async function writeOracleVerdict(
  asset: Address,
  guardResult: GuardResult
): Promise<Hash | null> {
  try {
    const client = getLoggerWalletClient();

    const hash = await client.writeContract({
      address: CONTRACTS.riskGuardOracle,
      abi: RISK_GUARD_ORACLE_ABI,
      functionName: "recordVerdict",
      args: [
        asset,
        guardResult.verdict,
        guardResult.cautionFlags,
        guardResult.drawdownBps as unknown as number,
        guardResult.atrMultiple10 as unknown as number,
        Math.min(255, Math.max(0, guardResult.rsi)),
        Math.min(65535, guardResult.spreadBps),
        guardResult.reason.slice(0, 256),
      ],
    });

    logger.info("Oracle verdict written", { asset, hash, verdict: guardResult.verdict });
    return hash;
  } catch (err) {
    logger.error("Failed to write oracle verdict", { asset, err });
    return null;
  }
}