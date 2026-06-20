"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchFearGreed = fetchFearGreed;
exports.fetchFundingRates = fetchFundingRates;
exports.fetchOHLCV = fetchOHLCV;
exports.fetchSocial = fetchSocial;
exports.fetchKOLSignals = fetchKOLSignals;
exports.fetchCMCSnapshot = fetchCMCSnapshot;
const axios_1 = __importDefault(require("axios"));
const config_js_1 = require("../config.js");
const logger_js_1 = require("../utils/logger.js");
const cmcAxios = axios_1.default.create({
    baseURL: "https://pro-api.coinmarketcap.com/v1",
    headers: { "X-CMC_PRO_API_KEY": config_js_1.CMC.apiKey },
    timeout: 10_000,
});
async function fetchFearGreed() {
    try {
        const res = await cmcAxios.get("/fear-and-greed/latest");
        const d = res.data?.data;
        return {
            value: Number(d?.value ?? 50),
            classification: String(d?.value_classification ?? "Neutral"),
            timestamp: Date.now(),
        };
    }
    catch {
        logger_js_1.logger.warn("CMC fear-greed fetch failed, using neutral default");
        return { value: 50, classification: "Neutral", timestamp: Date.now() };
    }
}
async function fetchFundingRates(symbols) {
    const result = {};
    try {
        const res = await cmcAxios.get("/derivatives/exchange/assets", {
            params: { symbol: symbols.join(","), convert: "USD" },
        });
        for (const item of (res.data?.data ?? [])) {
            const sym = String(item["symbol"] ?? "");
            if (sym)
                result[sym] = {
                    symbol: sym,
                    fundingRate: Number(item["funding_rate"] ?? 0),
                    nextFunding: Number(item["next_funding_time"] ?? 0),
                    exchange: String(item["exchange"] ?? "binance"),
                };
        }
    }
    catch {
        logger_js_1.logger.warn("CMC funding rates fetch failed");
    }
    return result;
}
async function fetchOHLCV(symbols) {
    const result = {};
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
    }
    catch {
        logger_js_1.logger.warn("CMC OHLCV fetch failed");
    }
    return result;
}
async function fetchSocial(symbols) {
    const result = {};
    try {
        const res = await cmcAxios.get("/cryptocurrency/trending/latest", {
            params: { limit: 100 },
        });
        for (const item of (res.data?.data ?? [])) {
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
    }
    catch {
        logger_js_1.logger.warn("CMC social fetch failed");
    }
    for (const sym of symbols) {
        if (!result[sym])
            result[sym] = { symbol: sym, sentimentScore: 0, mentionCount: 0, trendingRank: 0 };
    }
    return result;
}
async function fetchKOLSignals(symbols) {
    const signals = [];
    try {
        const res = await cmcAxios.get("/content/posts/top", {
            params: { symbol: symbols.join(","), limit: 50 },
        });
        for (const item of (res.data?.data ?? [])) {
            const sym = String(item["symbol"] ?? "");
            if (!sym || !symbols.includes(sym))
                continue;
            const score = Number(item["bullish_score"] ?? 50);
            signals.push({
                symbol: sym,
                sentiment: score > 60 ? "bullish" : score < 40 ? "bearish" : "neutral",
                strength: score,
                source: String(item["source"] ?? "cmc-kol"),
            });
        }
    }
    catch {
        logger_js_1.logger.warn("CMC KOL signals fetch failed");
    }
    return signals;
}
async function fetchCMCSnapshot(symbols) {
    logger_js_1.logger.debug("Fetching CMC snapshot", { count: symbols.length });
    const [fearGreed, fundingRates, ohlcv, social, kolSignals] = await Promise.all([
        fetchFearGreed(),
        fetchFundingRates(symbols),
        fetchOHLCV(symbols),
        fetchSocial(symbols),
        fetchKOLSignals(symbols),
    ]);
    logger_js_1.logger.debug("CMC snapshot ready", { fearGreed: fearGreed.value });
    return { fearGreed, fundingRates, ohlcv, social, kolSignals, fetchedAt: Date.now() };
}
//# sourceMappingURL=cmcFeed.js.map