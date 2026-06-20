import { type TokenSnapshot } from "../monitor/snapshot.js";

export interface SentimentSignal {
  symbol: string;
  score: number;
  divergence: boolean;
  socialScore: number;
  kolScore: number;
  reason: string;
}

export function computeSentimentSignal(token: TokenSnapshot): SentimentSignal {
  const socialScore = Math.round((token.sentimentScore + 1) * 50);
  const kolScore = token.kolBullish;

  const diff = Math.abs(socialScore - kolScore);
  const divergence = diff >= 30;

  let score = (socialScore * 0.4 + kolScore * 0.6);
  let reason = "";

  if (divergence && kolScore > socialScore) {
    score = Math.min(100, score + 15);
    reason = `Under-radar: KOL bullish (${kolScore}) vs low social (${socialScore}) → accumulation`;
  } else if (divergence && socialScore > kolScore) {
    score = Math.max(0, score - 15);
    reason = `Hype divergence: social (${socialScore}) vs KOL bearish (${kolScore}) → caution`;
  } else {
    reason = `Aligned: social=${socialScore} KOL=${kolScore} trending=${token.trendingRank > 0 ? "#" + token.trendingRank : "no"}`;
  }

  return {
    symbol: token.symbol,
    score: Math.round(Math.min(100, Math.max(0, score))),
    divergence, socialScore, kolScore, reason,
  };
}

export function scoreSentiment(tokens: TokenSnapshot[]): SentimentSignal[] {
  return tokens.map(computeSentimentSignal);
}