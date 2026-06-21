import { useState } from "react";
import { type Address } from "viem";
import { useRecentRecords, useVerdictTxHashes } from "../hooks/useOracle";
import { Panel, VerdictBadge, FlagPill, SkeletonRow, EmptyState, formatTimeAgo, shortHash, bscScanTxUrl } from "../components/ui";
import { PRIORITY_TOKENS, CHAIN_ID } from "../config/contracts";

export function GuardLog() {
    const [selected, setSelected] = useState<{ symbol: string; address: Address }>(
        PRIORITY_TOKENS[0]
    );

    const { records, isLoading } = useRecentRecords(selected.address, 50);
    const { data: txHashes, isLoading: txLoading } = useVerdictTxHashes(selected.address);

    return (
        <div className="space-y-6">
            <Panel
                title="Guard Decision History"
                action={
                    <select
                        value={selected.symbol}
                        onChange={(e) => {
                            const t = PRIORITY_TOKENS.find((p) => p.symbol === e.target.value);
                            if (t) setSelected(t);
                        }}
                        className="bg-bg-panel-hover border border-border-subtle rounded px-2 py-1 text-xs font-mono"
                    >
                        {PRIORITY_TOKENS.map((t) => (
                            <option key={t.symbol} value={t.symbol}>{t.symbol}</option>
                        ))}
                    </select>
                }
            >
                {isLoading ? (
                    <div className="space-y-2">
                        {Array.from({ length: 8 }).map((_, i) => <SkeletonRow key={i} />)}
                    </div>
                ) : records.length === 0 ? (
                    <EmptyState message={`No guard records for ${selected.symbol} yet.`} />
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-text-secondary text-xs border-b border-border-subtle">
                                    <th className="pb-2 font-medium">Verdict</th>
                                    <th className="pb-2 font-medium">Flags</th>
                                    <th className="pb-2 font-medium">RSI</th>
                                    <th className="pb-2 font-medium">Drawdown</th>
                                    <th className="pb-2 font-medium">ATR×10</th>
                                    <th className="pb-2 font-medium">Spread</th>
                                    <th className="pb-2 font-medium">Reason</th>
                                    <th className="pb-2 font-medium">Block</th>
                                    <th className="pb-2 font-medium">Tx</th>
                                    <th className="pb-2 font-medium">When</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map((r, i) => {
                                    const txHash = txHashes?.get(r.blockNumber.toString());
                                    return (
                                        <tr key={i} className="border-b border-border-subtle/50 hover:bg-bg-panel-hover">
                                            <td className="py-2.5"><VerdictBadge verdict={r.verdictLabel} /></td>
                                            <td className="py-2.5">
                                                <div className="flex flex-wrap gap-1">
                                                    {r.cautionLabels.length > 0
                                                        ? r.cautionLabels.map((l) => <FlagPill key={l} label={l} />)
                                                        : <span className="text-xs text-text-secondary">—</span>}
                                                </div>
                                            </td>
                                            <td className="py-2.5 font-mono text-xs">{r.rsi}</td>
                                            <td className="py-2.5 font-mono text-xs">
                                                <span className={r.drawdownBps < 0 ? "text-red-400" : "text-text-secondary"}>
                                                    {(r.drawdownBps / -100).toFixed(2)}%
                                                </span>
                                            </td>
                                            <td className="py-2.5 font-mono text-xs text-text-secondary">{r.atrMultiple10}</td>
                                            <td className="py-2.5 font-mono text-xs text-text-secondary">{r.spreadBps}bp</td>
                                            <td className="py-2.5 text-xs text-text-secondary max-w-xs truncate" title={r.reason}>
                                                {r.reason}
                                            </td>
                                            <td className="py-2.5 font-mono text-xs text-text-secondary">
                                                {r.blockNumber.toString()}
                                            </td>
                                            <td className="py-2.5 font-mono text-xs">
                                                {txHash ? (
                                                    <a
                                                        href={bscScanTxUrl(txHash, CHAIN_ID)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-emerald-400 hover:text-emerald-300 hover:underline"
                                                        title={txHash}
                                                    >
                                                        {shortHash(txHash)}
                                                    </a>
                                                ) : txLoading ? (
                                                    <span className="text-text-secondary">…</span>
                                                ) : (
                                                    <span className="text-text-secondary" title="Outside the indexed block range">—</span>
                                                )}
                                            </td>
                                            <td className="py-2.5 text-xs text-text-secondary">{formatTimeAgo(r.timestamp)}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </Panel>
        </div>
    );
}