"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDrawdown = checkDrawdown;
const config_js_1 = require("../config.js");
function checkDrawdown(portfolioUsd, peakUsd) {
    if (peakUsd <= 0) {
        return { verdict: config_js_1.Verdict.CLEAR, cautionFlag: 0, drawdownPct: 0, reason: "no peak yet" };
    }
    const drawdownPct = ((peakUsd - portfolioUsd) / peakUsd) * 100;
    if (drawdownPct >= config_js_1.RISK.haltDrawdownPct) {
        return {
            verdict: config_js_1.Verdict.HALT,
            cautionFlag: config_js_1.CautionFlag.DRAWDOWN,
            drawdownPct,
            reason: `drawdown ${drawdownPct.toFixed(2)}% >= halt threshold ${config_js_1.RISK.haltDrawdownPct}%`,
        };
    }
    if (drawdownPct >= config_js_1.RISK.cautionDrawdownPct) {
        return {
            verdict: config_js_1.Verdict.CAUTION,
            cautionFlag: config_js_1.CautionFlag.DRAWDOWN,
            drawdownPct,
            reason: `drawdown ${drawdownPct.toFixed(2)}% >= caution threshold ${config_js_1.RISK.cautionDrawdownPct}%`,
        };
    }
    return {
        verdict: config_js_1.Verdict.CLEAR,
        cautionFlag: 0,
        drawdownPct,
        reason: `drawdown ${drawdownPct.toFixed(2)}% within limits`,
    };
}
//# sourceMappingURL=drawdown.js.map