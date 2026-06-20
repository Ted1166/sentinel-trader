"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSnapshot = buildSnapshot;
const cmcFeed_js_1 = require("./cmcFeed.js");
const onchain_js_1 = require("./onchain.js");
const tokens_js_1 = require("../utils/tokens.js");
const logger_js_1 = require("../utils/logger.js");
async function buildSnapshot() {
    const symbols = tokens_js_1.TOKEN_SYMBOLS.slice(0, 60);
    logger_js_1.logger.info("Building agent snapshot", { symbols: symbols.length });
    const cmcRaw = await (0, cmcFeed_js_1.fetchCMCSnapshot)(symbols);
    const tokens = [];
    for (const sym of symbols) {
        const token = (0, tokens_js_1.tokenBySymbol)(sym);
        if (!token)
            continue;
        const ohlcv = cmcRaw.ohlcv[sym];
        const funding = cmcRaw.fundingRates[sym];
        const social = cmcRaw.social[sym];
        const kolFor = cmcRaw.kolSignals.filter((k) => k.symbol === sym);
        const kolBullish = kolFor.length > 0
            ? kolFor.reduce((s, k) => s + k.strength, 0) / kolFor.length
            : 50;
        let oracleRecord = null;
        if (tokens_js_1.PRIORITY_TOKENS.includes(sym)) {
            oracleRecord = await (0, onchain_js_1.readLatestOracleRecord)(token.address);
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
    logger_js_1.logger.info("Snapshot built", { fearGreed: cmcRaw.fearGreed.value, tokens: tokens.length });
    return {
        fearGreedValue: cmcRaw.fearGreed.value,
        fearGreedLabel: cmcRaw.fearGreed.classification,
        tokens, prioritySymbols: tokens_js_1.PRIORITY_TOKENS,
        cmcRaw, capturedAt: Date.now(),
    };
}
//# sourceMappingURL=snapshot.js.map