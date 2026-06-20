"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectUserTokens = protectUserTokens;
exports.batchProtectOnHalt = batchProtectOnHalt;
const viem_1 = require("viem");
const accounts_1 = require("viem/accounts");
const chains_1 = require("viem/chains");
const config_js_1 = require("../config.js");
const logger_js_1 = require("../utils/logger.js");
const onchain_js_1 = require("../monitor/onchain.js");
const chain = config_js_1.BSC_CHAIN.id === 56 ? chains_1.bsc : chains_1.bscTestnet;
function getGuardianWalletClient() {
    const pk = process.env.GUARDIAN_PRIVATE_KEY;
    if (!pk)
        throw new Error("GUARDIAN_PRIVATE_KEY not set — required for vault protection");
    return (0, viem_1.createWalletClient)({
        account: (0, accounts_1.privateKeyToAccount)(pk),
        chain,
        transport: (0, viem_1.http)(config_js_1.BSC_CHAIN.rpcUrl),
    });
}
async function protectUserTokens(user, token, amount, reason) {
    try {
        const client = getGuardianWalletClient();
        const hash = await client.writeContract({
            address: config_js_1.CONTRACTS.guardianVault,
            abi: config_js_1.GUARDIAN_VAULT_ABI,
            functionName: "protectTokens",
            args: [user, token, amount, reason],
        });
        logger_js_1.logger.info("Vault protection executed", { user, token, hash });
        return hash;
    }
    catch (err) {
        logger_js_1.logger.error("Vault protection failed", { user, token, err });
        return null;
    }
}
async function batchProtectOnHalt(token, reason) {
    if (config_js_1.AGENT.protectedWallets.length === 0) {
        logger_js_1.logger.debug("No protected wallets configured, skipping vault batch");
        return null;
    }
    try {
        const params = [];
        for (const wallet of config_js_1.AGENT.protectedWallets) {
            const isProtected = await onchain_js_1.publicClient.readContract({
                address: config_js_1.CONTRACTS.guardianVault,
                abi: config_js_1.GUARDIAN_VAULT_ABI,
                functionName: "isProtected",
                args: [wallet],
            });
            if (isProtected) {
                params.push({ user: wallet, token, amount: BigInt("1000000000000000000000") });
            }
        }
        if (params.length === 0) {
            logger_js_1.logger.info("No opted-in wallets to protect");
            return null;
        }
        const client = getGuardianWalletClient();
        const hash = await client.writeContract({
            address: config_js_1.CONTRACTS.guardianVault,
            abi: config_js_1.GUARDIAN_VAULT_ABI,
            functionName: "batchProtectTokens",
            args: [params, reason],
        });
        logger_js_1.logger.info("Batch vault protection executed", { wallets: params.length, hash });
        return hash;
    }
    catch (err) {
        logger_js_1.logger.error("Batch vault protection failed", { err });
        return null;
    }
}
//# sourceMappingURL=vault.js.map