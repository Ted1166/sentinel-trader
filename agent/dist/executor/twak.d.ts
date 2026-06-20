import { type Address } from "viem";
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
/**
 * TWAK executor — wraps the real Trust Wallet Agent Kit CLI (v0.19.1).
 * All signing is self-custody local (keys never leave the machine).
 * Real CLI verified via `twak --help` / `twak <cmd> --help`.
 */
/** Get agent wallet address for a given chain */
export declare function getAgentWallet(chain?: string): Promise<string>;
/** Get balance for a specific token (or native) on a chain */
export declare function getBalance(tokenAddress: Address | null, chain?: string, walletAddress?: string): Promise<TWAKBalanceResult>;
/** Get total portfolio value in USD across chains (or filtered to one chain) */
export declare function getPortfolioUsd(chain?: string): Promise<number>;
/**
 * Execute a swap via TWAK with self-custody local signing.
 * Real syntax: twak swap <amountOrFrom> <fromOrTo> [to] --usd <amount> --chain bsc
 */
export declare function executeSwap(params: TWAKSwapParams): Promise<TWAKSwapResult>;
/** Preview a swap quote without executing (no password needed) */
export declare function quoteSwap(fromToken: string, toToken: string, amountUsd: number): Promise<{
    estimatedOut: string;
    priceImpact: number;
} | null>;
/** Register agent in the BNB Hack competition contract via TWAK */
export declare function registerForCompetition(): Promise<string>;
/** Check competition registration status */
export declare function checkCompetitionStatus(): Promise<{
    registered: boolean;
    deadline?: string;
}>;
//# sourceMappingURL=twak.d.ts.map