"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runGuards = runGuards;
exports.verdictLabel = verdictLabel;
exports.activeCautionFlags = activeCautionFlags;
const config_js_1 = require("../config.js");
const drawdown_js_1 = require("./drawdown.js");
const volatility_js_1 = require("./volatility.js");
const rsi_js_1 = require("./rsi.js");
const spread_js_1 = require("./spread.js");
const cooldown_js_1 = require("./cooldown.js");
const logger_js_1 = require("../utils/logger.js");
/**
 * Run all 5 guards against a token snapshot.
 * Worst verdict wins. Caution flags are OR'd together.
 */
function runGuards(token, portfolioUsd, peakUsd, rsi // precomputed RSI
) {
    const spreadBps = (0, spread_js_1.estimateSpreadBps)(token.volume24h, token.price);
    const drawdown = (0, drawdown_js_1.checkDrawdown)(portfolioUsd, peakUsd);
    const volatility = (0, volatility_js_1.checkVolatility)(token.high24h, token.low24h, token.price);
    const rsiResult = (0, rsi_js_1.checkRSI)(rsi);
    const spread = (0, spread_js_1.checkSpread)(spreadBps);
    const cooldown = (0, cooldown_js_1.checkCooldown)(token.symbol);
    const results = [drawdown, volatility, rsiResult, spread, cooldown];
    // Worst verdict wins
    const worstVerdict = results.reduce((worst, r) => (r.verdict > worst ? r.verdict : worst), config_js_1.Verdict.CLEAR);
    // OR all caution flags
    const cautionFlags = results.reduce((flags, r) => flags | r.cautionFlag, 0);
    // Primary reason = worst guard's reason
    const worstResult = results.find((r) => r.verdict === worstVerdict);
    const drawdownPct = drawdown.drawdownPct;
    const drawdownBps = Math.round(drawdownPct * -100); // negative = loss
    logger_js_1.logger.debug("Guard result", {
        symbol: token.symbol,
        verdict: Object.keys(config_js_1.Verdict)[worstVerdict],
        flags: cautionFlags.toString(2).padStart(5, "0"),
    });
    return {
        verdict: worstVerdict,
        cautionFlags,
        drawdownBps,
        atrMultiple10: Math.round((token.high24h - token.low24h) / Math.max(token.price, 1) * 100),
        rsi: Math.round(rsi),
        spreadBps,
        reason: worstResult.reason,
        details: {
            drawdown: drawdown.reason,
            volatility: volatility.reason,
            rsi: rsiResult.reason,
            spread: spread.reason,
            cooldown: cooldown.reason,
        },
    };
}
function verdictLabel(v) {
    return Object.keys(config_js_1.Verdict).find((k) => config_js_1.Verdict[k] === v) ?? "UNKNOWN";
}
function activeCautionFlags(flags) {
    const active = [];
    if (flags & config_js_1.CautionFlag.DRAWDOWN)
        active.push("DRAWDOWN");
    if (flags & config_js_1.CautionFlag.VOLATILITY)
        active.push("VOLATILITY");
    if (flags & config_js_1.CautionFlag.RSI)
        active.push("RSI");
    if (flags & config_js_1.CautionFlag.SPREAD)
        active.push("SPREAD");
    if (flags & config_js_1.CautionFlag.COOLDOWN)
        active.push("COOLDOWN");
    return active;
}
//# sourceMappingURL=aggregator.js.map