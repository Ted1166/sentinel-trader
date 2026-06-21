# SentinelTrader - agent

TypeScript agent: monitors markets, runs the risk guard engine, scores strategy signals, gets a trade decision from Claude, executes via self-custody signing, and logs everything on-chain.

## Local setup

```bash
npm install
cp .env.example .env   # fill in keys + deployed contract addresses
npm run dev
```

Requires the [Trust Wallet Agent Kit CLI](https://agent-kit.trustwallet.com) installed and set up locally (`twak setup`) before running.

## Environment variables

See `.env.example` for the full list. Key ones:

| Variable | Purpose |
|---|---|
| `ANTHROPIC_API_KEY` | Claude trade decisions |
| `CMC_API_KEY` | Price + Fear & Greed data |
| `TWAK_WALLET_PASSWORD` | Unlocks the self-custody trading wallet |
| `LOGGER_PRIVATE_KEY` / `GUARDIAN_PRIVATE_KEY` | Separate gas-only wallet for on-chain bookkeeping writes (not the trading wallet — see root README's Security notes) |
| `RISK_GUARD_ORACLE_ADDRESS` etc. | Deployed contract addresses from `contracts/` |

## Deploying (Render)

This repo includes a `Dockerfile`. On Render:

1. New Web Service → connect this repo → Environment: **Docker**
2. Set all variables from `.env.example` in the Render dashboard
3. **Attach a persistent disk** mounted at `/root/.twak` — TWAK's wallet credentials must survive redeploys and must never be baked into the Docker image
4. After first deploy, open the Render **Shell** tab and run `twak setup` once, interactively, to create the wallet on the persistent disk
5. Fund that wallet address with gas + trading capital, then restart the service

The agent runs as a long-lived background process (a fixed-interval loop), not a typical request/response web service — Render's Web Service type works fine for this since it just needs the process to stay alive; it doesn't need to bind to a port for the agent's own purposes.

## Commands

```bash
npm run dev      # tsx watch — hot reload during development
npm run build    # compile TypeScript to dist/
npm run start    # run compiled dist/index.js (production)
```