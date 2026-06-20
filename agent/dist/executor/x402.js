"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x402Quote = x402Quote;
exports.x402Request = x402Request;
exports.x402FearGreed = x402FearGreed;
exports.x402FundingRates = x402FundingRates;
const child_process_1 = require("child_process");
const util_1 = require("util");
const logger_js_1 = require("../utils/logger.js");
const execAsync = (0, util_1.promisify)(child_process_1.exec);
async function x402Quote(url) {
    try {
        const { stdout } = await execAsync(`twak x402 quote "${url}" --json`, { timeout: 15_000 });
        const data = JSON.parse(stdout);
        return { amount: data.amount ?? "0", currency: data.currency ?? "USDC" };
    }
    catch (err) {
        logger_js_1.logger.warn("x402 quote failed", { url, err });
        return null;
    }
}
async function x402Request(url) {
    try {
        logger_js_1.logger.debug("x402 request", { url });
        const { stdout } = await execAsync(`twak x402 request "${url}" --json`, { timeout: 20_000 });
        const result = JSON.parse(stdout);
        return {
            data: result.data,
            paid: result.paid ?? true,
            paymentAmt: result.paymentAmount ?? "0",
        };
    }
    catch (err) {
        logger_js_1.logger.warn("x402 request failed", { url, err });
        throw err;
    }
}
async function x402FearGreed(baseUrl) {
    try {
        const res = await x402Request(`${baseUrl}/fear-and-greed/latest`);
        return { value: res.data.value, classification: res.data.value_classification };
    }
    catch {
        return null;
    }
}
async function x402FundingRates(baseUrl, symbols) {
    try {
        const res = await x402Request(`${baseUrl}/derivatives/funding-rates?symbol=${symbols.join(",")}`);
        const result = {};
        for (const [sym, d] of Object.entries(res.data)) {
            result[sym] = d.funding_rate ?? 0;
        }
        return result;
    }
    catch {
        return {};
    }
}
//# sourceMappingURL=x402.js.map