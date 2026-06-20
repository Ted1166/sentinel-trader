"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordStopLoss = recordStopLoss;
exports.checkCooldown = checkCooldown;
exports.clearCooldown = clearCooldown;
const config_js_1 = require("../config.js");
/** Track last stop-loss time per symbol */
const lastStopLoss = new Map();
function recordStopLoss(symbol) {
    lastStopLoss.set(symbol, Date.now());
}
function checkCooldown(symbol) {
    const lastTime = lastStopLoss.get(symbol);
    if (!lastTime) {
        return { verdict: config_js_1.Verdict.CLEAR, cautionFlag: 0, secondsLeft: 0, reason: "no recent stop-loss" };
    }
    const elapsedSecs = (Date.now() - lastTime) / 1000;
    const secondsLeft = Math.max(0, config_js_1.RISK.cooldownSecs - elapsedSecs);
    if (secondsLeft > 0) {
        return {
            verdict: config_js_1.Verdict.HALT,
            cautionFlag: config_js_1.CautionFlag.COOLDOWN,
            secondsLeft,
            reason: `cooldown active — ${secondsLeft.toFixed(0)}s remaining after stop-loss`,
        };
    }
    return {
        verdict: config_js_1.Verdict.CLEAR,
        cautionFlag: 0,
        secondsLeft: 0,
        reason: "cooldown elapsed",
    };
}
function clearCooldown(symbol) {
    lastStopLoss.delete(symbol);
}
//# sourceMappingURL=cooldown.js.map