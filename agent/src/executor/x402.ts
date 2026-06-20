import { exec } from "child_process";
import { promisify } from "util";
import { logger } from "../utils/logger.js";

const execAsync = promisify(exec);

export interface X402Response<T> {
  data: T;
  paid: boolean;
  paymentAmt: string;
}

export async function x402Quote(url: string): Promise<{ amount: string; currency: string } | null> {
  try {
    const { stdout } = await execAsync(`twak x402 quote "${url}" --json`, { timeout: 15_000 });
    const data = JSON.parse(stdout) as { amount?: string; currency?: string };
    return { amount: data.amount ?? "0", currency: data.currency ?? "USDC" };
  } catch (err) {
    logger.warn("x402 quote failed", { url, err });
    return null;
  }
}

export async function x402Request<T>(url: string): Promise<X402Response<T>> {
  try {
    logger.debug("x402 request", { url });
    const { stdout } = await execAsync(`twak x402 request "${url}" --json`, { timeout: 20_000 });
    const result = JSON.parse(stdout) as { data: T; paid?: boolean; paymentAmount?: string };

    return {
      data: result.data,
      paid: result.paid ?? true,
      paymentAmt: result.paymentAmount ?? "0",
    };
  } catch (err) {
    logger.warn("x402 request failed", { url, err });
    throw err;
  }
}

export async function x402FearGreed(
  baseUrl: string
): Promise<{ value: number; classification: string } | null> {
  try {
    const res = await x402Request<{ value: number; value_classification: string }>(
      `${baseUrl}/fear-and-greed/latest`
    );
    return { value: res.data.value, classification: res.data.value_classification };
  } catch {
    return null;
  }
}

export async function x402FundingRates(
  baseUrl: string,
  symbols: string[]
): Promise<Record<string, number>> {
  try {
    const res = await x402Request<Record<string, { funding_rate: number }>>(
      `${baseUrl}/derivatives/funding-rates?symbol=${symbols.join(",")}`
    );
    const result: Record<string, number> = {};
    for (const [sym, d] of Object.entries(res.data)) {
      result[sym] = d.funding_rate ?? 0;
    }
    return result;
  } catch {
    return {};
  }
}