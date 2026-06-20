import { type AgentSnapshot } from "../monitor/snapshot.js";
import { type ScorerOutput, type TokenScore } from "../strategy/scorer.js";
import { type GuardResult } from "../guards/aggregator.js";
import { verdictLabel, activeCautionFlags } from "../guards/aggregator.js";

export interface PromptContext {
  snapshot: AgentSnapshot;
  scorerOutput: ScorerOutput;
  guardResult: GuardResult;
  portfolioUsd: number;
  openPositions: string[];
}

export function buildTradePrompt(ctx: PromptContext): string {
  const { snapshot, scorerOutput, guardResult, portfolioUsd, openPositions } = ctx;

  const topCandidates = [
    ...scorerOutput.topBuys.map((t) => formatToken(t, "BUY")),
    ...scorerOutput.topSells.map((t) => formatToken(t, "SELL")),
  ].join("\n");

  const cautionList = activeCautionFlags(guardResult.cautionFlags);

  return `You are SentinelTrader, an autonomous trading agent on BNB Chain.
Your job: decide ONE trade action for this cycle based on the data below.

## Market Context
- Fear & Greed Index: ${snapshot.fearGreedValue} (${snapshot.fearGreedLabel})
- Guard Verdict: ${verdictLabel(guardResult.verdict)}
- Active Caution Flags: ${cautionList.length > 0 ? cautionList.join(", ") : "none"}
- Guard Reason: ${guardResult.reason}
- Portfolio Value: $${portfolioUsd.toFixed(2)}
- Open Positions: ${openPositions.length > 0 ? openPositions.join(", ") : "none"}

## Top Candidates (composite score 0-100)
${topCandidates || "No strong candidates this cycle."}

## Guard Details
- Drawdown: ${(guardResult.drawdownBps / -100).toFixed(2)}%
- RSI: ${guardResult.rsi}
- Spread: ${guardResult.spreadBps}bps

## Rules (MUST follow)
- If verdict is HALT → respond with HOLD only
- If verdict is CAUTION → reduce size to 67% max, prefer HOLD
- Max position: $${(portfolioUsd * 0.20) .toFixed(2)} (20% of portfolio)
- Stop-loss: always set at 5% below entry for BUY, 5% above for SELL
- Take-profit: 10% from entry

## Response format (JSON only, no markdown):
{
  "action": "BUY" | "SELL" | "HOLD",
  "symbol": "<TOKEN_SYMBOL or null if HOLD>",
  "sizeUsd": <number — position size in USD>,
  "stopLossPct": <number — stop loss % from entry>,
  "takeProfitPct": <number — take profit % from entry>,
  "confidence": <0-100>,
  "strategyTag": "<fear-greed-rotation|momentum-rsi|sentiment-divergence|halt-protection>",
  "reason": "<one sentence explanation>"
}`;
}

function formatToken(t: TokenScore, direction: string): string {
  return `  [${direction}] ${t.symbol} score=${t.totalScore} RSI=${t.rsi.toFixed(0)} F&G=${t.fearGreed.score} mom=${t.momentum.score} sent=${t.sentiment.score}
    → ${t.fearGreed.reason}`;
}