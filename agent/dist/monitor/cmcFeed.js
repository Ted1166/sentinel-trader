"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchFearGreed = fetchFearGreed;
exports.fetchOHLCV = fetchOHLCV;
exports.fetchFundingRates = fetchFundingRates;
exports.fetchSocial = fetchSocial;
exports.fetchKOLSignals = fetchKOLSignals;
exports.fetchCMCSnapshot = fetchCMCSnapshot;
const axios_1 = __importDefault(require("axios"));
const config_js_1 = require("../config.js");
const logger_js_1 = require("../utils/logger.js");
const cmcAxios = axios_1.default.create({
    baseURL: "https://pro-api.coinmarketcap.com",
    headers: { "X-CMC_PRO_API_KEY": config_js_1.CMC.apiKey },
    timeout: 10_000,
});
async function fetchFearGreed() {
    try {
        const res = await cmcAxios.get("/v3/fear-and-greed/latest");
        const d = res.data?.data;
        return {
            value: Number(d?.value ?? 50),
            classification: String(d?.value_classification ?? "Neutral"),
            timestamp: Date.now(),
        };
    }
    catch (err) {
        logger_js_1.logger.warn("CMC fear-greed fetch failed, using neutral default", {
            status: axios_1.default.isAxiosError(err) ? err.response?.status : undefined,
        });
        return { value: 50, classification: "Neutral", timestamp: Date.now() };
    }
}
async function fetchOHLCV(symbols) {
    const result = {};
    if (symbols.length === 0)
        return result;
    try {
        const res = await cmcAxios.get("/v1/cryptocurrency/quotes/latest", {
            params: { symbol: symbols.join(","), convert: "USD" },
        });
        const data = res.data?.data ?? {};
        for (const sym of symbols) {
            const entry = data[sym];
            const q = entry?.quote?.USD;
            if (!q)
                continue;
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
    }
    catch (err) {
        logger_js_1.logger.warn("CMC OHLCV fetch failed", {
            status: axios_1.default.isAxiosError(err) ? err.response?.status : undefined,
        });
    }
    return result;
}
async function fetchFundingRates(symbols) {
    const result = {};
    for (const sym of symbols) {
        result[sym] = { symbol: sym, fundingRate: 0, nextFunding: 0, exchange: "unavailable" };
    }
    return result;
}
async function fetchSocial(symbols) {
    const result = {};
    for (const sym of symbols) {
        result[sym] = { symbol: sym, sentimentScore: 0, mentionCount: 0, trendingRank: 0 };
    }
    return result;
}
async function fetchKOLSignals(_symbols) {
    return [];
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
    logger_js_1.logger.debug("CMC snapshot ready", { fearGreed: fearGreed.value, pricesFetched: Object.keys(ohlcv).length });
    return { fearGreed, fundingRates, ohlcv, social, kolSignals, fetchedAt: Date.now() };
}
//# sourceMappingURL=cmcFeed.js.map