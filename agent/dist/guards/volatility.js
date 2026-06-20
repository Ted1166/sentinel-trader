"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeATR = computeATR;
exports.checkVolatility = checkVolatility;
const config_js_1 = require("../config.js");
function computeATR(highs, lows, closes) {
    const period = Math.min(14, highs.length);
    if (period < 2)
        return 0;
    let atrSum = 0;
    for (let i = 1; i < period; i++) {
        const tr = Math.max(highs[i] - lows[i], Math.abs(highs[i] - closes[i - 1]), Math.abs(lows[i] - closes[i - 1]));
        atrSum += tr;
    }
    return atrSum / (period - 1);
}
function checkVolatility(high24h, low24h, price) {
    if (price <= 0) {
        return { verdict: config_js_1.Verdict.CLEAR, cautionFlag: 0, atr: 0, atrMultiple: 0, reason: "no price data" };
    }
    const atr = (high24h - low24h);
    const atrMultiple = atr > 0 ? price / atr : 0;
    const volatilityRatio = atr / price;
    if (volatilityRatio >= 0.40) {
        return {
            verdict: config_js_1.Verdict.HALT, cautionFlag: config_js_1.CautionFlag.VOLATILITY,
            atr, atrMultiple,
            reason: `volatility ${(volatilityRatio * 100).toFixed(1)}% of price >= halt threshold 40%`,
        };
    }
    if (volatilityRatio >= 0.20) {
        return {
            verdict: config_js_1.Verdict.CAUTION, cautionFlag: config_js_1.CautionFlag.VOLATILITY,
            atr, atrMultiple,
            reason: `volatility ${(volatilityRatio * 100).toFixed(1)}% of price >= caution threshold 20%`,
        };
    }
    return {
        verdict: config_js_1.Verdict.CLEAR, cautionFlag: 0, atr, atrMultiple,
        reason: `volatility ${(volatilityRatio * 100).toFixed(1)}% within limits`,
    };
}
//# sourceMappingURL=volatility.js.map