"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreAllTokens = scoreAllTokens;
const fearGreed_js_1 = require("./fearGreed.js");
const momentum_js_1 = require("./momentum.js");
const sentiment_js_1 = require("./sentiment.js");
const logger_js_1 = require("../utils/logger.js");
/**
 * Combines all three signal layers into a single composite score.
 * Weights: FearGreed=40%, Momentum=35%, Sentiment=25%
 */
function scoreAllTokens(tokens, fearGreed, rsiMap) {
    logger_js_1.logger.debug("Scoring tokens", { count: tokens.length, fearGreed });
    const fgSignals = (0, fearGreed_js_1.scoreFearGreed)(tokens, fearGreed);
    const momSignals = (0, momentum_js_1.scoreMomentum)(tokens, rsiMap);
    const sentSignals = (0, sentiment_js_1.scoreSentiment)(tokens);
    const scores = tokens.map((token, i) => {
        const fg = fgSignals[i];
        const mom = momSignals[i];
        const sent = sentSignals[i];
        const total = Math.round(fg.score * 0.40 +
            mom.score * 0.35 +
            sent.score * 0.25);
        return {
            symbol: token.symbol,
            totalScore: Math.min(100, Math.max(0, total)),
            fearGreed: fg,
            momentum: mom,
            sentiment: sent,
            rsi: rsiMap[token.symbol] ?? 50,
            rank: 0, // set after sorting
        };
    });
    // Sort descending
    scores.sort((a, b) => b.totalScore - a.totalScore);
    scores.forEach((s, i) => { s.rank = i + 1; });
    const topBuys = scores.filter((s) => s.totalScore >= 60).slice(0, 3);
    const topSells = scores.filter((s) => s.totalScore <= 40).slice(0, 3);
    logger_js_1.logger.info("Token scoring complete", {
        topBuy: topBuys[0] ? `${topBuys[0].symbol}(${topBuys[0].totalScore})` : "none",
        topSell: topSells[0] ? `${topSells[0].symbol}(${topSells[0].totalScore})` : "none",
    });
    return { ranked: scores, topBuys, topSells, fearGreed, scoredAt: Date.now() };
}
//# sourceMappingURL=scorer.js.map