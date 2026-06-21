# SentinelTrader — DoraHacks submission draft

---

## One-liner

A self-custody autonomous trading agent on BNB Chain that combines a 5-layer on-chain risk guard with multi-signal market strategy — trades when conditions are genuinely good, halts hard and protects funds when they're not.

---

## What it does

SentinelTrader runs a fixed-interval loop: it pulls live price and Fear & Greed data, runs five independent risk checks (drawdown, volatility, RSI, spread, cooldown) against current conditions, scores every watched token across three weighted strategy signals, asks Claude to make a final trade call given all of that context, and — if the guard engine agrees it's safe — executes the trade via self-custody local signing.

Every guard verdict and every trade (entry, exit, realized PnL) is written immutably on-chain, so the agent's full decision history is independently verifiable by anyone, not just claimed in a README.

A live dashboard renders all of this: real-time guard verdicts across the watchlist, full trade history with direct block-explorer links, and a liveness indicator so you can watch the agent actually working cycle to cycle.

## Why it's different

Most trading-agent submissions wire an LLM to a swap function and call it done. SentinelTrader's risk engine is the load-bearing part: five independent guards run before every decision, the worst result wins, and a HALT verdict overrides the AI's opinion entirely — the agent cannot trade its way around its own risk limits. That same guard engine doubles as the trigger for an opt-in emergency protection vault, so the risk logic isn't just a stop-loss bolted onto a trading bot, it's a reusable safety primitive other wallets can subscribe to.

## Architecture

- **Contracts** (Solidity/Foundry): `RiskGuardOracle` (on-chain verdict ledger), `TradeLogger` (immutable trade + PnL log), `GuardianVault` (opt-in fund protection), `CompetitionRegistry` (agent identity). 45 passing tests.
- **Agent** (TypeScript): monitor → guards → strategy scorer → Claude decision → self-custody execution → on-chain logging, every cycle.
- **Client** (React/Vite): live dashboard reading directly from the contracts, no backend.

## Self-custody

Trading signs locally through the agent's own wallet — keys never leave the machine running the agent. A separate, disposable, gas-only wallet handles pure bookkeeping writes (guard verdicts, trade logs), so the wallet that holds trading capital is never the one exposed to routine on-chain write operations.

## What's verifiable right now

- [N] guard verdicts written on-chain across [N] tokens — [GuardLog link / BscScan link]
- Contracts deployed and verified: [addresses]
- Live dashboard: [URL]
- Demo video: [URL]

## Stack

Solidity, Foundry, OpenZeppelin, TypeScript, viem, Claude (Anthropic API), React, Vite, Tailwind, wagmi, BNB Chain.

---

## Notes for you before submitting

- Fill in the bracketed placeholders above (tx counts, addresses, live URLs, demo video)
- If you haven't recorded a demo video yet, that's the single highest-priority remaining task — judging weighs "demo and presentation" explicitly
- Double check your GitHub repo is public before submitting
- Make sure both Vercel and Render URLs are live and reachable when judges click them, not just working on localhost