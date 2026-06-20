import { Verdict, CautionFlag, RISK, type VerdictType } from "../config.js";

export interface RSIResult {
  verdict: VerdictType;
  cautionFlag: number;
  rsi: number;
  reason: string;
}

export function computeRSI(closes: number[], period = 14): number {
  if (closes.length < period + 1) return 50;

  let gains = 0; let losses = 0;
  for (let i = closes.length - period; i < closes.length; i++) {
    const diff = closes[i] - closes[i - 1];
    if (diff > 0) gains += diff;
    else losses -= diff;
  }

  const avgGain = gains / period;
  const avgLoss = losses / period;
  if (avgLoss === 0) return 100;

  const rs = avgGain / avgLoss;
  return 100 - 100 / (1 + rs);
}

export function checkRSI(rsi: number): RSIResult {
  if (rsi >= RISK.rsiOverbought) {
    return {
      verdict: Verdict.CAUTION,
      cautionFlag: CautionFlag.RSI,
      rsi,
      reason: `RSI ${rsi.toFixed(1)} >= overbought ${RISK.rsiOverbought}`,
    };
  }

  if (rsi <= RISK.rsiOversold) {
    return {
      verdict: Verdict.CAUTION,
      cautionFlag: CautionFlag.RSI,
      rsi,
      reason: `RSI ${rsi.toFixed(1)} <= oversold ${RISK.rsiOversold}`,
    };
  }

  return {
    verdict: Verdict.CLEAR,
    cautionFlag: 0,
    rsi,
    reason: `RSI ${rsi.toFixed(1)} within normal range`,
  };
}