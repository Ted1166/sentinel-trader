import axios from "axios";
import { CMC } from "../config.js";
import { logger } from "../utils/logger.js";

export interface FearGreedData {
  value: number;
  classification: string;
  timestamp: number;
}

export interface FundingRateData {
  symbol: string;
  fundingRate: number;
  nextFunding: number;
  exchange: string;
}

export interface OHLCVData {
  symbol: string;
  open: number; high: number; low: number; close: number;
  volume: number; timestamp: number;
}

export interface SocialData {
  symbol: string;
  sentimentScore: number;
  mentionCount: number;
  trendingRank: number;
}

export interface KOLSignal {
  symbol: string;
  sentiment: "bullish" | "bearish" | "neutral";
  strength: number;
  source: string;
}

export interface CMCSnapshot {
  fearGreed: FearGreedData;
  fundingRates: Record<string, FundingRateData>;
  ohlcv: Record<string, OHLCVData>;
  social: Record<string, SocialData>;
  kolSignals: KOLSignal[];
  fetchedAt: number;
}

const cmcAxios = axios.create({
  baseURL: "https://pro-api.coinmarketcap.com/v1",
  headers: { "X-CMC_PRO_API_KEY": CMC.apiKey },
  timeout: 10_000,
});

export async function fetchFearGreed(): Promise<FearGreedData> {
  try {
    const res = await cmcAxios.get("/fear-and-greed/latest");
    const d = res.data?.data;
    return {
      value: Number(d?.value ?? 50),
      classification: String(d?.value_classification ?? "Neutral"),
      timestamp: Date.now(),
    };
  } catch {
    logger.warn("CMC fear-greed fetch failed, using neutral default");
    return { value: 50, classification: "Neutral", timestamp: Date.now() };
  }
}

export async function fetchFundingRates(symbols: string[]): Promise<Record<string, FundingRateData>> {
  const result: Record<string, FundingRateData> = {};
  try {
    const res = await cmcAxios.get("/derivatives/exchange/assets", {
      params: { symbol: symbols.join(","), convert: "USD" },
    });
    for (const item of (res.data?.data ?? []) as Record<string, unknown>[]) {
      const sym = String(item["symbol"] ?? "");
      if (sym) result[sym] = {
        symbol: sym,
        fundingRate: Number(item["funding_rate"] ?? 0),
        nextFunding: Number(item["next_funding_time"] ?? 0),
        exchange: String(item["exchange"] ?? "binance"),
      };
    }
  } catch {
    logger.warn("CMC funding rates fetch failed");
  }
  return result;
}

export async function fetchOHLCV(symbols: string[]): Promise<Record<string, OHLCVData>> {
  const result: Record<string, OHLCVData> = {};
  try {
    const res = await cmcAxios.get("/cryptocurrency/quotes/latest", {
      params: { symbol: symbols.join(","), convert: "USD" },
    });
    const data = res.data?.data ?? {};
    for (const sym of symbols) {
      const q = data[sym]?.quote?.USD ?? {};
      result[sym] = {
        symbol: sym,
        open: Number(q.open_24h ?? q.price ?? 0),
        high: Number(q.high_24h ?? q.price ?? 0),
        low: Number(q.low_24h ?? q.price ?? 0),
        close: Number(q.price ?? 0),
        volume: Number(q.volume_24h ?? 0),
        timestamp: Date.now(),
      };
    }
  } catch {
    logger.warn("CMC OHLCV fetch failed");
  }
  return result;
}

export async function fetchSocial(symbols: string[]): Promise<Record<string, SocialData>> {
  const result: Record<string, SocialData> = {};
  try {
    const res = await cmcAxios.get("/cryptocurrency/trending/latest", {
      params: { limit: 100 },
    });
    for (const item of (res.data?.data ?? []) as Record<string, unknown>[]) {
      const sym = String(item["symbol"] ?? "");
      if (sym && symbols.includes(sym)) {
        result[sym] = {
          symbol: sym,
          sentimentScore: Number(item["sentiment_score"] ?? 0),
          mentionCount: Number(item["mentions_count"] ?? 0),
          trendingRank: Number(item["rank"] ?? 0),
        };
      }
    }
  } catch {
    logger.warn("CMC social fetch failed");
  }
  for (const sym of symbols) {
    if (!result[sym]) result[sym] = { symbol: sym, sentimentScore: 0, mentionCount: 0, trendingRank: 0 };
  }
  return result;
}

export async function fetchKOLSignals(symbols: string[]): Promise<KOLSignal[]> {
  const signals: KOLSignal[] = [];
  try {
    const res = await cmcAxios.get("/content/posts/top", {
      params: { symbol: symbols.join(","), limit: 50 },
    });
    for (const item of (res.data?.data ?? []) as Record<string, unknown>[]) {
      const sym = String(item["symbol"] ?? "");
      if (!sym || !symbols.includes(sym)) continue;
      const score = Number(item["bullish_score"] ?? 50);
      signals.push({
        symbol: sym,
        sentiment: score > 60 ? "bullish" : score < 40 ? "bearish" : "neutral",
        strength: score,
        source: String(item["source"] ?? "cmc-kol"),
      });
    }
  } catch {
    logger.warn("CMC KOL signals fetch failed");
  }
  return signals;
}

export async function fetchCMCSnapshot(symbols: string[]): Promise<CMCSnapshot> {
  logger.debug("Fetching CMC snapshot", { count: symbols.length });
  const [fearGreed, fundingRates, ohlcv, social, kolSignals] = await Promise.all([
    fetchFearGreed(),
    fetchFundingRates(symbols),
    fetchOHLCV(symbols),
    fetchSocial(symbols),
    fetchKOLSignals(symbols),
  ]);
  logger.debug("CMC snapshot ready", { fearGreed: fearGreed.value });
  return { fearGreed, fundingRates, ohlcv, social, kolSignals, fetchedAt: Date.now() };
}