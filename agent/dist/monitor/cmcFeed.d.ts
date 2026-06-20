export interface FearGreedData {
    value: number;
    classification: string;
    timestamp: number;
}
export interface FundingRateData {
    symbol: string;
    fundingRate: number;
    nextFunding: number;
    exchange: string;
}
export interface OHLCVData {
    symbol: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    percentChange24h: number;
    timestamp: number;
}
export interface SocialData {
    symbol: string;
    sentimentScore: number;
    mentionCount: number;
    trendingRank: number;
}
export interface KOLSignal {
    symbol: string;
    sentiment: "bullish" | "bearish" | "neutral";
    strength: number;
    source: string;
}
export interface CMCSnapshot {
    fearGreed: FearGreedData;
    fundingRates: Record<string, FundingRateData>;
    ohlcv: Record<string, OHLCVData>;
    social: Record<string, SocialData>;
    kolSignals: KOLSignal[];
    fetchedAt: number;
}
export declare function fetchFearGreed(): Promise<FearGreedData>;
export declare function fetchOHLCV(symbols: string[]): Promise<Record<string, OHLCVData>>;
export declare function fetchFundingRates(symbols: string[]): Promise<Record<string, FundingRateData>>;
export declare function fetchSocial(symbols: string[]): Promise<Record<string, SocialData>>;
export declare function fetchKOLSignals(_symbols: string[]): Promise<KOLSignal[]>;
export declare function fetchCMCSnapshot(symbols: string[]): Promise<CMCSnapshot>;
//# sourceMappingURL=cmcFeed.d.ts.map