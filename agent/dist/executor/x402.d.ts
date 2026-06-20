export interface X402Response<T> {
    data: T;
    paid: boolean;
    paymentAmt: string;
}
export declare function x402Quote(url: string): Promise<{
    amount: string;
    currency: string;
} | null>;
export declare function x402Request<T>(url: string): Promise<X402Response<T>>;
export declare function x402FearGreed(baseUrl: string): Promise<{
    value: number;
    classification: string;
} | null>;
export declare function x402FundingRates(baseUrl: string, symbols: string[]): Promise<Record<string, number>>;
//# sourceMappingURL=x402.d.ts.map