import { useReadContract, useReadContracts } from "wagmi";
import { type Address } from "viem";
import {
    CONTRACTS,
    TRADE_LOGGER_ABI,
    POLL_INTERVAL_MS,
    DirectionLabels,
    TradeStatusLabels,
} from "../config/contracts";

export interface Trade {
    id: bigint;
    asset: Address;
    direction: number;
    directionLabel: string;
    status: number;
    statusLabel: string;
    entryPrice: number;
    exitPrice: number;
    sizeUsd: number;
    pnlBps: number;
    pnlPct: number;
    confidence: number;
    guardVerdict: number;
    entryTimestamp: number;
    exitTimestamp: number;
    entryTxHash: string;
    exitTxHash: string;
    strategyTag: string;
    reason: string;
}

const fromFixed18 = (v: bigint): number => Number(v) / 1e18;

function parseTrade(raw: {
    id: bigint; asset: Address; direction: number; status: number;
    entryPrice: bigint; exitPrice: bigint; sizeUsd: bigint;
    pnlBps: number; confidence: number; guardVerdict: number;
    entryTimestamp: number; exitTimestamp: number;
    entryTxHash: string; exitTxHash: string;
    strategyTag: string; reason: string;
}): Trade {
    return {
        id: raw.id,
        asset: raw.asset,
        direction: Number(raw.direction),
        directionLabel: DirectionLabels[Number(raw.direction)] ?? "?",
        status: Number(raw.status),
        statusLabel: TradeStatusLabels[Number(raw.status)] ?? "?",
        entryPrice: fromFixed18(raw.entryPrice),
        exitPrice: fromFixed18(raw.exitPrice),
        sizeUsd: fromFixed18(raw.sizeUsd),
        pnlBps: Number(raw.pnlBps),
        pnlPct: Number(raw.pnlBps) / 100,
        confidence: Number(raw.confidence),
        guardVerdict: Number(raw.guardVerdict),
        entryTimestamp: Number(raw.entryTimestamp),
        exitTimestamp: Number(raw.exitTimestamp),
        entryTxHash: raw.entryTxHash,
        exitTxHash: raw.exitTxHash,
        strategyTag: raw.strategyTag,
        reason: raw.reason,
    };
}

export function useCompetitionPnl() {
    const { data, isLoading, error } = useReadContract({
        address: CONTRACTS.tradeLogger,
        abi: TRADE_LOGGER_ABI,
        functionName: "competitionPnlBps",
        query: {
            refetchInterval: POLL_INTERVAL_MS,
            enabled: !!CONTRACTS.tradeLogger,
        },
    });

    const pnlBps = data !== undefined ? Number(data) : 0;
    return { pnlBps, pnlPct: pnlBps / 100, isLoading, error };
}

export function useTotalTrades() {
    const { data, isLoading } = useReadContract({
        address: CONTRACTS.tradeLogger,
        abi: TRADE_LOGGER_ABI,
        functionName: "totalTrades",
        query: {
            refetchInterval: POLL_INTERVAL_MS,
            enabled: !!CONTRACTS.tradeLogger,
        },
    });
    return { total: data !== undefined ? Number(data) : 0, isLoading };
}

export function useAllTrades(): { trades: Trade[]; isLoading: boolean; refetch: () => void } {
    const { data: idsData, isLoading: idsLoading, refetch: refetchIds } = useReadContract({
        address: CONTRACTS.tradeLogger,
        abi: TRADE_LOGGER_ABI,
        functionName: "getAllTradeIds",
        query: {
            refetchInterval: POLL_INTERVAL_MS,
            enabled: !!CONTRACTS.tradeLogger,
        },
    });

    const ids = (idsData ?? []) as readonly bigint[];

    const { data: tradesData, isLoading: tradesLoading, refetch: refetchTrades } = useReadContracts({
        contracts: ids.map((id) => ({
            address: CONTRACTS.tradeLogger,
            abi: TRADE_LOGGER_ABI,
            functionName: "getTrade" as const,
            args: [id] as const,
        })),
        query: {
            enabled: ids.length > 0,
            refetchInterval: POLL_INTERVAL_MS,
        },
    });

    const trades: Trade[] = (tradesData ?? [])
        .map((r) => r.result)
        .filter((r): r is NonNullable<typeof r> => !!r)
        .map((r) => parseTrade(r as Parameters<typeof parseTrade>[0]))
        .sort((a, b) => b.entryTimestamp - a.entryTimestamp);

    return {
        trades,
        isLoading: idsLoading || tradesLoading,
        refetch: () => { refetchIds(); refetchTrades(); },
    };
}

export function useTradesByAsset(asset: Address) {
    const { data: idsData, isLoading: idsLoading } = useReadContract({
        address: CONTRACTS.tradeLogger,
        abi: TRADE_LOGGER_ABI,
        functionName: "getTradesByAsset",
        args: [asset],
        query: { enabled: !!asset && !!CONTRACTS.tradeLogger },
    });

    const ids = (idsData ?? []) as readonly bigint[];

    const { data: tradesData, isLoading: tradesLoading } = useReadContracts({
        contracts: ids.map((id) => ({
            address: CONTRACTS.tradeLogger,
            abi: TRADE_LOGGER_ABI,
            functionName: "getTrade" as const,
            args: [id] as const,
        })),
        query: { enabled: ids.length > 0 },
    });

    const trades: Trade[] = (tradesData ?? [])
        .map((r) => r.result)
        .filter((r): r is NonNullable<typeof r> => !!r)
        .map((r) => parseTrade(r as Parameters<typeof parseTrade>[0]))
        .sort((a, b) => b.entryTimestamp - a.entryTimestamp);

    return { trades, isLoading: idsLoading || tradesLoading };
}

export function useTradeStats(trades: Trade[]) {
    const closed = trades.filter((t) => t.status !== 0);
    const wins = closed.filter((t) => t.pnlBps > 0);
    const open = trades.filter((t) => t.status === 0);

    return {
        totalTrades: trades.length,
        openCount: open.length,
        closedCount: closed.length,
        winCount: wins.length,
        winRate: closed.length > 0 ? (wins.length / closed.length) * 100 : 0,
        avgPnlBps: closed.length > 0
            ? closed.reduce((s, t) => s + t.pnlBps, 0) / closed.length
            : 0,
    };
}