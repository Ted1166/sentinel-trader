import { Verdict, CautionFlag, RISK, type VerdictType } from "../config.js";

export interface CooldownResult {
  verdict: VerdictType;
  cautionFlag: number;
  secondsLeft: number;
  reason: string;
}

const lastStopLoss: Map<string, number> = new Map();

export function recordStopLoss(symbol: string): void {
  lastStopLoss.set(symbol, Date.now());
}

export function checkCooldown(symbol: string): CooldownResult {
  const lastTime = lastStopLoss.get(symbol);
  if (!lastTime) {
    return { verdict: Verdict.CLEAR, cautionFlag: 0, secondsLeft: 0, reason: "no recent stop-loss" };
  }

  const elapsedSecs = (Date.now() - lastTime) / 1000;
  const secondsLeft = Math.max(0, RISK.cooldownSecs - elapsedSecs);

  if (secondsLeft > 0) {
    return {
      verdict: Verdict.HALT,
      cautionFlag: CautionFlag.COOLDOWN,
      secondsLeft,
      reason: `cooldown active — ${secondsLeft.toFixed(0)}s remaining after stop-loss`,
    };
  }

  return {
    verdict: Verdict.CLEAR,
    cautionFlag: 0,
    secondsLeft: 0,
    reason: "cooldown elapsed",
  };
}

export function clearCooldown(symbol: string): void {
  lastStopLoss.delete(symbol);
}