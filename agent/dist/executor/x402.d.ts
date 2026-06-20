/**
 * x402 pay-per-request handler — wraps the real TWAK x402 CLI.
 * Real interface verified via `twak x402 --help`:
 *   twak x402 request <url>   — pays + fetches an x402-gated endpoint
 *   twak x402 quote <url>     — preview payment, no wallet needed
 */
export interface X402Response<T> {
    data: T;
    paid: boolean;
    paymentAmt: string;
}
/** Preview what an x402 endpoint would charge, without paying (read-only) */
export declare function x402Quote(url: string): Promise<{
    amount: string;
    currency: string;
} | null>;
/**
 * Make a paid request to a CMC Agent Hub x402-gated endpoint.
 * Signs payment automatically using the TWAK agent wallet.
 */
export declare function x402Request<T>(url: string): Promise<X402Response<T>>;
/** Fetch Fear & Greed via CMC Agent Hub x402 endpoint */
export declare function x402FearGreed(baseUrl: string): Promise<{
    value: number;
    classification: string;
} | null>;
/** Fetch funding rates via CMC Agent Hub x402 endpoint */
export declare function x402FundingRates(baseUrl: string, symbols: string[]): Promise<Record<string, number>>;
//# sourceMappingURL=x402.d.ts.map