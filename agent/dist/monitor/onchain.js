"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicClient = void 0;
exports.readLatestOracleRecord = readLatestOracleRecord;
exports.isAssetHalted = isAssetHalted;
exports.getCompetitionPnl = getCompetitionPnl;
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
const config_js_1 = require("../config.js");
const logger_js_1 = require("../utils/logger.js");
const chain = config_js_1.BSC_CHAIN.id === 56 ? chains_1.bsc : chains_1.bscTestnet;
exports.publicClient = (0, viem_1.createPublicClient)({
    chain,
    transport: (0, viem_1.http)(config_js_1.BSC_CHAIN.rpcUrl),
});
async function readLatestOracleRecord(asset) {
    try {
        const r = await exports.publicClient.readContract({
            address: config_js_1.CONTRACTS.riskGuardOracle,
            abi: config_js_1.RISK_GUARD_ORACLE_ABI,
            functionName: "latestRecord",
            args: [asset],
        });
        return {
            verdict: Number(r.verdict), cautionFlags: Number(r.cautionFlags),
            drawdownBps: Number(r.drawdownBps), atrMultiple10: Number(r.atrMultiple10),
            rsi: Number(r.rsi), spreadBps: Number(r.spreadBps),
            timestamp: Number(r.timestamp), blockNumber: r.blockNumber, reason: r.reason,
        };
    }
    catch (err) {
        logger_js_1.logger.warn("Failed to read oracle record", { asset, err });
        return null;
    }
}
async function isAssetHalted(asset) {
    try {
        return await exports.publicClient.readContract({
            address: config_js_1.CONTRACTS.riskGuardOracle,
            abi: config_js_1.RISK_GUARD_ORACLE_ABI,
            functionName: "isHalted",
            args: [asset],
        });
    }
    catch {
        return false;
    }
}
async function getCompetitionPnl() {
    try {
        return await exports.publicClient.readContract({
            address: config_js_1.CONTRACTS.tradeLogger,
            abi: config_js_1.TRADE_LOGGER_ABI,
            functionName: "competitionPnlBps",
        });
    }
    catch {
        return 0n;
    }
}
//# sourceMappingURL=onchain.js.map