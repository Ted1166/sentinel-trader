import { type ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useWallet } from "../hooks/useWallet";

const navItems = [
    { to: "/", label: "Dashboard" },
    { to: "/positions", label: "Positions" },
    { to: "/strategy", label: "Strategy" },
    { to: "/guard-log", label: "Guard Log" },
];

export function Layout({ children }: { children: ReactNode }) {
    const { address, isConnected, isConnecting, connectWallet, disconnect } = useWallet();

    return (
        <div className="min-h-screen bg-bg-base text-text-primary">
            <header className="border-b border-border-subtle bg-bg-panel/60 backdrop-blur sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-black">
                                ST
                            </div>
                            <span className="font-semibold tracking-tight">SentinelTrader</span>
                        </div>
                        <nav className="flex gap-1">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    end={item.to === "/"}
                                    className={({ isActive }) =>
                                        `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${isActive
                                            ? "bg-bg-panel-hover text-text-primary"
                                            : "text-text-secondary hover:text-text-primary hover:bg-bg-panel-hover"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    {isConnected ? (
                        <button
                            onClick={() => disconnect()}
                            className="px-3 py-1.5 rounded-md text-sm font-mono bg-bg-panel-hover border border-border-subtle hover:border-emerald-500/50 transition-colors"
                        >
                            {address?.slice(0, 6)}...{address?.slice(-4)}
                        </button>
                    ) : (
                        <button
                            onClick={connectWallet}
                            disabled={isConnecting}
                            className="px-4 py-1.5 rounded-md text-sm font-medium bg-emerald-500 text-black hover:bg-emerald-400 transition-colors disabled:opacity-50"
                        >
                            {isConnecting ? "Connecting…" : "Connect Wallet"}
                        </button>
                    )}
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-6">{children}</main>
        </div>
    );
}