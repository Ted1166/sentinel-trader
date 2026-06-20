import { exec } from "child_process";
import { promisify } from "util";
import { logger } from "../utils/logger.js";
import { type Address } from "viem";

const execAsync = promisify(exec);

const TWAK_PASSWORD = process.env.TWAK_WALLET_PASSWORD ?? "";
const passwordFlag = TWAK_PASSWORD ? `--password "${TWAK_PASSWORD}"` : "";

export interface TWAKSwapParams {
  fromToken: Address | string;
  toToken: Address | string;
  amountUsd: number;
  slippagePct?: number;
}

export interface TWAKSwapResult {
  txHash: string;
  fromAmt: string;
  toAmt: string;
  success: boolean;
}

export interface TWAKBalanceResult {
  symbol: string;
  balance: string;
  usdValue: number;
}

export async function getAgentWallet(chain = "bsc"): Promise<string> {
  try {
    const { stdout } = await execAsync(`twak wallet address --chain ${chain} --json`);
    const data = JSON.parse(stdout) as { address: string };
    return data.address;
  } catch (err) {
    logger.error("Failed to get agent wallet address", { err });
    return "";
  }
}

export async function getBalance(
  tokenAddress: Address | null,
  chain = "bsc",
  walletAddress?: string
): Promise<TWAKBalanceResult> {
  try {
    const tokenFlag = tokenAddress ? `--token ${tokenAddress}` : "";
    const addressFlag = walletAddress ? `--address ${walletAddress}` : "";
    const { stdout } = await execAsync(
      `twak balance --chain ${chain} ${tokenFlag} ${addressFlag} --json`
    );
    const data = JSON.parse(stdout) as TWAKBalanceResult;
    return data;
  } catch (err) {
    logger.warn("TWAK balance check failed", { tokenAddress, err });
    return { symbol: "UNKNOWN", balance: "0", usdValue: 0 };
  }
}

export async function getPortfolioUsd(chain = "bsc"): Promise<number> {
  try {
    const { stdout } = await execAsync(
      `twak wallet portfolio --chains ${chain} ${passwordFlag} --json`
    );
    const data = JSON.parse(stdout) as { totalUsd?: number; total_usd?: number };
    return data.totalUsd ?? data.total_usd ?? 0;
  } catch (err) {
    logger.warn("TWAK portfolio check failed", { err });
    return 0;
  }
}

export async function executeSwap(params: TWAKSwapParams): Promise<TWAKSwapResult> {
  const { fromToken, toToken, amountUsd, slippagePct = 0.5 } = params;

  logger.info("Executing TWAK swap", { from: fromToken, to: toToken, amountUsd });

  if (!TWAK_PASSWORD) {
    logger.error("TWAK_WALLET_PASSWORD not set — cannot execute swap");
    return { txHash: "", fromAmt: "0", toAmt: "0", success: false };
  }

  try {
    const cmd = [
      "twak swap",
      `${fromToken} ${toToken}`,
      `--usd ${amountUsd}`,
      `--chain bsc`,
      `--slippage ${slippagePct}`,
      passwordFlag,
      "--json",
    ].join(" ");

    const { stdout } = await execAsync(cmd, { timeout: 60_000 });
    const result = JSON.parse(stdout) as {
      txHash?: string; hash?: string;
      fromAmount?: string; toAmount?: string;
      success?: boolean;
    };

    const swapResult: TWAKSwapResult = {
      txHash: result.txHash ?? result.hash ?? "",
      fromAmt: result.fromAmount ?? "0",
      toAmt: result.toAmount ?? "0",
      success: !!(result.txHash ?? result.hash),
    };

    logger.info("TWAK swap complete", { txHash: swapResult.txHash, success: swapResult.success });
    return swapResult;
  } catch (err) {
    logger.error("TWAK swap failed", { err });
    return { txHash: "", fromAmt: "0", toAmt: "0", success: false };
  }
}

export async function quoteSwap(
  fromToken: string,
  toToken: string,
  amountUsd: number
): Promise<{ estimatedOut: string; priceImpact: number } | null> {
  try {
    const cmd = `twak swap ${fromToken} ${toToken} --usd ${amountUsd} --chain bsc --quote-only --json`;
    const { stdout } = await execAsync(cmd, { timeout: 20_000 });
    const data = JSON.parse(stdout) as { estimatedOut?: string; priceImpact?: number };
    return {
      estimatedOut: data.estimatedOut ?? "0",
      priceImpact: data.priceImpact ?? 0,
    };
  } catch (err) {
    logger.warn("TWAK quote failed", { err });
    return null;
  }
}

export async function registerForCompetition(): Promise<string> {
  try {
    logger.info("Registering agent in competition via TWAK CLI");
    const cmd = `twak compete register ${passwordFlag} --json`;
    const { stdout } = await execAsync(cmd, { timeout: 30_000 });
    const result = JSON.parse(stdout) as { txHash?: string; hash?: string; alreadyRegistered?: boolean };
    const hash = result.txHash ?? result.hash ?? "";
    if (result.alreadyRegistered) {
      logger.info("Agent already registered for competition");
    } else {
      logger.info("Competition registration tx", { txHash: hash });
    }
    return hash;
  } catch (err) {
    logger.error("Competition registration failed", { err });
    return "";
  }
}

export async function checkCompetitionStatus(): Promise<{ registered: boolean; deadline?: string }> {
  try {
    const { stdout } = await execAsync("twak compete status --json", { timeout: 15_000 });
    const data = JSON.parse(stdout) as { registered: boolean; deadline?: string };
    return data;
  } catch (err) {
    logger.warn("Failed to check competition status", { err });
    return { registered: false };
  }
}