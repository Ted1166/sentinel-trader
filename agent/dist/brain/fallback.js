"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fallbackDecision = fallbackDecision;
const config_js_1 = require("../config.js");
function fallbackDecision(guardResult, scorer, portfolioUsd) {
    if (guardResult.verdict === config_js_1.Verdict.HALT) {
        return {
            action: "HOLD", symbol: null, sizeUsd: 0,
            stopLossPct: 5, takeProfitPct: 10, confidence: 95,
            strategyTag: "halt-protection",
            reason: `Guard HALT: ${guardResult.reason}`,
        };
    }
    const sizeMultiplier = guardResult.verdict === config_js_1.Verdict.CAUTION ? 0.67 : 1.0;
    const maxSize = portfolioUsd * 0.20 * sizeMultiplier;
    const topBuy = scorer.topBuys[0];
    const topSell = scorer.topSells[0];
    if (topBuy && topBuy.totalScore >= 65 && guardResult.verdict === config_js_1.Verdict.CLEAR) {
        return {
            action: "BUY", symbol: topBuy.symbol,
            sizeUsd: Math.min(maxSize, 500),
            stopLossPct: 5, takeProfitPct: 10,
            confidence: Math.round(topBuy.totalScore * 0.9),
            strategyTag: topBuy.fearGreed.signal.includes("BUY") ? "fear-greed-rotation" : "momentum-rsi",
            reason: topBuy.fearGreed.reason,
        };
    }
    if (topSell && topSell.totalScore <= 35 && guardResult.verdict === config_js_1.Verdict.CLEAR) {
        return {
            action: "SELL", symbol: topSell.symbol,
            sizeUsd: Math.min(maxSize, 500),
            stopLossPct: 5, takeProfitPct: 10,
            confidence: Math.round((100 - topSell.totalScore) * 0.9),
            strategyTag: "fear-greed-rotation",
            reason: topSell.fearGreed.reason,
        };
    }
    return {
        action: "HOLD", symbol: null, sizeUsd: 0,
        stopLossPct: 5, takeProfitPct: 10,
        confidence: 60,
        strategyTag: "no-signal",
        reason: `No strong signal — top score: ${topBuy?.totalScore ?? 0}, F&G: ${scorer.fearGreed}`,
    };
}
//# sourceMappingURL=fallback.js.map