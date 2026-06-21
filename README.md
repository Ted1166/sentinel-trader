# SentinelTrader 🛡️

**Autonomous, risk-gated AI trading agent for BNB Chain.**

SentinelTrader monitors crypto markets in real time, scores trade opportunities using a multi-signal strategy engine, and executes trades through self-custody signing — but only when a 5-layer on-chain risk guard says it's safe to act. Every decision, every verdict, and every trade is written immutably on-chain.

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Live

| | |
|---|---|
| **Dashboard** | [sentinel-trader-zeta.vercel.app](https://sentinel-trader-zeta.vercel.app) |
| **Agent** (live status JSON, background process) | [sentinel-trader-j4n5.onrender.com](https://sentinel-trader-j4n5.onrender.com) |
| **RiskGuardOracle** | [`0x315c68615d78c46c9f6fFee115552f335fEeda65`](https://testnet.bscscan.com/address/0x315c68615d78c46c9f6fFee115552f335fEeda65) |
| **TradeLogger** | [`0x0c1CB6aB3A5D62e5868431CF25b9c05D76Dfad16`](https://testnet.bscscan.com/address/0x0c1CB6aB3A5D62e5868431CF25b9c05D76Dfad16) |
| **GuardianVault** | [`0x737078dDFEdF99A0C84327aB98B4f12EEa00349f`](https://testnet.bscscan.com/address/0x737078dDFEdF99A0C84327aB98B4f12EEa00349f) |
| **CompetitionRegistry** | [`0xD0Bb94b3D44f91F4ac956C38E415aef1D1a05418`](https://testnet.bscscan.com/address/0xD0Bb94b3D44f91F4ac956C38E415aef1D1a05418) |
| **Chain** | BSC Testnet (97) |

The agent has been running continuously on Render, writing real guard verdicts on-chain for the full 14-token watchlist every ~30s cycle — every transaction above is independently verifiable, not a claim.

---

## What it does

1. **Monitors** — pulls live price, volume, and Fear & Greed data from CoinMarketCap every cycle
2. **Guards** — runs 5 independent risk checks (drawdown, volatility, RSI, spread, cooldown) against current conditions, producing a `CLEAR` / `CAUTION` / `HALT` verdict per asset
3. **Scores** — combines Fear & Greed rotation, momentum (RSI/MACD), and sentiment-divergence signals into a ranked list of trade candidates
4. **Decides** — Claude reasons over the snapshot, the guard verdict, and the ranked candidates to produce a BUY / SELL / HOLD decision with a stated rationale
5. **Executes** — signs and submits trades via self-custody local signing; no centralized custody of funds at any point
6. **Logs** — writes every guard verdict and every trade (entry, exit, realized PnL) to immutable on-chain contracts, queryable by anyone

A companion dashboard renders all of this live: guard verdicts across the watchlist, trade history with on-chain proof links, and a real-time "is the agent alive" indicator.

---

## Architecture

```
┌──────────────────────────────────────────────────────┐
│                      agent/                            │
│  TypeScript — the brain, runs a fixed-interval loop    │
│                                                        │
│  Monitor ──→ Guards ──→ Strategy ──→ Brain ──→ Executor │
│  (data)      (risk)     (signals)   (AI)      (action)  │
└───────────────────────┬────────────────────────────────┘
                        │  writes verdicts & trades on-chain
                        ▼
┌──────────────────────────────────────────────────────┐
│                    contracts/                          │
│  Solidity (Foundry) — on-chain source of truth          │
│                                                        │
│  RiskGuardOracle   ← verdict ledger, 50-entry ring buffer│
│  TradeLogger       ← immutable trade log + PnL          │
│  GuardianVault     ← opt-in emergency fund protection    │
│  CompetitionRegistry ← agent identity & strategy metadata│
└───────────────────────┬────────────────────────────────┘
                        ▲
                        │  reads on-chain state
┌──────────────────────────────────────────────────────┐
│                     client/                             │
│  React + Vite — live dashboard                          │
│                                                        │
│  Dashboard · Positions · Strategy · Guard Log            │
└──────────────────────────────────────────────────────┘
```

### How a cycle works (every 30s by default)

1. **Monitor** fetches live price/volume and Fear & Greed data, builds a snapshot across the watchlist
2. **Guards** run all 5 risk checks per asset; the worst result wins, caution flags are combined into a bitmask
3. **Strategy** scores every watched token across three weighted signals and ranks them
4. **Brain** sends the snapshot, guard verdict, and ranked candidates to Claude, which returns a structured trade decision
5. **Executor** signs and submits the trade (if any), then writes the guard verdict and trade outcome to their respective on-chain contracts

---

## Project structure

```
sentinel-trader/
├── contracts/          Foundry project — Solidity contracts, tests, deploy script
├── agent/               TypeScript agent — monitoring, risk guards, strategy, AI, execution
├── client/               React + Vite dashboard — live on-chain state, trade history
└── README.md
```

Each subdirectory has its own README/`.env.example` with setup details specific to that layer.

---

## Risk engine

Every trade candidate passes through 5 independent guards before execution. The worst individual verdict determines the overall result:

| Guard | Checks | HALT threshold |
|---|---|---|
| Drawdown | Portfolio value vs. session peak | configurable, default 12% |
| Volatility | 24h price range vs. price (ATR proxy) | configurable, default 2.5× |
| RSI | Overbought / oversold bands | configurable, default 72 / 28 |
| Spread | Estimated bid/ask spread from volume | configurable, default 100bps |
| Cooldown | Time since last stop-loss on this asset | configurable, default 300s |

A `HALT` verdict blocks trading entirely and can trigger automatic fund protection for opted-in wallets via `GuardianVault`. A `CAUTION` verdict scales position size down rather than blocking outright.

---

## Tech stack

| Layer | Tech |
|---|---|
| Contracts | Solidity 0.8.28, Foundry, OpenZeppelin |
| Agent | TypeScript, Node.js, viem, Claude (Anthropic API) |
| Client | React 19, Vite, Tailwind CSS, wagmi, TanStack Query, Recharts |
| Chain | BNB Smart Chain |

---

## Getting started

Each layer is independently runnable — see the README in each directory for full setup:

```bash
# 1. Deploy contracts
cd contracts
forge install
forge build && forge test
# fill in .env, then:
forge script script/Deploy.s.sol --rpc-url <network> --broadcast --verify

# 2. Run the agent
cd ../agent
npm install
# fill in .env with deployed contract addresses + API keys
npm run dev

# 3. Run the dashboard
cd ../client
npm install
# fill in .env with deployed contract addresses
npm run dev
```

---

## Security notes

- The agent's trading wallet uses local self-custody signing — private keys never leave the machine running the agent
- On-chain bookkeeping writes (guard verdicts, trade logs) use a separate, disposable hot wallet funded with gas money only — it never holds trading capital
- `GuardianVault` is strictly opt-in: the guardian role can only move a user's tokens *into* the vault on a verified HALT condition, never withdraw them — only the user can withdraw their own funds
- All contracts use two-step ownership/role transfers to prevent accidental lockout

This is experimental software. Trading agents act autonomously on-chain and can incur real financial loss. Use at your own risk, start with small amounts, and review the contracts yourself before deploying with real funds.

---

## License

MIT
