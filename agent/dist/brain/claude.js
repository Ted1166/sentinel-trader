"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTradeDecision = getTradeDecision;
const sdk_1 = __importDefault(require("@anthropic-ai/sdk"));
const config_js_1 = require("../config.js");
const prompt_js_1 = require("./prompt.js");
const fallback_js_1 = require("./fallback.js");
const logger_js_1 = require("../utils/logger.js");
const anthropic = new sdk_1.default({ apiKey: process.env.ANTHROPIC_API_KEY });
async function getTradeDecision(ctx) {
    if (!config_js_1.AGENT.aiEnabled) {
        logger_js_1.logger.info("AI disabled — using fallback decision");
        return (0, fallback_js_1.fallbackDecision)(ctx.guardResult, ctx.scorerOutput, ctx.portfolioUsd);
    }
    const prompt = (0, prompt_js_1.buildTradePrompt)(ctx);
    try {
        logger_js_1.logger.debug("Calling Claude for trade decision");
        const response = await anthropic.messages.create({
            model: "claude-sonnet-4-6",
            max_tokens: 512,
            messages: [{ role: "user", content: prompt }],
            system: `You are SentinelTrader, an autonomous crypto trading agent.
Respond ONLY with a valid JSON object. No markdown, no explanation outside the JSON.
Always respect HALT verdicts. Never exceed position size limits.`,
        });
        const text = response.content
            .filter((b) => b.type === "text")
            .map((b) => b.text)
            .join("");
        // Strip any accidental markdown fences
        const clean = text.replace(/```json|```/g, "").trim();
        const decision = JSON.parse(clean);
        logger_js_1.logger.info("Claude decision", {
            action: decision.action,
            symbol: decision.symbol,
            sizeUsd: decision.sizeUsd,
            confidence: decision.confidence,
            reason: decision.reason,
        });
        return decision;
    }
    catch (err) {
        logger_js_1.logger.warn("Claude call failed — falling back to deterministic rules", { err });
        return (0, fallback_js_1.fallbackDecision)(ctx.guardResult, ctx.scorerOutput, ctx.portfolioUsd);
    }
}
//# sourceMappingURL=claude.js.map