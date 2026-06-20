import { Verdict, CautionFlag, RISK, type VerdictType } from "../config.js";

export interface SpreadResult {
  verdict: VerdictType;
  cautionFlag: number;
  spreadBps: number;
  reason: string;
}

export function checkSpread(spreadBps: number): SpreadResult {
  if (spreadBps >= RISK.spreadHaltBps) {
    return {
      verdict: Verdict.HALT,
      cautionFlag: CautionFlag.SPREAD,
      spreadBps,
      reason: `spread ${spreadBps}bps >= halt threshold ${RISK.spreadHaltBps}bps`,
    };
  }

  if (spreadBps >= RISK.spreadCautionBps) {
    return {
      verdict: Verdict.CAUTION,
      cautionFlag: CautionFlag.SPREAD,
      spreadBps,
      reason: `spread ${spreadBps}bps >= caution threshold ${RISK.spreadCautionBps}bps`,
    };
  }

  return {
    verdict: Verdict.CLEAR,
    cautionFlag: 0,
    spreadBps,
    reason: `spread ${spreadBps}bps within limits`,
  };
}

export function estimateSpreadBps(volume24h: number, price: number): number {
  if (volume24h <= 0 || price <= 0) return 200;
  const volumeScore = Math.min(volume24h / 1_000_000, 1);
  return Math.round(200 * (1 - volumeScore) + 5 * volumeScore);
}