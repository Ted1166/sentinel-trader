import { type Address } from "viem";
export interface Token {
    symbol: string;
    address: Address;
    decimals: number;
    cmcId?: number;
}
export declare const TOKENS: Record<string, Token>;
export declare const TOKEN_SYMBOLS: (keyof typeof TOKENS)[];
export declare const TOKEN_ADDRESSES: `0x${string}`[];
export declare function tokenByAddress(address: string): Token | undefined;
export declare function tokenBySymbol(symbol: string): Token | undefined;
export declare const STABLECOINS: Address[];
export declare const PRIORITY_TOKENS: readonly ["ETH", "LINK", "ADA", "DOT", "UNI", "AAVE", "CAKE", "ATOM", "INJ", "AVAX", "LDO", "PENDLE", "AXS", "SNX"];
//# sourceMappingURL=tokens.d.ts.map