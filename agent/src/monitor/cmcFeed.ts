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
  volume: number; percentChange24h: number; timestamp: number;
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
  baseURL: "https://pro-api.coinmarketcap.com",
  headers: { "X-CMC_PRO_API_KEY": CMC.apiKey },
  timeout: 10_000,
});

export async function fetchFearGreed(): Promise<FearGreedData> {
  try {
    const res = await cmcAxios.get("/v3/fear-and-greed/latest");
    const d = res.data?.data;
    return {
      value: Number(d?.value ?? 50),
      classification: String(d?.value_classification ?? "Neutral"),
      timestamp: Date.now(),
    };
  } catch (err) {
    logger.warn("CMC fear-greed fetch failed, using neutral default", {
      status: axios.isAxiosError(err) ? err.response?.status : undefined,
    });
    return { value: 50, classification: "Neutral", timestamp: Date.now() };
  }
}

export async function fetchOHLCV(symbols: string[]): Promise<Record<string, OHLCVData>> {
  const result: Record<string, OHLCVData> = {};
  if (symbols.length === 0) return result;

  try {
    const res = await cmcAxios.get("/v1/cryptocurrency/quotes/latest", {
      params: { symbol: symbols.join(","), convert: "USD" },
    });
    const data = res.data?.data ?? {};
    for (const sym of symbols) {
      const entry = data[sym];
      const q = entry?.quote?.USD;
      if (!q) continue;

      const price = Number(q.price ?? 0);
      const pctChange24h = Number(q.percent_change_24h ?? 0);
      const priorPrice = pctChange24h !== 0 ? price / (1 + pctChange24h / 100) : price;
      const high = Math.max(price, priorPrice) * 1.005;
      const low = Math.min(price, priorPrice) * 0.995;

      result[sym] = {
        symbol: sym,
        open: priorPrice,
        high,
        low,
        close: price,
        volume: Number(q.volume_24h ?? 0),
        percentChange24h: pctChange24h,
        timestamp: Date.now(),
      };
    }
  } catch (err) {
    logger.warn("CMC OHLCV fetch failed", {
      status: axios.isAxiosError(err) ? err.response?.status : undefined,
    });
  }
  return result;
}

export async function fetchFundingRates(symbols: string[]): Promise<Record<string, FundingRateData>> {
  const result: Record<string, FundingRateData> = {};
  for (const sym of symbols) {
    result[sym] = { symbol: sym, fundingRate: 0, nextFunding: 0, exchange: "unavailable" };
  }
  return result;
}

export async function fetchSocial(symbols: string[]): Promise<Record<string, SocialData>> {
  const result: Record<string, SocialData> = {};
  for (const sym of symbols) {
    result[sym] = { symbol: sym, sentimentScore: 0, mentionCount: 0, trendingRank: 0 };
  }
  return result;
}

export async function fetchKOLSignals(_symbols: string[]): Promise<KOLSignal[]> {
  return [];
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
  logger.debug("CMC snapshot ready", { fearGreed: fearGreed.value, pricesFetched: Object.keys(ohlcv).length });
  return { fearGreed, fundingRates, ohlcv, social, kolSignals, fetchedAt: Date.now() };
}