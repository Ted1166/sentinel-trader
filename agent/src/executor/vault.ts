import { createWalletClient, http, type Address, type Hash } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { bsc, bscTestnet } from "viem/chains";
import { BSC_CHAIN, CONTRACTS, GUARDIAN_VAULT_ABI, AGENT } from "../config.js";
import { logger } from "../utils/logger.js";
import { publicClient } from "../monitor/onchain.js";

const chain = BSC_CHAIN.id === 56 ? bsc : bscTestnet;

function getGuardianWalletClient() {
  const pk = process.env.GUARDIAN_PRIVATE_KEY as `0x${string}` | undefined;
  if (!pk) throw new Error("GUARDIAN_PRIVATE_KEY not set — required for vault protection");
  return createWalletClient({
    account: privateKeyToAccount(pk),
    chain,
    transport: http(BSC_CHAIN.rpcUrl),
  });
}

export async function protectUserTokens(
  user: Address,
  token: Address,
  amount: bigint,
  reason: string
): Promise<Hash | null> {
  try {
    const client = getGuardianWalletClient();
    const hash = await client.writeContract({
      address: CONTRACTS.guardianVault,
      abi: GUARDIAN_VAULT_ABI,
      functionName: "protectTokens",
      args: [user, token, amount, reason],
    });
    logger.info("Vault protection executed", { user, token, hash });
    return hash;
  } catch (err) {
    logger.error("Vault protection failed", { user, token, err });
    return null;
  }
}

export async function batchProtectOnHalt(
  token: Address,
  reason: string
): Promise<Hash | null> {
  if (AGENT.protectedWallets.length === 0) {
    logger.debug("No protected wallets configured, skipping vault batch");
    return null;
  }

  try {
    const params: { user: Address; token: Address; amount: bigint }[] = [];

    for (const wallet of AGENT.protectedWallets) {
      const isProtected = await publicClient.readContract({
        address: CONTRACTS.guardianVault,
        abi: GUARDIAN_VAULT_ABI,
        functionName: "isProtected",
        args:         [wallet],
      });

      if (isProtected) {
        params.push({ user: wallet, token, amount: BigInt("1000000000000000000000") });
      }
    }

    if (params.length === 0) {
      logger.info("No opted-in wallets to protect");
      return null;
    }

    const client = getGuardianWalletClient();
    const hash = await client.writeContract({
      address: CONTRACTS.guardianVault,
      abi: GUARDIAN_VAULT_ABI,
      functionName: "batchProtectTokens",
      args: [params, reason],
    });

    logger.info("Batch vault protection executed", { wallets: params.length, hash });
    return hash;
  } catch (err) {
    logger.error("Batch vault protection failed", { err });
    return null;
  }
}