import Anthropic from "@anthropic-ai/sdk";
import { AGENT } from "../config.js";
import { buildTradePrompt, type PromptContext } from "./prompt.js";
import { fallbackDecision, type TradeDecision } from "./fallback.js";
import { logger } from "../utils/logger.js";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function getTradeDecision(ctx: PromptContext): Promise<TradeDecision> {
  if (!AGENT.aiEnabled) {
    logger.info("AI disabled — using fallback decision");
    return fallbackDecision(ctx.guardResult, ctx.scorerOutput, ctx.portfolioUsd);
  }

  const prompt = buildTradePrompt(ctx);

  try {
    logger.debug("Calling Claude for trade decision");

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
      .map((b) => (b as { type: "text"; text: string }).text)
      .join("");

    const clean = text.replace(/```json|```/g, "").trim();
    const decision = JSON.parse(clean) as TradeDecision;

    logger.info("Claude decision", {
      action: decision.action,
      symbol: decision.symbol,
      sizeUsd: decision.sizeUsd,
      confidence: decision.confidence,
      reason: decision.reason,
    });

    return decision;
  } catch (err) {
    logger.warn("Claude call failed — falling back to deterministic rules", { err });
    return fallbackDecision(ctx.guardResult, ctx.scorerOutput, ctx.portfolioUsd);
  }
}