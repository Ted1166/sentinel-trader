import { useReadContract, useReadContracts, usePublicClient } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { type Address, parseAbiItem } from "viem";
import {
    CONTRACTS,
    RISK_GUARD_ORACLE_ABI,
    PRIORITY_TOKENS,
    POLL_INTERVAL_MS,
    VerdictLabels,
    activeCautionFlags,
} from "../config/contracts";

export interface GuardRecord {
    verdict: number;
    verdictLabel: string;
    cautionFlags: number;
    cautionLabels: string[];
    drawdownBps: number;
    atrMultiple10: number;
    rsi: number;
    spreadBps: number;
    timestamp: number;
    blockNumber: bigint;
    reason: string;
}

export interface TokenVerdict {
    symbol: string;
    address: Address;
    halted: boolean;
    record: GuardRecord | null;
}

export function useLatestVerdict(asset: Address) {
    const { data, isLoading, error, refetch } = useReadContract({
        address: CONTRACTS.riskGuardOracle,
        abi: RISK_GUARD_ORACLE_ABI,
        functionName: "latestRecord",
        args: [asset],
        query: {
            refetchInterval: POLL_INTERVAL_MS,
            enabled: !!asset && !!CONTRACTS.riskGuardOracle,
        },
    });

    const record: GuardRecord | null = data
        ? {
            verdict: Number(data.verdict),
            verdictLabel: VerdictLabels[Number(data.verdict)] ?? "UNKNOWN",
            cautionFlags: Number(data.cautionFlags),
            cautionLabels: activeCautionFlags(Number(data.cautionFlags)),
            drawdownBps: Number(data.drawdownBps),
            atrMultiple10: Number(data.atrMultiple10),
            rsi: Number(data.rsi),
            spreadBps: Number(data.spreadBps),
            timestamp: Number(data.timestamp),
            blockNumber: data.blockNumber,
            reason: data.reason,
        }
        : null;

    return { record, isLoading, error, refetch };
}

export function useIsHalted(asset: Address) {
    const { data, isLoading } = useReadContract({
        address: CONTRACTS.riskGuardOracle,
        abi: RISK_GUARD_ORACLE_ABI,
        functionName: "isHalted",
        args: [asset],
        query: {
            refetchInterval: POLL_INTERVAL_MS,
            enabled: !!asset && !!CONTRACTS.riskGuardOracle,
        },
    });
    return { halted: !!data, isLoading };
}

export function useAllVerdicts(): { tokens: TokenVerdict[]; isLoading: boolean; refetch: () => void } {
    const contracts = PRIORITY_TOKENS.flatMap((t) => [
        {
            address: CONTRACTS.riskGuardOracle,
            abi: RISK_GUARD_ORACLE_ABI,
            functionName: "latestRecord" as const,
            args: [t.address] as const,
        },
        {
            address: CONTRACTS.riskGuardOracle,
            abi: RISK_GUARD_ORACLE_ABI,
            functionName: "isHalted" as const,
            args: [t.address] as const,
        },
    ]);

    const { data, isLoading, refetch } = useReadContracts({
        contracts,
        query: {
            refetchInterval: POLL_INTERVAL_MS,
            enabled: !!CONTRACTS.riskGuardOracle,
        },
    });

    const tokens: TokenVerdict[] = PRIORITY_TOKENS.map((t, i) => {
        const recordResult = data?.[i * 2];
        const haltedResult = data?.[i * 2 + 1];

        const raw = recordResult?.result as
            | {
                verdict: number; cautionFlags: number; drawdownBps: number;
                atrMultiple10: number; rsi: number; spreadBps: number;
                timestamp: number; blockNumber: bigint; reason: string;
            }
            | undefined;

        const record: GuardRecord | null = raw
            ? {
                verdict: Number(raw.verdict),
                verdictLabel: VerdictLabels[Number(raw.verdict)] ?? "UNKNOWN",
                cautionFlags: Number(raw.cautionFlags),
                cautionLabels: activeCautionFlags(Number(raw.cautionFlags)),
                drawdownBps: Number(raw.drawdownBps),
                atrMultiple10: Number(raw.atrMultiple10),
                rsi: Number(raw.rsi),
                spreadBps: Number(raw.spreadBps),
                timestamp: Number(raw.timestamp),
                blockNumber: raw.blockNumber,
                reason: raw.reason,
            }
            : null;

        return {
            symbol: t.symbol,
            address: t.address,
            halted: !!(haltedResult?.result as boolean | undefined),
            record,
        };
    });

    return { tokens, isLoading, refetch: () => refetch() };
}

export function useRecentRecords(asset: Address, count = 50) {
    const { data, isLoading, error } = useReadContract({
        address: CONTRACTS.riskGuardOracle,
        abi: RISK_GUARD_ORACLE_ABI,
        functionName: "recentRecords",
        args: [asset, BigInt(count)],
        query: {
            refetchInterval: POLL_INTERVAL_MS,
            enabled: !!asset && !!CONTRACTS.riskGuardOracle,
        },
    });

    const records: GuardRecord[] = (data ?? []).map((r) => ({
        verdict: Number(r.verdict),
        verdictLabel: VerdictLabels[Number(r.verdict)] ?? "UNKNOWN",
        cautionFlags: Number(r.cautionFlags),
        cautionLabels: activeCautionFlags(Number(r.cautionFlags)),
        drawdownBps: Number(r.drawdownBps),
        atrMultiple10: Number(r.atrMultiple10),
        rsi: Number(r.rsi),
        spreadBps: Number(r.spreadBps),
        timestamp: Number(r.timestamp),
        blockNumber: r.blockNumber,
        reason: r.reason,
    }));

    return { records, isLoading, error };
}

const VERDICT_EVENT = parseAbiItem(
    "event VerdictRecorded(address indexed asset, uint8 indexed verdict, uint8 cautionFlags, int16 drawdownBps, uint8 rsi, uint32 timestamp, string reason)"
);

export function useVerdictTxHashes(asset: Address, lookbackBlocks = 5000) {
    const publicClient = usePublicClient();

    return useQuery({
        queryKey: ["verdict-tx-hashes", asset, CONTRACTS.riskGuardOracle],
        queryFn: async () => {
            if (!publicClient) return new Map<string, string>();

            const latestBlock = await publicClient.getBlockNumber();
            const fromBlock = latestBlock > BigInt(lookbackBlocks)
                ? latestBlock - BigInt(lookbackBlocks)
                : 0n;

            try {
                const logs = await publicClient.getLogs({
                    address: CONTRACTS.riskGuardOracle,
                    event: VERDICT_EVENT,
                    args: { asset },
                    fromBlock,
                    toBlock: latestBlock,
                });

                const map = new Map<string, string>();
                for (const log of logs) {
                    map.set(log.blockNumber.toString(), log.transactionHash);
                }
                return map;
            } catch (err) {
                console.warn("getLogs with full event filter failed, retrying with asset-only filter", err);
                const logs = await publicClient.getLogs({
                    address: CONTRACTS.riskGuardOracle,
                    fromBlock,
                    toBlock: latestBlock,
                });

                const map = new Map<string, string>();
                for (const log of logs) {
                    const topicAsset = log.topics[1];
                    if (topicAsset && topicAsset.toLowerCase().includes(asset.slice(2).toLowerCase())) {
                        map.set(log.blockNumber.toString(), log.transactionHash);
                    }
                }
                return map;
            }
        },
        enabled: !!publicClient && !!asset && !!CONTRACTS.riskGuardOracle,
        refetchInterval: POLL_INTERVAL_MS,
        staleTime: POLL_INTERVAL_MS,
        retry: 1,
    });
}