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
export declare function getAgentWallet(chain?: string): Promise<string>;
export declare function getBalance(tokenAddress: Address | null, chain?: string, walletAddress?: string): Promise<TWAKBalanceResult>;
export declare function getPortfolioUsd(chain?: string): Promise<number>;
export declare function executeSwap(params: TWAKSwapParams): Promise<TWAKSwapResult>;
export declare function quoteSwap(fromToken: string, toToken: string, amountUsd: number): Promise<{
    estimatedOut: string;
    priceImpact: number;
} | null>;
export declare function registerForCompetition(): Promise<string>;
export declare function checkCompetitionStatus(): Promise<{
    registered: boolean;
    deadline?: string;
}>;
//# sourceMappingURL=twak.d.ts.map