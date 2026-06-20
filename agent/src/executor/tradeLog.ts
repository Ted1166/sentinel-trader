import { createWalletClient, http, type Address, type Hash } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { bsc, bscTestnet } from "viem/chains";
import { BSC_CHAIN, CONTRACTS, TRADE_LOGGER_ABI, Direction } from "../config.js";
import { type TradeDecision } from "../brain/fallback.js";
import { logger } from "../utils/logger.js";

const chain = BSC_CHAIN.id === 56 ? bsc : bscTestnet;

function getLoggerWalletClient() {
  const pk = process.env.LOGGER_PRIVATE_KEY as `0x${string}` | undefined;
  if (!pk) throw new Error("LOGGER_PRIVATE_KEY not set — required for on-chain trade logging");
  return createWalletClient({
    account: privateKeyToAccount(pk),
    chain,
    transport: http(BSC_CHAIN.rpcUrl),
  });
}

const priceToUint128 = (price: number): bigint =>
  BigInt(Math.round(price * 1e9)) * BigInt(1e9);

export async function logTradeOpen(
  decision: TradeDecision,
  assetAddress: Address,
  entryPrice: number,
  guardVerdict: number,
  swapTxHash: string
): Promise<{ logHash: Hash | null }> {
  try {
    const client = getLoggerWalletClient();

    const txHashBytes = swapTxHash
      ? (swapTxHash.padEnd(66, "0") as `0x${string}`)
      : ("0x" + "0".repeat(64) as `0x${string}`);

    const hash = await client.writeContract({
      address: CONTRACTS.tradeLogger,
      abi: TRADE_LOGGER_ABI,
      functionName: "openTrade",
      args: [
        assetAddress,
        decision.action === "BUY" ? Direction.BUY : Direction.SELL,
        priceToUint128(entryPrice),
        priceToUint128(decision.sizeUsd),
        Math.min(100, Math.max(0, decision.confidence)),
        guardVerdict,
        txHashBytes as `0x${string}`,
        decision.strategyTag,
        decision.reason,
      ],
    });

    logger.info("Trade opened on-chain", { hash, symbol: decision.symbol, action: decision.action });
    return { logHash: hash };
  } catch (err) {
    logger.error("Failed to log trade open", { err });
    return { logHash: null };
  }
}

export async function logTradeClose(
  tradeId: bigint,
  exitPrice: number,
  exitTxHash: string,
  stoppedOut: boolean
): Promise<Hash | null> {
  try {
    const client = getLoggerWalletClient();

    const txHashBytes = exitTxHash
      ? (exitTxHash.padEnd(66, "0") as `0x${string}`)
      : ("0x" + "0".repeat(64) as `0x${string}`);

    const hash = await client.writeContract({
      address: CONTRACTS.tradeLogger,
      abi: TRADE_LOGGER_ABI,
      functionName: "closeTrade",
      args: [tradeId, priceToUint128(exitPrice), txHashBytes as `0x${string}`, stoppedOut],
    });

    logger.info("Trade closed on-chain", { tradeId: tradeId.toString(), hash, exitPrice, stoppedOut });
    return hash;
  } catch (err) {
    logger.error("Failed to log trade close", { err });
    return null;
  }
}