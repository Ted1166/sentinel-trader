# SentinelTrader - contracts

Foundry project. Solidity 0.8.28, 4 contracts, 45 tests.

## Setup

```bash
forge install foundry-rs/forge-std
forge install OpenZeppelin/openzeppelin-contracts
forge build
forge test -vv
```

## Contracts

| Contract | Purpose |
|---|---|
| `RiskGuardOracle.sol` | On-chain verdict ledger — 50-entry ring buffer per asset, emits `HaltTriggered` |
| `TradeLogger.sol` | Immutable trade log — entry/exit/PnL, `competitionPnlBps()` for aggregate scoring |
| `GuardianVault.sol` | Opt-in emergency fund protection — guardian can only move funds *in*, never out |
| `CompetitionRegistry.sol` | Agent identity + strategy metadata, on-chain |

## Deploy

```bash
cp .env.example .env   # fill in deployer key, two wallet addresses, RPC, API key
forge script script/Deploy.s.sol --rpc-url <network> --broadcast --verify -vvvv
```

Note the two-wallet model in `.env.example`: `AGENT_WALLET` (your self-custody trading wallet, recorded as the public identity) is distinct from `LOGGER_WALLET` (a separate gas-only wallet that becomes the on-chain `guardian`/`logger` role on all 3 contracts). See the root README's Security notes for why.

Copy the deployed addresses from the script output into both `agent/.env` and `client/.env`.