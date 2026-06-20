"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeFearGreedSignal = computeFearGreedSignal;
exports.scoreFearGreed = scoreFearGreed;
const logger_js_1 = require("../utils/logger.js");
function computeFearGreedSignal(token, fearGreed) {
    const fr = token.fundingRate;
    let score = 50;
    let signal = "NEUTRAL";
    let reason = "";
    if (fearGreed <= 25 && fr < -0.0001) {
        score = 90;
        signal = "STRONG_BUY";
        reason = `Extreme fear (F&G=${fearGreed}) + negative funding (${(fr * 100).toFixed(4)}%) → contrarian buy`;
    }
    else if (fearGreed <= 40 && fr < 0) {
        score = 70;
        signal = "BUY";
        reason = `Fear (F&G=${fearGreed}) + negative funding (${(fr * 100).toFixed(4)}%) → buy`;
    }
    else if (fearGreed >= 75 && fr > 0.0005) {
        score = 10;
        signal = "STRONG_SELL";
        reason = `Extreme greed (F&G=${fearGreed}) + high funding (${(fr * 100).toFixed(4)}%) → sell`;
    }
    else if (fearGreed >= 60 && fr > 0.0002) {
        score = 30;
        signal = "SELL";
        reason = `Greed (F&G=${fearGreed}) + positive funding (${(fr * 100).toFixed(4)}%) → reduce`;
    }
    else {
        score = 50 + (50 - fearGreed) * 0.2;
        signal = "NEUTRAL";
        reason = `Mixed signals — F&G=${fearGreed}, funding=${(fr * 100).toFixed(4)}%`;
    }
    return { symbol: token.symbol, signal, score, fearGreed, fundingRate: fr, reason };
}
function scoreFearGreed(tokens, fearGreed) {
    logger_js_1.logger.debug("Running fear-greed strategy", { fearGreed, tokens: tokens.length });
    return tokens.map((t) => computeFearGreedSignal(t, fearGreed));
}
//# sourceMappingURL=fearGreed.js.map