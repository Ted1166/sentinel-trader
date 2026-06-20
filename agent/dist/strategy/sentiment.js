"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeSentimentSignal = computeSentimentSignal;
exports.scoreSentiment = scoreSentiment;
function computeSentimentSignal(token) {
    const socialScore = Math.round((token.sentimentScore + 1) * 50);
    const kolScore = token.kolBullish;
    const diff = Math.abs(socialScore - kolScore);
    const divergence = diff >= 30;
    let score = (socialScore * 0.4 + kolScore * 0.6);
    let reason = "";
    if (divergence && kolScore > socialScore) {
        score = Math.min(100, score + 15);
        reason = `Under-radar: KOL bullish (${kolScore}) vs low social (${socialScore}) → accumulation`;
    }
    else if (divergence && socialScore > kolScore) {
        score = Math.max(0, score - 15);
        reason = `Hype divergence: social (${socialScore}) vs KOL bearish (${kolScore}) → caution`;
    }
    else {
        reason = `Aligned: social=${socialScore} KOL=${kolScore} trending=${token.trendingRank > 0 ? "#" + token.trendingRank : "no"}`;
    }
    return {
        symbol: token.symbol,
        score: Math.round(Math.min(100, Math.max(0, score))),
        divergence, socialScore, kolScore, reason,
    };
}
function scoreSentiment(tokens) {
    return tokens.map(computeSentimentSignal);
}
//# sourceMappingURL=sentiment.js.map