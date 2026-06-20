import { type TokenSnapshot } from "../monitor/snapshot.js";
import { scoreFearGreed, type FearGreedSignal } from "./fearGreed.js";
import { scoreMomentum, type MomentumSignal } from "./momentum.js";
import { scoreSentiment, type SentimentSignal } from "./sentiment.js";
import { logger } from "../utils/logger.js";

export interface TokenScore {
  symbol: string;
  totalScore: number;
  fearGreed: FearGreedSignal;
  momentum: MomentumSignal;
  sentiment: SentimentSignal;
  rsi: number;
  rank: number;
}

export interface ScorerOutput {
  ranked: TokenScore[];
  topBuys: TokenScore[];
  topSells: TokenScore[];
  fearGreed: number;
  scoredAt: number;
}

export function scoreAllTokens(
  tokens: TokenSnapshot[],
  fearGreed: number,
  rsiMap: Record<string, number>
): ScorerOutput {
  logger.debug("Scoring tokens", { count: tokens.length, fearGreed });

  const fgSignals = scoreFearGreed(tokens, fearGreed);
  const momSignals = scoreMomentum(tokens, rsiMap);
  const sentSignals = scoreSentiment(tokens);

  const scores: TokenScore[] = tokens.map((token, i) => {
    const fg = fgSignals[i]!;
    const mom = momSignals[i]!;
    const sent = sentSignals[i]!;

    const total = Math.round(
      fg.score * 0.40 +
      mom.score * 0.35 +
      sent.score * 0.25
    );

    return {
      symbol: token.symbol,
      totalScore: Math.min(100, Math.max(0, total)),
      fearGreed: fg,
      momentum: mom,
      sentiment: sent,
      rsi: rsiMap[token.symbol] ?? 50,
      rank: 0,
    };
  });

  scores.sort((a, b) => b.totalScore - a.totalScore);
  scores.forEach((s, i) => { s.rank = i + 1; });

  const topBuys = scores.filter((s) => s.totalScore >= 60).slice(0, 3);
  const topSells = scores.filter((s) => s.totalScore <= 40).slice(0, 3);

  logger.info("Token scoring complete", {
    topBuy: topBuys[0] ? `${topBuys[0].symbol}(${topBuys[0].totalScore})` : "none",
    topSell: topSells[0] ? `${topSells[0].symbol}(${topSells[0].totalScore})` : "none",
  });

  return { ranked: scores, topBuys, topSells, fearGreed, scoredAt: Date.now() };
}