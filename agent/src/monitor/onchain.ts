import { createPublicClient, http, type Address } from "viem";
import { bsc, bscTestnet } from "viem/chains";
import { CONTRACTS, BSC_CHAIN, RISK_GUARD_ORACLE_ABI, TRADE_LOGGER_ABI } from "../config.js";
import { logger } from "../utils/logger.js";

const chain = BSC_CHAIN.id === 56 ? bsc : bscTestnet;

export const publicClient = createPublicClient({
  chain,
  transport: http(BSC_CHAIN.rpcUrl),
});

export interface OnchainOracleRecord {
  verdict: number; cautionFlags: number; drawdownBps: number;
  atrMultiple10: number; rsi: number; spreadBps: number;
  timestamp: number; blockNumber: bigint; reason: string;
}

export async function readLatestOracleRecord(asset: Address): Promise<OnchainOracleRecord | null> {
  try {
    const r = await publicClient.readContract({
      address: CONTRACTS.riskGuardOracle,
      abi: RISK_GUARD_ORACLE_ABI,
      functionName: "latestRecord",
      args: [asset],
    });
    return {
      verdict: Number(r.verdict), cautionFlags: Number(r.cautionFlags),
      drawdownBps: Number(r.drawdownBps), atrMultiple10: Number(r.atrMultiple10),
      rsi: Number(r.rsi), spreadBps: Number(r.spreadBps),
      timestamp: Number(r.timestamp), blockNumber: r.blockNumber, reason: r.reason,
    };
  } catch (err) {
    logger.warn("Failed to read oracle record", { asset, err });
    return null;
  }
}

export async function isAssetHalted(asset: Address): Promise<boolean> {
  try {
    return await publicClient.readContract({
      address: CONTRACTS.riskGuardOracle,
      abi: RISK_GUARD_ORACLE_ABI,
      functionName: "isHalted",
      args: [asset],
    });
  } catch { return false; }
}

export async function getCompetitionPnl(): Promise<bigint> {
  try {
    return await publicClient.readContract({
      address: CONTRACTS.tradeLogger,
      abi: TRADE_LOGGER_ABI,
      functionName: "competitionPnlBps",
    });
  } catch { return 0n; }
}