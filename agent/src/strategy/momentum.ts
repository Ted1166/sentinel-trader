import { type TokenSnapshot } from "../monitor/snapshot.js";

export interface MomentumSignal {
  symbol: string;
  score: number;
  rsi: number;
  macd: number;
  reason: string;
}

function approximateMACD(token: TokenSnapshot): number {
  if (token.price <= 0) return 0;
  const midRange = (token.high24h + token.low24h) / 2;
  const shortEMA = token.price * 0.85 + midRange * 0.15;
  const longEMA = token.price * 0.65 + midRange * 0.35;
  return shortEMA - longEMA;
}

export function computeMomentumSignal(
  token: TokenSnapshot,
  rsi: number
): MomentumSignal {
  const macd = approximateMACD(token);

  let rsiScore = 50;
  if (rsi >= 50 && rsi <= 65) rsiScore = 75;
  else if (rsi > 65 && rsi <= 72) rsiScore = 60;
  else if (rsi > 72) rsiScore = 30;
  else if (rsi >= 35 && rsi < 50) rsiScore = 45;
  else if (rsi < 35) rsiScore = 65;

  const macdScore = macd > 0 ? Math.min(75, 50 + macd / token.price * 1000) : Math.max(25, 50 + macd / token.price * 1000);

  const volumeScore = token.volume24h > 1_000_000 ? 60 : 40;

  const score = (rsiScore * 0.4 + macdScore * 0.4 + volumeScore * 0.2);

  return {
    symbol: token.symbol,
    score: Math.round(Math.min(100, Math.max(0, score))),
    rsi,
    macd,
    reason: `RSI=${rsi.toFixed(1)} MACD=${macd > 0 ? "+" : ""}${macd.toFixed(4)} vol=$${(token.volume24h / 1e6).toFixed(1)}M`,
  };
}

export function scoreMomentum(
  tokens: TokenSnapshot[],
  rsiMap: Record<string, number>
): MomentumSignal[] {
  return tokens.map((t) => computeMomentumSignal(t, rsiMap[t.symbol] ?? 50));
}