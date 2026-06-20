import { useAllVerdicts } from "../hooks/useOracle";
import { useCompetitionPnl, useTotalTrades, useAllTrades, useTradeStats } from "../hooks/useTradeLog";
import { StatCard, Panel, VerdictBadge, FlagPill, SkeletonRow, EmptyState, formatTimeAgo } from "../components/ui";

function LiveHeartbeat({ tokens }: { tokens: { record: { timestamp: number } | null }[] }) {
    const timestamps = tokens.map((t) => t.record?.timestamp ?? 0).filter(Boolean);
    const mostRecent = timestamps.length > 0 ? Math.max(...timestamps) : 0;
    const secsAgo = mostRecent ? Math.floor(Date.now() / 1000) - mostRecent : null;
    const isLive = secsAgo !== null && secsAgo < 90; // within 3 cycles (~30s each)

    return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border-subtle bg-bg-panel-hover w-fit">
            <span className="relative flex h-2 w-2">
                {isLive && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                )}
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isLive ? "bg-emerald-500" : "bg-text-secondary"}`} />
            </span>
            <span className="text-xs font-mono text-text-secondary">
                {mostRecent === 0
                    ? "Waiting for first agent cycle…"
                    : isLive
                        ? `Agent live — last verdict ${formatTimeAgo(mostRecent)}`
                        : `Agent idle — last seen ${formatTimeAgo(mostRecent)}`}
            </span>
        </div>
    );
}

export function Dashboard() {
    const { tokens, isLoading: verdictsLoading } = useAllVerdicts();
    const { pnlPct, isLoading: pnlLoading } = useCompetitionPnl();
    const { total: totalTrades } = useTotalTrades();
    const { trades, isLoading: tradesLoading } = useAllTrades();
    const stats = useTradeStats(trades);

    const haltedCount = tokens.filter((t) => t.halted).length;
    const cautionCount = tokens.filter((t) => t.record?.verdictLabel === "CAUTION").length;
    const clearCount = tokens.filter((t) => t.record?.verdictLabel === "CLEAR").length;

    return (
        <div className="space-y-6">
            <LiveHeartbeat tokens={tokens} />

            {/* Headline stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard
                    label="Competition PnL"
                    value={pnlLoading ? "…" : `${pnlPct >= 0 ? "+" : ""}${pnlPct.toFixed(2)}%`}
                    tone={pnlPct > 0 ? "positive" : pnlPct < 0 ? "negative" : "neutral"}
                />
                <StatCard
                    label="Total Trades"
                    value={totalTrades}
                    sublabel={`${stats.openCount} open · ${stats.closedCount} closed`}
                />
                <StatCard
                    label="Win Rate"
                    value={stats.closedCount > 0 ? `${stats.winRate.toFixed(0)}%` : "—"}
                    sublabel={`${stats.winCount}/${stats.closedCount} closed trades`}
                    tone={stats.winRate >= 50 ? "positive" : stats.closedCount > 0 ? "negative" : "neutral"}
                />
                <StatCard
                    label="Guard Status"
                    value={haltedCount > 0 ? `${haltedCount} HALTED` : `${clearCount} clear`}
                    sublabel={`${cautionCount} caution · ${tokens.length} watched`}
                    tone={haltedCount > 0 ? "negative" : "positive"}
                />
            </div>

            {/* Recent cross-token activity — shows the agent actively cycling the watchlist */}
            <Panel title="Recent Activity">
                {verdictsLoading ? (
                    <div className="space-y-2">
                        {Array.from({ length: 4 }).map((_, i) => <SkeletonRow key={i} />)}
                    </div>
                ) : (
                    (() => {
                        const withRecords = tokens
                            .filter((t) => t.record)
                            .sort((a, b) => (b.record!.timestamp) - (a.record!.timestamp))
                            .slice(0, 8);

                        return withRecords.length === 0 ? (
                            <EmptyState message="No agent activity recorded yet." />
                        ) : (
                            <div className="space-y-1">
                                {withRecords.map((t) => (
                                    <div
                                        key={t.symbol}
                                        className="flex items-center justify-between py-2 px-2 rounded hover:bg-bg-panel-hover text-sm"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono font-semibold text-xs w-14">{t.symbol}</span>
                                            <VerdictBadge verdict={t.record!.verdictLabel} />
                                            <span className="text-xs text-text-secondary truncate max-w-md">{t.record!.reason}</span>
                                        </div>
                                        <span className="text-xs text-text-secondary font-mono">{formatTimeAgo(t.record!.timestamp)}</span>
                                    </div>
                                ))}
                            </div>
                        );
                    })()
                )}
            </Panel>

            {/* Live guard verdicts grid */}
            <Panel title="Live Guard Verdicts">
                {verdictsLoading ? (
                    <div className="space-y-2">
                        {Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)}
                    </div>
                ) : tokens.length === 0 ? (
                    <EmptyState message="No verdict data yet — agent hasn't run a cycle." />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {tokens.map((t) => (
                            <div
                                key={t.symbol}
                                className="rounded-md border border-border-subtle bg-bg-panel-hover p-3 space-y-2"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-mono font-semibold text-sm">{t.symbol}</span>
                                    {t.record ? (
                                        <VerdictBadge verdict={t.record.verdictLabel} />
                                    ) : (
                                        <span className="text-xs text-text-secondary">no data</span>
                                    )}
                                </div>
                                {t.record && (
                                    <>
                                        <div className="grid grid-cols-3 gap-2 text-xs text-text-secondary font-mono">
                                            <div>RSI <span className="text-text-primary">{t.record.rsi}</span></div>
                                            <div>DD <span className="text-text-primary">{(t.record.drawdownBps / -100).toFixed(1)}%</span></div>
                                            <div>Spread <span className="text-text-primary">{t.record.spreadBps}bp</span></div>
                                        </div>
                                        {t.record.cautionLabels.length > 0 && (
                                            <div className="flex flex-wrap gap-1">
                                                {t.record.cautionLabels.map((label) => (
                                                    <FlagPill key={label} label={label} />
                                                ))}
                                            </div>
                                        )}
                                        <div className="text-xs text-text-secondary truncate" title={t.record.reason}>
                                            {t.record.reason}
                                        </div>
                                        <div className="text-[10px] text-text-secondary">
                                            {formatTimeAgo(t.record.timestamp)}
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </Panel>

            {/* Recent trades preview */}
            <Panel title="Recent Trades">
                {tradesLoading ? (
                    <div className="space-y-2">
                        {Array.from({ length: 3 }).map((_, i) => <SkeletonRow key={i} />)}
                    </div>
                ) : trades.length === 0 ? (
                    <EmptyState message="No trades yet." />
                ) : (
                    <div className="space-y-1">
                        {trades.slice(0, 5).map((t) => (
                            <div
                                key={t.id.toString()}
                                className="flex items-center justify-between py-2 px-2 rounded hover:bg-bg-panel-hover text-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`text-xs font-semibold px-1.5 py-0.5 rounded ${t.directionLabel === "BUY"
                                                ? "bg-emerald-500/10 text-emerald-400"
                                                : "bg-red-500/10 text-red-400"
                                            }`}
                                    >
                                        {t.directionLabel}
                                    </span>
                                    <span className="font-mono text-text-secondary text-xs">{t.strategyTag}</span>
                                    <span className="text-text-secondary text-xs">{formatTimeAgo(t.entryTimestamp)}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-text-secondary">{t.statusLabel}</span>
                                    {t.status !== 0 && (
                                        <span className={`font-mono text-xs font-semibold ${t.pnlBps >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                                            {t.pnlBps >= 0 ? "+" : ""}{(t.pnlBps / 100).toFixed(2)}%
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Panel>
        </div>
    );
}