# SentinelTrader - client

React + Vite dashboard. Reads on-chain state directly (no backend) and renders live guard verdicts, trade history, and strategy signals.

## Local setup

```bash
npm install
cp .env.example .env   # fill in deployed contract addresses
npm run dev
```

## Environment variables

All variables are `VITE_`-prefixed (required for Vite to expose them client-side). See `.env.example`:

| Variable | Purpose |
|---|---|
| `VITE_CHAIN_ID` | `56` mainnet / `97` testnet |
| `VITE_BSC_RPC_URL` | RPC endpoint for reads |
| `VITE_RISK_GUARD_ORACLE_ADDRESS` etc. | Deployed contract addresses from `contracts/` |

## Deploying (Vercel)

```bash
npm install -g vercel
vercel
```

Or connect the repo in the Vercel dashboard:
- Framework preset: **Vite**
- Root directory: `client`
- Build command: `npm run build`
- Output directory: `dist`
- Set the `VITE_*` env vars in Vercel's project settings (Environment Variables tab) — they must be set there too, not just in your local `.env`, since Vercel doesn't read your local file

`vercel.json` is already included with the SPA rewrite rule needed for client-side routing (so refreshing `/positions`, `/strategy`, etc. doesn't 404).

## Pages

- **Dashboard** — live guard verdicts grid, competition PnL, recent activity feed, agent liveness pulse
- **Positions** — full trade history with on-chain tx links, filterable by open/closed
- **Strategy** — RSI-sorted signal view across the watchlist
- **Guard Log** — full per-token guard decision history with clickable BscScan links