"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeOracleVerdict = writeOracleVerdict;
const viem_1 = require("viem");
const accounts_1 = require("viem/accounts");
const chains_1 = require("viem/chains");
const config_js_1 = require("../config.js");
const logger_js_1 = require("../utils/logger.js");
const chain = config_js_1.BSC_CHAIN.id === 56 ? chains_1.bsc : chains_1.bscTestnet;
function getLoggerWalletClient() {
    const pk = process.env.LOGGER_PRIVATE_KEY;
    if (!pk)
        throw new Error("LOGGER_PRIVATE_KEY not set — required for on-chain verdict logging");
    return (0, viem_1.createWalletClient)({
        account: (0, accounts_1.privateKeyToAccount)(pk),
        chain,
        transport: (0, viem_1.http)(config_js_1.BSC_CHAIN.rpcUrl),
    });
}
async function writeOracleVerdict(asset, guardResult) {
    try {
        const client = getLoggerWalletClient();
        const hash = await client.writeContract({
            address: config_js_1.CONTRACTS.riskGuardOracle,
            abi: config_js_1.RISK_GUARD_ORACLE_ABI,
            functionName: "recordVerdict",
            args: [
                asset,
                guardResult.verdict,
                guardResult.cautionFlags,
                guardResult.drawdownBps,
                guardResult.atrMultiple10,
                Math.min(255, Math.max(0, guardResult.rsi)),
                Math.min(65535, guardResult.spreadBps),
                guardResult.reason.slice(0, 256),
            ],
        });
        logger_js_1.logger.info("Oracle verdict written", { asset, hash, verdict: guardResult.verdict });
        return hash;
    }
    catch (err) {
        logger_js_1.logger.error("Failed to write oracle verdict", { asset, err });
        return null;
    }
}
//# sourceMappingURL=oracle.js.map