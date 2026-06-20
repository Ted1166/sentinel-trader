import { type Address } from "viem";
import { fetchCMCSnapshot, type CMCSnapshot } from "./cmcFeed.js";
import { readLatestOracleRecord, type OnchainOracleRecord } from "./onchain.js";
import { PRIORITY_TOKENS, TOKEN_SYMBOLS, tokenBySymbol } from "../utils/tokens.js";
import { logger } from "../utils/logger.js";

export interface TokenSnapshot {
  symbol: string; address: Address;
  price: number; volume24h: number; high24h: number; low24h: number;
  fundingRate: number; sentimentScore: number; kolBullish: number;
  trendingRank: number; oracleRecord: OnchainOracleRecord | null;
}

export interface AgentSnapshot {
  fearGreedValue: number;
  fearGreedLabel: string;
  tokens: TokenSnapshot[];
  prioritySymbols: string[];
  cmcRaw: CMCSnapshot;
  capturedAt: number;
}

export async function buildSnapshot(): Promise<AgentSnapshot> {
  const symbols = TOKEN_SYMBOLS.slice(0, 60) as string[];
  logger.info("Building agent snapshot", { symbols: symbols.length });

  const cmcRaw = await fetchCMCSnapshot(symbols);
  const tokens: TokenSnapshot[] = [];

  for (const sym of symbols) {
    const token = tokenBySymbol(sym);
    if (!token) continue;

    const ohlcv = cmcRaw.ohlcv[sym];
    const funding = cmcRaw.fundingRates[sym];
    const social = cmcRaw.social[sym];
    const kolFor = cmcRaw.kolSignals.filter((k) => k.symbol === sym);
    const kolBullish = kolFor.length > 0
      ? kolFor.reduce((s, k) => s + k.strength, 0) / kolFor.length
      : 50;

    let oracleRecord: OnchainOracleRecord | null = null;
    if ((PRIORITY_TOKENS as readonly string[]).includes(sym)) {
      oracleRecord = await readLatestOracleRecord(token.address);
    }

    tokens.push({
      symbol: sym, address: token.address,
      price: ohlcv?.close ?? 0,
      volume24h: ohlcv?.volume ?? 0,
      high24h: ohlcv?.high ?? 0,
      low24h: ohlcv?.low ?? 0,
      fundingRate: funding?.fundingRate ?? 0,
      sentimentScore: social?.sentimentScore ?? 0,
      kolBullish, trendingRank: social?.trendingRank ?? 0,
      oracleRecord,
    });
  }

  logger.info("Snapshot built", { fearGreed: cmcRaw.fearGreed.value, tokens: tokens.length });
  return {
    fearGreedValue: cmcRaw.fearGreed.value,
    fearGreedLabel: cmcRaw.fearGreed.classification,
    tokens, prioritySymbols: PRIORITY_TOKENS as unknown as string[],
    cmcRaw, capturedAt: Date.now(),
  };
}