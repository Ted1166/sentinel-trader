import { type ReactNode } from "react";

const verdictStyles: Record<string, string> = {
  CLEAR: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  CAUTION: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  HALT: "bg-red-500/10 text-red-400 border-red-500/30",
};

export function VerdictBadge({ verdict }: { verdict: string }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${verdictStyles[verdict] ?? "bg-bg-panel-hover text-text-secondary border-border-subtle"
        }`}
    >
      {verdict}
    </span>
  );
}

export function FlagPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
      {label}
    </span>
  );
}

export function StatCard({
  label,
  value,
  sublabel,
  tone = "neutral",
}: {
  label: string;
  value: ReactNode;
  sublabel?: string;
  tone?: "neutral" | "positive" | "negative";
}) {
  const toneClass =
    tone === "positive" ? "text-emerald-400" : tone === "negative" ? "text-red-400" : "text-text-primary";

  return (
    <div className="rounded-lg border border-border-subtle bg-bg-panel p-4">
      <div className="text-xs text-text-secondary font-medium mb-1">{label}</div>
      <div className={`text-2xl font-semibold font-mono ${toneClass}`}>{value}</div>
      {sublabel && <div className="text-xs text-text-secondary mt-1">{sublabel}</div>}
    </div>
  );
}

export function Panel({ title, children, action }: { title: string; children: ReactNode; action?: ReactNode }) {
  return (
    <div className="rounded-lg border border-border-subtle bg-bg-panel overflow-hidden">
      <div className="px-4 py-3 border-b border-border-subtle flex items-center justify-between">
        <h2 className="text-sm font-semibold text-text-primary">{title}</h2>
        {action}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export function SkeletonRow() {
  return <div className="h-10 rounded bg-bg-panel-hover animate-pulse" />;
}

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-10 text-text-secondary text-sm">{message}</div>
  );
}

export function formatTimeAgo(timestamp: number): string {
  if (!timestamp) return "—";
  const secs = Math.floor(Date.now() / 1000) - timestamp;
  if (secs < 60) return `${secs}s ago`;
  if (secs < 3600) return `${Math.floor(secs / 60)}m ago`;
  if (secs < 86400) return `${Math.floor(secs / 3600)}h ago`;
  return `${Math.floor(secs / 86400)}d ago`;
}

export function formatPnl(bps: number): string {
  const pct = bps / 100;
  return `${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%`;
}

export function shortHash(hash: string): string {
  if (!hash || hash === "0x" + "0".repeat(64)) return "—";
  return `${hash.slice(0, 8)}…${hash.slice(-6)}`;
}

export function bscScanTxUrl(hash: string, chainId: number): string {
  const base = chainId === 56 ? "https://bscscan.com" : "https://testnet.bscscan.com";
  return `${base}/tx/${hash}`;
}