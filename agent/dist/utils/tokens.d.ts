import { type Address } from "viem";
export interface Token {
    symbol: string;
    address: Address;
    decimals: number;
    cmcId?: number;
}
export declare const TOKENS: Record<string, Token>;
/** All token symbols as an array */
export declare const TOKEN_SYMBOLS: (keyof typeof TOKENS)[];
/** All token addresses as an array */
export declare const TOKEN_ADDRESSES: `0x${string}`[];
/** Look up a token by address (case-insensitive) */
export declare function tokenByAddress(address: string): Token | undefined;
/** Look up a token by symbol */
export declare function tokenBySymbol(symbol: string): Token | undefined;
/** Stablecoin addresses — agent can park here during CAUTION/HALT */
export declare const STABLECOINS: Address[];
/** High-liquidity tokens — priority candidates for strategy signals */
export declare const PRIORITY_TOKENS: readonly ["ETH", "LINK", "ADA", "DOT", "UNI", "AAVE", "CAKE", "ATOM", "INJ", "AVAX", "LDO", "PENDLE", "AXS", "SNX"];
//# sourceMappingURL=tokens.d.ts.map