import { useAllVerdicts } from "../hooks/useOracle";
import { Panel, VerdictBadge, FlagPill, SkeletonRow, EmptyState, formatTimeAgo } from "../components/ui";

export function Strategy() {
    const { tokens, isLoading } = useAllVerdicts();

    const lean = (rsi: number): { label: string; tone: string } => {
        if (rsi >= 50 && rsi <= 65) return { label: "Bullish lean", tone: "text-emerald-400" };
        if (rsi > 65 && rsi <= 72) return { label: "Mild bullish", tone: "text-emerald-400/70" };
        if (rsi > 72) return { label: "Overbought", tone: "text-amber-400" };
        if (rsi >= 35 && rsi < 50) return { label: "Mild bearish", tone: "text-red-400/70" };
        return { label: "Oversold — bounce watch", tone: "text-red-400" };
    };

    const sorted = [...tokens].sort((a, b) => (a.record?.rsi ?? 50) - (b.record?.rsi ?? 50));

    return (
        <div className="space-y-6">
            <Panel title="Strategy Signal — On-Chain Snapshot">
                <p className="text-xs text-text-secondary mb-4 leading-relaxed">
                    Composite Fear&amp;Greed + Momentum + Sentiment scores are computed live by the
                    agent each cycle and aren't separately persisted on-chain — they're inputs
                    consumed at decision time. The RSI and guard data below <em>are</em> on-chain
                    and verifiable, sorted from most oversold to most overbought.
                </p>

                {isLoading ? (
                    <div className="space-y-2">
                        {Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)}
                    </div>
                ) : sorted.length === 0 ? (
                    <EmptyState message="No signal data yet — agent hasn't run a cycle." />
                ) : (
                    <div className="space-y-2">
                        {sorted.map((t) => {
                            const rsi = t.record?.rsi ?? 50;
                            const l = lean(rsi);
                            return (
                                <div
                                    key={t.symbol}
                                    className="flex items-center gap-4 p-3 rounded-md border border-border-subtle bg-bg-panel-hover"
                                >
                                    <span className="font-mono font-semibold text-sm w-16">{t.symbol}</span>

                                    {/* RSI bar */}
                                    <div className="flex-1 min-w-0">
                                        <div className="h-2 rounded-full bg-bg-base overflow-hidden relative">
                                            <div
                                                className="h-full bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 absolute inset-0"
                                                style={{ clipPath: `inset(0 ${100 - rsi}% 0 0)` }}
                                            />
                                        </div>
                                        <div className="flex justify-between text-[10px] text-text-secondary mt-0.5">
                                            <span>Oversold</span>
                                            <span>Overbought</span>
                                        </div>
                                    </div>

                                    <span className="font-mono text-sm w-12 text-right">{rsi}</span>
                                    <span className={`text-xs font-medium w-40 ${l.tone}`}>{l.label}</span>

                                    {t.record && t.record.cautionLabels.length > 0 && (
                                        <div className="flex gap-1">
                                            {t.record.cautionLabels.slice(0, 2).map((label) => (
                                                <FlagPill key={label} label={label} />
                                            ))}
                                        </div>
                                    )}

                                    {t.record && <VerdictBadge verdict={t.record.verdictLabel} />}

                                    <span className="text-[10px] text-text-secondary w-16 text-right">
                                        {t.record ? formatTimeAgo(t.record.timestamp) : "—"}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                )}
            </Panel>

            <Panel title="Strategy Modules">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div className="rounded-md border border-border-subtle p-3">
                        <div className="font-semibold mb-1">Fear &amp; Greed Rotation</div>
                        <div className="text-xs text-text-secondary leading-relaxed">
                            CMC Fear &amp; Greed Index + perpetual funding rates. Buys fear with
                            negative funding, sells greed with positive funding. Weight: 40%.
                        </div>
                    </div>
                    <div className="rounded-md border border-border-subtle p-3">
                        <div className="font-semibold mb-1">Momentum (RSI + MACD)</div>
                        <div className="text-xs text-text-secondary leading-relaxed">
                            RSI band scoring blended with an approximated MACD signal and
                            24h volume confirmation. Weight: 35%.
                        </div>
                    </div>
                    <div className="rounded-md border border-border-subtle p-3">
                        <div className="font-semibold mb-1">Sentiment Divergence</div>
                        <div className="text-xs text-text-secondary leading-relaxed">
                            Flags gaps between CMC social heat and KOL sentiment — under-radar
                            accumulation vs hype-fade signals. Weight: 25%.
                        </div>
                    </div>
                </div>
            </Panel>
        </div>
    );
}