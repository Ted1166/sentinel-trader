"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgentWallet = getAgentWallet;
exports.getBalance = getBalance;
exports.getPortfolioUsd = getPortfolioUsd;
exports.executeSwap = executeSwap;
exports.quoteSwap = quoteSwap;
exports.registerForCompetition = registerForCompetition;
exports.checkCompetitionStatus = checkCompetitionStatus;
const child_process_1 = require("child_process");
const util_1 = require("util");
const logger_js_1 = require("../utils/logger.js");
const execAsync = (0, util_1.promisify)(child_process_1.exec);
const TWAK_PASSWORD = process.env.TWAK_WALLET_PASSWORD ?? "";
const passwordFlag = TWAK_PASSWORD ? `--password "${TWAK_PASSWORD}"` : "";
async function getAgentWallet(chain = "bsc") {
    try {
        const { stdout } = await execAsync(`twak wallet address --chain ${chain} --json`);
        const data = JSON.parse(stdout);
        return data.address;
    }
    catch (err) {
        logger_js_1.logger.error("Failed to get agent wallet address", { err });
        return "";
    }
}
async function getBalance(tokenAddress, chain = "bsc", walletAddress) {
    try {
        const tokenFlag = tokenAddress ? `--token ${tokenAddress}` : "";
        const addressFlag = walletAddress ? `--address ${walletAddress}` : "";
        const { stdout } = await execAsync(`twak balance --chain ${chain} ${tokenFlag} ${addressFlag} --json`);
        const data = JSON.parse(stdout);
        return data;
    }
    catch (err) {
        logger_js_1.logger.warn("TWAK balance check failed", { tokenAddress, err });
        return { symbol: "UNKNOWN", balance: "0", usdValue: 0 };
    }
}
async function getPortfolioUsd(chain = "bsc") {
    const cmd = `twak wallet portfolio --chains ${chain} ${passwordFlag} --json`;
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const { stdout } = await execAsync(cmd);
            const data = JSON.parse(stdout);
            if (Array.isArray(data)) {
                return data.reduce((sum, entry) => sum + (entry.usdValue ?? 0), 0);
            }
            return data.totalUsd ?? data.total_usd ?? 0;
        }
        catch (err) {
            if (attempt < 3) {
                logger_js_1.logger.debug(`TWAK portfolio check attempt ${attempt} failed, retrying`, { err });
                await new Promise((r) => setTimeout(r, 1000 * attempt));
                continue;
            }
            logger_js_1.logger.warn("TWAK portfolio check failed after 3 attempts", { err });
            return 0;
        }
    }
    return 0;
}
async function executeSwap(params) {
    const { fromToken, toToken, amountUsd, slippagePct = 0.5 } = params;
    logger_js_1.logger.info("Executing TWAK swap", { from: fromToken, to: toToken, amountUsd });
    if (!TWAK_PASSWORD) {
        logger_js_1.logger.error("TWAK_WALLET_PASSWORD not set — cannot execute swap");
        return { txHash: "", fromAmt: "0", toAmt: "0", success: false };
    }
    try {
        const cmd = [
            "twak swap",
            `${fromToken} ${toToken}`,
            `--usd ${amountUsd}`,
            `--chain bsc`,
            `--slippage ${slippagePct}`,
            passwordFlag,
            "--json",
        ].join(" ");
        const { stdout } = await execAsync(cmd, { timeout: 60_000 });
        const result = JSON.parse(stdout);
        const swapResult = {
            txHash: result.txHash ?? result.hash ?? "",
            fromAmt: result.fromAmount ?? "0",
            toAmt: result.toAmount ?? "0",
            success: !!(result.txHash ?? result.hash),
        };
        logger_js_1.logger.info("TWAK swap complete", { txHash: swapResult.txHash, success: swapResult.success });
        return swapResult;
    }
    catch (err) {
        logger_js_1.logger.error("TWAK swap failed", { err });
        return { txHash: "", fromAmt: "0", toAmt: "0", success: false };
    }
}
async function quoteSwap(fromToken, toToken, amountUsd) {
    try {
        const cmd = `twak swap ${fromToken} ${toToken} --usd ${amountUsd} --chain bsc --quote-only --json`;
        const { stdout } = await execAsync(cmd, { timeout: 20_000 });
        const data = JSON.parse(stdout);
        return {
            estimatedOut: data.estimatedOut ?? "0",
            priceImpact: data.priceImpact ?? 0,
        };
    }
    catch (err) {
        logger_js_1.logger.warn("TWAK quote failed", { err });
        return null;
    }
}
async function registerForCompetition() {
    try {
        logger_js_1.logger.info("Registering agent in competition via TWAK CLI");
        const cmd = `twak compete register ${passwordFlag} --json`;
        const { stdout } = await execAsync(cmd, { timeout: 30_000 });
        const result = JSON.parse(stdout);
        const hash = result.txHash ?? result.hash ?? "";
        if (result.alreadyRegistered) {
            logger_js_1.logger.info("Agent already registered for competition");
        }
        else {
            logger_js_1.logger.info("Competition registration tx", { txHash: hash });
        }
        return hash;
    }
    catch (err) {
        logger_js_1.logger.error("Competition registration failed", { err });
        return "";
    }
}
async function checkCompetitionStatus() {
    try {
        const { stdout } = await execAsync("twak compete status --json", { timeout: 15_000 });
        const data = JSON.parse(stdout);
        return data;
    }
    catch (err) {
        logger_js_1.logger.warn("Failed to check competition status", { err });
        return { registered: false };
    }
}
//# sourceMappingURL=twak.js.map