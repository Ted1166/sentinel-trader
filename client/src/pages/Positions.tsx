import { useState } from "react";
import { useAllTrades, useTradeStats, type Trade } from "../hooks/useTradeLog";
import { Panel, StatCard, SkeletonRow, EmptyState, formatTimeAgo, formatPnl, shortHash, bscScanTxUrl } from "../components/ui";
import { VerdictLabels, CHAIN_ID } from "../config/contracts";

type FilterTab = "all" | "open" | "closed";

export function Positions() {
    const { trades, isLoading } = useAllTrades();
    const stats = useTradeStats(trades);
    const [tab, setTab] = useState<FilterTab>("all");

    const filtered = trades.filter((t) => {
        if (tab === "open") return t.status === 0;
        if (tab === "closed") return t.status !== 0;
        return true;
    });

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard label="Open Positions" value={stats.openCount} />
                <StatCard label="Closed Trades" value={stats.closedCount} />
                <StatCard
                    label="Avg PnL / Trade"
                    value={formatPnl(stats.avgPnlBps)}
                    tone={stats.avgPnlBps >= 0 ? "positive" : "negative"}
                />
                <StatCard
                    label="Win Rate"
                    value={stats.closedCount > 0 ? `${stats.winRate.toFixed(0)}%` : "—"}
                    tone={stats.winRate >= 50 ? "positive" : "negative"}
                />
            </div>

            <Panel
                title="Trade History"
                action={
                    <div className="flex gap-1">
                        {(["all", "open", "closed"] as FilterTab[]).map((t) => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className={`px-2.5 py-1 rounded text-xs font-medium capitalize transition-colors ${tab === t
                                        ? "bg-bg-panel-hover text-text-primary"
                                        : "text-text-secondary hover:text-text-primary"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                }
            >
                {isLoading ? (
                    <div className="space-y-2">
                        {Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />)}
                    </div>
                ) : filtered.length === 0 ? (
                    <EmptyState message={`No ${tab === "all" ? "" : tab} trades found.`} />
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-text-secondary text-xs border-b border-border-subtle">
                                    <th className="pb-2 font-medium">Side</th>
                                    <th className="pb-2 font-medium">Strategy</th>
                                    <th className="pb-2 font-medium">Size</th>
                                    <th className="pb-2 font-medium">Entry</th>
                                    <th className="pb-2 font-medium">Exit</th>
                                    <th className="pb-2 font-medium">PnL</th>
                                    <th className="pb-2 font-medium">Confidence</th>
                                    <th className="pb-2 font-medium">Guard</th>
                                    <th className="pb-2 font-medium">Status</th>
                                    <th className="pb-2 font-medium">Opened</th>
                                    <th className="pb-2 font-medium">Tx</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((t) => (
                                    <TradeRow key={t.id.toString()} trade={t} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </Panel>
        </div>
    );
}

function TradeRow({ trade: t }: { trade: Trade }) {
    return (
        <tr className="border-b border-border-subtle/50 hover:bg-bg-panel-hover">
            <td className="py-2.5">
                <span
                    className={`text-xs font-semibold px-1.5 py-0.5 rounded ${t.directionLabel === "BUY"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                >
                    {t.directionLabel}
                </span>
            </td>
            <td className="py-2.5 font-mono text-xs text-text-secondary">{t.strategyTag}</td>
            <td className="py-2.5 font-mono text-xs">${t.sizeUsd.toFixed(2)}</td>
            <td className="py-2.5 font-mono text-xs">${t.entryPrice.toFixed(4)}</td>
            <td className="py-2.5 font-mono text-xs">
                {t.status === 0 ? <span className="text-text-secondary">—</span> : `$${t.exitPrice.toFixed(4)}`}
            </td>
            <td className="py-2.5 font-mono text-xs font-semibold">
                {t.status === 0 ? (
                    <span className="text-text-secondary">—</span>
                ) : (
                    <span className={t.pnlBps >= 0 ? "text-emerald-400" : "text-red-400"}>
                        {formatPnl(t.pnlBps)}
                    </span>
                )}
            </td>
            <td className="py-2.5 font-mono text-xs">{t.confidence}%</td>
            <td className="py-2.5 text-xs text-text-secondary">{VerdictLabels[t.guardVerdict]}</td>
            <td className="py-2.5">
                <span
                    className={`text-xs px-1.5 py-0.5 rounded ${t.status === 0
                            ? "bg-blue-500/10 text-blue-400"
                            : t.status === 2
                                ? "bg-amber-500/10 text-amber-400"
                                : "bg-bg-panel-hover text-text-secondary"
                        }`}
                >
                    {t.statusLabel}
                </span>
            </td>
            <td className="py-2.5 text-xs text-text-secondary">{formatTimeAgo(t.entryTimestamp)}</td>
            <td className="py-2.5 font-mono text-xs">
                {t.entryTxHash && t.entryTxHash !== "0x" + "0".repeat(64) ? (
                    <a
                        href={bscScanTxUrl(t.entryTxHash, CHAIN_ID)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 hover:underline"
                        title={t.entryTxHash}
                    >
                        {shortHash(t.entryTxHash)}
                    </a>
                ) : (
                    <span className="text-text-secondary">—</span>
                )}
            </td>
        </tr>
    );
}