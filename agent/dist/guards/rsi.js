"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRSI = computeRSI;
exports.checkRSI = checkRSI;
const config_js_1 = require("../config.js");
function computeRSI(closes, period = 14) {
    if (closes.length < period + 1)
        return 50;
    let gains = 0;
    let losses = 0;
    for (let i = closes.length - period; i < closes.length; i++) {
        const diff = closes[i] - closes[i - 1];
        if (diff > 0)
            gains += diff;
        else
            losses -= diff;
    }
    const avgGain = gains / period;
    const avgLoss = losses / period;
    if (avgLoss === 0)
        return 100;
    const rs = avgGain / avgLoss;
    return 100 - 100 / (1 + rs);
}
function checkRSI(rsi) {
    if (rsi >= config_js_1.RISK.rsiOverbought) {
        return {
            verdict: config_js_1.Verdict.CAUTION,
            cautionFlag: config_js_1.CautionFlag.RSI,
            rsi,
            reason: `RSI ${rsi.toFixed(1)} >= overbought ${config_js_1.RISK.rsiOverbought}`,
        };
    }
    if (rsi <= config_js_1.RISK.rsiOversold) {
        return {
            verdict: config_js_1.Verdict.CAUTION,
            cautionFlag: config_js_1.CautionFlag.RSI,
            rsi,
            reason: `RSI ${rsi.toFixed(1)} <= oversold ${config_js_1.RISK.rsiOversold}`,
        };
    }
    return {
        verdict: config_js_1.Verdict.CLEAR,
        cautionFlag: 0,
        rsi,
        reason: `RSI ${rsi.toFixed(1)} within normal range`,
    };
}
//# sourceMappingURL=rsi.js.map