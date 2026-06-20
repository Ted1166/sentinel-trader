"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeMomentumSignal = computeMomentumSignal;
exports.scoreMomentum = scoreMomentum;
/**
 * Simplified MACD from price data.
 * Uses 12/26 EMA approximation from high/low/close.
 */
function approximateMACD(token) {
    if (token.price <= 0)
        return 0;
    // Approximate: short EMA closer to current price, long EMA closer to mid of range
    const midRange = (token.high24h + token.low24h) / 2;
    const shortEMA = token.price * 0.85 + midRange * 0.15; // 12-period weight
    const longEMA = token.price * 0.65 + midRange * 0.35; // 26-period weight
    return shortEMA - longEMA;
}
function computeMomentumSignal(token, rsi) {
    const macd = approximateMACD(token);
    // RSI component: bullish in 40-65 range (not overbought but trending up)
    let rsiScore = 50;
    if (rsi >= 50 && rsi <= 65)
        rsiScore = 75;
    else if (rsi > 65 && rsi <= 72)
        rsiScore = 60;
    else if (rsi > 72)
        rsiScore = 30; // overbought
    else if (rsi >= 35 && rsi < 50)
        rsiScore = 45;
    else if (rsi < 35)
        rsiScore = 65; // oversold bounce potential
    // MACD component
    const macdScore = macd > 0 ? Math.min(75, 50 + macd / token.price * 1000) : Math.max(25, 50 + macd / token.price * 1000);
    // Volume component — high volume confirms momentum
    const volumeScore = token.volume24h > 1_000_000 ? 60 : 40;
    const score = (rsiScore * 0.4 + macdScore * 0.4 + volumeScore * 0.2);
    return {
        symbol: token.symbol,
        score: Math.round(Math.min(100, Math.max(0, score))),
        rsi,
        macd,
        reason: `RSI=${rsi.toFixed(1)} MACD=${macd > 0 ? "+" : ""}${macd.toFixed(4)} vol=$${(token.volume24h / 1e6).toFixed(1)}M`,
    };
}
function scoreMomentum(tokens, rsiMap) {
    return tokens.map((t) => computeMomentumSignal(t, rsiMap[t.symbol] ?? 50));
}
//# sourceMappingURL=momentum.js.map