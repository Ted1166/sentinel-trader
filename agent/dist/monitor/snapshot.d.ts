import { type Address } from "viem";
import { type CMCSnapshot } from "./cmcFeed.js";
import { type OnchainOracleRecord } from "./onchain.js";
export interface TokenSnapshot {
    symbol: string;
    address: Address;
    price: number;
    volume24h: number;
    high24h: number;
    low24h: number;
    fundingRate: number;
    sentimentScore: number;
    kolBullish: number;
    trendingRank: number;
    oracleRecord: OnchainOracleRecord | null;
}
export interface AgentSnapshot {
    fearGreedValue: number;
    fearGreedLabel: string;
    tokens: TokenSnapshot[];
    prioritySymbols: string[];
    cmcRaw: CMCSnapshot;
    capturedAt: number;
}
export declare function buildSnapshot(): Promise<AgentSnapshot>;
//# sourceMappingURL=snapshot.d.ts.map