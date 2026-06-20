"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logTradeOpen = logTradeOpen;
exports.logTradeClose = logTradeClose;
const viem_1 = require("viem");
const accounts_1 = require("viem/accounts");
const chains_1 = require("viem/chains");
const config_js_1 = require("../config.js");
const logger_js_1 = require("../utils/logger.js");
const chain = config_js_1.BSC_CHAIN.id === 56 ? chains_1.bsc : chains_1.bscTestnet;
function getLoggerWalletClient() {
    const pk = process.env.LOGGER_PRIVATE_KEY;
    if (!pk)
        throw new Error("LOGGER_PRIVATE_KEY not set — required for on-chain trade logging");
    return (0, viem_1.createWalletClient)({
        account: (0, accounts_1.privateKeyToAccount)(pk),
        chain,
        transport: (0, viem_1.http)(config_js_1.BSC_CHAIN.rpcUrl),
    });
}
const priceToUint128 = (price) => BigInt(Math.round(price * 1e9)) * BigInt(1e9);
async function logTradeOpen(decision, assetAddress, entryPrice, guardVerdict, swapTxHash) {
    try {
        const client = getLoggerWalletClient();
        const txHashBytes = swapTxHash
            ? swapTxHash.padEnd(66, "0")
            : "0x" + "0".repeat(64);
        const hash = await client.writeContract({
            address: config_js_1.CONTRACTS.tradeLogger,
            abi: config_js_1.TRADE_LOGGER_ABI,
            functionName: "openTrade",
            args: [
                assetAddress,
                decision.action === "BUY" ? config_js_1.Direction.BUY : config_js_1.Direction.SELL,
                priceToUint128(entryPrice),
                priceToUint128(decision.sizeUsd),
                Math.min(100, Math.max(0, decision.confidence)),
                guardVerdict,
                txHashBytes,
                decision.strategyTag,
                decision.reason,
            ],
        });
        logger_js_1.logger.info("Trade opened on-chain", { hash, symbol: decision.symbol, action: decision.action });
        return { logHash: hash };
    }
    catch (err) {
        logger_js_1.logger.error("Failed to log trade open", { err });
        return { logHash: null };
    }
}
async function logTradeClose(tradeId, exitPrice, exitTxHash, stoppedOut) {
    try {
        const client = getLoggerWalletClient();
        const txHashBytes = exitTxHash
            ? exitTxHash.padEnd(66, "0")
            : "0x" + "0".repeat(64);
        const hash = await client.writeContract({
            address: config_js_1.CONTRACTS.tradeLogger,
            abi: config_js_1.TRADE_LOGGER_ABI,
            functionName: "closeTrade",
            args: [tradeId, priceToUint128(exitPrice), txHashBytes, stoppedOut],
        });
        logger_js_1.logger.info("Trade closed on-chain", { tradeId: tradeId.toString(), hash, exitPrice, stoppedOut });
        return hash;
    }
    catch (err) {
        logger_js_1.logger.error("Failed to log trade close", { err });
        return null;
    }
}
//# sourceMappingURL=tradeLog.js.map