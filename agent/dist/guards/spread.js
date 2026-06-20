"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSpread = checkSpread;
exports.estimateSpreadBps = estimateSpreadBps;
const config_js_1 = require("../config.js");
/**
 * Bid/ask spread guard.
 * Approximates spread from 24h price range when real order book is unavailable.
 * spreadBps: bid/ask spread in basis points
 */
function checkSpread(spreadBps) {
    if (spreadBps >= config_js_1.RISK.spreadHaltBps) {
        return {
            verdict: config_js_1.Verdict.HALT,
            cautionFlag: config_js_1.CautionFlag.SPREAD,
            spreadBps,
            reason: `spread ${spreadBps}bps >= halt threshold ${config_js_1.RISK.spreadHaltBps}bps`,
        };
    }
    if (spreadBps >= config_js_1.RISK.spreadCautionBps) {
        return {
            verdict: config_js_1.Verdict.CAUTION,
            cautionFlag: config_js_1.CautionFlag.SPREAD,
            spreadBps,
            reason: `spread ${spreadBps}bps >= caution threshold ${config_js_1.RISK.spreadCautionBps}bps`,
        };
    }
    return {
        verdict: config_js_1.Verdict.CLEAR,
        cautionFlag: 0,
        spreadBps,
        reason: `spread ${spreadBps}bps within limits`,
    };
}
/** Estimate spread from volume — low volume = wider spread */
function estimateSpreadBps(volume24h, price) {
    if (volume24h <= 0 || price <= 0)
        return 200; // assume wide if no data
    const volumeScore = Math.min(volume24h / 1_000_000, 1); // cap at $1M
    // Low volume: ~200bps, high volume: ~5bps
    return Math.round(200 * (1 - volumeScore) + 5 * volumeScore);
}
//# sourceMappingURL=spread.js.map