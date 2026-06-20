"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_js_1 = require("./config.js");
const logger_js_1 = require("./utils/logger.js");
const snapshot_js_1 = require("./monitor/snapshot.js");
const aggregator_js_1 = require("./guards/aggregator.js");
const cooldown_js_1 = require("./guards/cooldown.js");
const scorer_js_1 = require("./strategy/scorer.js");
const claude_js_1 = require("./brain/claude.js");
const oracle_js_1 = require("./executor/oracle.js");
const tradeLog_js_1 = require("./executor/tradeLog.js");
const vault_js_1 = require("./executor/vault.js");
const twak_js_1 = require("./executor/twak.js");
const tokens_js_1 = require("./utils/tokens.js");
// ─── State ───────────────────────────────────────────────────────────────────
let peakPortfolioUsd = 0;
let cycleCount = 0;
let dailyTradeCount = 0;
let lastDayReset = new Date().getUTCDate();
const openPositions = new Map();
// ─── Daily reset ─────────────────────────────────────────────────────────────
function checkDayReset() {
    const today = new Date().getUTCDate();
    if (today !== lastDayReset) {
        dailyTradeCount = 0;
        lastDayReset = today;
        logger_js_1.logger.info("Daily trade count reset");
    }
}
// ─── Stop-loss / take-profit check ───────────────────────────────────────────
async function checkExits(snapshot) {
    for (const [symbol, pos] of openPositions.entries()) {
        const token = snapshot.tokens.find((t) => t.symbol === symbol);
        if (!token || token.price <= 0)
            continue;
        const priceDiff = (token.price - pos.entryPrice) / pos.entryPrice * 100;
        const pnl = pos.direction === "BUY" ? priceDiff : -priceDiff;
        let shouldExit = false;
        let stoppedOut = false;
        let exitReason = "";
        if (pnl <= -pos.stopLossPct) {
            shouldExit = true;
            stoppedOut = true;
            exitReason = `stop-loss hit at ${pnl.toFixed(2)}%`;
            (0, cooldown_js_1.recordStopLoss)(symbol);
        }
        else if (pnl >= pos.takeProfitPct) {
            shouldExit = true;
            exitReason = `take-profit hit at ${pnl.toFixed(2)}%`;
        }
        if (shouldExit) {
            logger_js_1.logger.info("Exiting position", { symbol, pnl: pnl.toFixed(2), reason: exitReason });
            // Execute exit swap via TWAK
            const usdcAddr = tokens_js_1.TOKENS.USDC.address;
            const swapResult = await (0, twak_js_1.executeSwap)({
                fromToken: pos.address,
                toToken: usdcAddr,
                amountUsd: pos.sizeUsd,
                slippagePct: 0.5,
            });
            // Log exit on-chain
            await (0, tradeLog_js_1.logTradeClose)(pos.tradeId, token.price, swapResult.txHash, stoppedOut);
            openPositions.delete(symbol);
        }
    }
}
// ─── Main cycle ──────────────────────────────────────────────────────────────
async function runCycle() {
    cycleCount++;
    checkDayReset();
    logger_js_1.logger.info(`─── Cycle #${cycleCount} ───`);
    // 1. Build snapshot from CMC + on-chain
    const snapshot = await (0, snapshot_js_1.buildSnapshot)();
    // 2. Check exits for open positions
    await checkExits(snapshot);
    // 3. Get portfolio value
    const portfolioUsd = await (0, twak_js_1.getPortfolioUsd)();
    if (portfolioUsd > peakPortfolioUsd)
        peakPortfolioUsd = portfolioUsd;
    logger_js_1.logger.info("Portfolio", {
        current: `$${portfolioUsd.toFixed(2)}`,
        peak: `$${peakPortfolioUsd.toFixed(2)}`,
        openPositions: openPositions.size,
    });
    // 4. Build RSI map from available price data
    const rsiMap = {};
    for (const token of snapshot.tokens) {
        // Approximate RSI from current vs range (real RSI needs candle history)
        const range = token.high24h - token.low24h;
        if (range > 0 && token.price > 0) {
            const position = (token.price - token.low24h) / range * 100;
            rsiMap[token.symbol] = 30 + position * 0.4; // maps 0-100% range to 30-70 RSI
        }
        else {
            rsiMap[token.symbol] = 50;
        }
    }
    // 5. Score all tokens
    const scorerOutput = (0, scorer_js_1.scoreAllTokens)(snapshot.tokens, snapshot.fearGreedValue, rsiMap);
    // 6. Run guards on the top candidate
    const topCandidate = scorerOutput.topBuys[0] ?? scorerOutput.ranked[0];
    const topToken = snapshot.tokens.find((t) => t.symbol === topCandidate.symbol);
    const guardResult = topToken
        ? (0, aggregator_js_1.runGuards)(topToken, portfolioUsd, peakPortfolioUsd, rsiMap[topToken.symbol] ?? 50)
        : { verdict: config_js_1.Verdict.HALT, cautionFlags: 0, drawdownBps: 0, atrMultiple10: 0, rsi: 50, spreadBps: 0, reason: "no token data", details: { drawdown: "", volatility: "", rsi: "", spread: "", cooldown: "" } };
    logger_js_1.logger.info("Guard verdict", {
        verdict: (0, aggregator_js_1.verdictLabel)(guardResult.verdict),
        reason: guardResult.reason,
        flags: guardResult.cautionFlags.toString(2).padStart(5, "0"),
    });
    // 7. Write verdict to oracle on-chain
    if (topToken) {
        await (0, oracle_js_1.writeOracleVerdict)(topToken.address, guardResult);
    }
    // 8. On HALT — protect vaults and skip trading
    if (guardResult.verdict === config_js_1.Verdict.HALT) {
        logger_js_1.logger.warn("HALT verdict — protecting vaults, skipping trade");
        if (topToken) {
            await (0, vault_js_1.batchProtectOnHalt)(topToken.address, guardResult.reason);
        }
        return;
    }
    // 9. Check daily trade limit
    if (dailyTradeCount >= config_js_1.AGENT.cycleIntervalSecs) {
        logger_js_1.logger.info("Daily trade limit reached, skipping");
        return;
    }
    // 10. Get Claude decision
    const decision = await (0, claude_js_1.getTradeDecision)({
        snapshot,
        scorerOutput,
        guardResult,
        portfolioUsd,
        openPositions: [...openPositions.keys()],
    });
    logger_js_1.logger.info("Trade decision", {
        action: decision.action,
        symbol: decision.symbol,
        sizeUsd: decision.sizeUsd,
        confidence: decision.confidence,
        tag: decision.strategyTag,
    });
    // 11. Execute trade if BUY or SELL
    if (decision.action !== "HOLD" && decision.symbol) {
        const tokenInfo = tokens_js_1.TOKENS[decision.symbol];
        if (!tokenInfo) {
            logger_js_1.logger.warn("Token not in eligible list", { symbol: decision.symbol });
            return;
        }
        // Skip if already have open position in this symbol
        if (openPositions.has(decision.symbol)) {
            logger_js_1.logger.info("Already have position", { symbol: decision.symbol });
            return;
        }
        const usdcAddr = tokens_js_1.TOKENS.USDC.address;
        const swapResult = await (0, twak_js_1.executeSwap)({
            fromToken: decision.action === "BUY" ? usdcAddr : tokenInfo.address,
            toToken: decision.action === "BUY" ? tokenInfo.address : usdcAddr,
            amountUsd: Math.min(decision.sizeUsd, 500), // hard cap
            slippagePct: 0.5,
        });
        if (!swapResult.success) {
            logger_js_1.logger.error("Swap failed, skipping trade log");
            return;
        }
        // Get entry price
        const tokenSnapshot = snapshot.tokens.find((t) => t.symbol === decision.symbol);
        const entryPrice = tokenSnapshot?.price ?? 0;
        // Log trade on-chain
        const { logHash } = await (0, tradeLog_js_1.logTradeOpen)(decision, tokenInfo.address, entryPrice, guardResult.verdict, swapResult.txHash);
        if (logHash) {
            dailyTradeCount++;
            openPositions.set(decision.symbol, {
                tradeId: 0n, // ID from receipt event — simplified here
                symbol: decision.symbol,
                address: tokenInfo.address,
                direction: decision.action,
                entryPrice,
                sizeUsd: decision.sizeUsd,
                stopLossPct: decision.stopLossPct,
                takeProfitPct: decision.takeProfitPct,
                openedAt: Date.now(),
            });
            logger_js_1.logger.info("Position opened", {
                symbol: decision.symbol,
                direction: decision.action,
                size: `$${decision.sizeUsd}`,
                entry: entryPrice,
                swapTx: swapResult.txHash,
                logTx: logHash,
            });
        }
    }
}
// ─── Boot ────────────────────────────────────────────────────────────────────
async function main() {
    logger_js_1.logger.info("SentinelTrader agent starting", {
        cycleInterval: config_js_1.AGENT.cycleIntervalSecs,
        aiEnabled: config_js_1.AGENT.aiEnabled,
    });
    // Register for competition (idempotent — safe to call multiple times)
    await (0, twak_js_1.registerForCompetition)();
    // Run immediately then on interval
    await runCycle();
    setInterval(async () => {
        try {
            await runCycle();
        }
        catch (err) {
            logger_js_1.logger.error("Cycle error", { err });
        }
    }, config_js_1.AGENT.cycleIntervalSecs * 1000);
}
main().catch((err) => {
    logger_js_1.logger.error("Fatal error", { err });
    process.exit(1);
});
//# sourceMappingURL=index.js.map