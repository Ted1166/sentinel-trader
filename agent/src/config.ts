import "dotenv/config";
import { type Address } from "viem";

export const BSC_CHAIN = {
  id: Number(process.env.CHAIN_ID ?? 56),
  name: "BNB Smart Chain",
  rpcUrl: process.env.BSC_RPC_URL ?? "https://bsc-dataseed1.binance.org",
} as const;

export const CONTRACTS = {
  riskGuardOracle: (process.env.RISK_GUARD_ORACLE_ADDRESS ?? "") as Address,
  tradeLogger: (process.env.TRADE_LOGGER_ADDRESS ?? "") as Address,
  guardianVault: (process.env.GUARDIAN_VAULT_ADDRESS ?? "") as Address,
  competitionRegistry: (process.env.COMPETITION_REGISTRY_ADDRESS ?? "") as Address,
  agentWallet: (process.env.AGENT_WALLET ?? "") as Address,
} as const;

export const RISK_GUARD_ORACLE_ABI = [
  {
    name: "recordVerdict", type: "function", stateMutability: "nonpayable",
    inputs: [
      { name: "asset", type: "address" }, { name: "verdict", type: "uint8" },
      { name: "cautionFlags", type: "uint8" }, { name: "drawdownBps", type: "int16" },
      { name: "atrMultiple10", type: "uint16" }, { name: "rsi", type: "uint8" },
      { name: "spreadBps", type: "uint16" }, { name: "reason", type: "string" },
    ], outputs: []
  },
  {
    name: "isHalted", type: "function", stateMutability: "view",
    inputs: [{ name: "asset", type: "address" }], outputs: [{ name: "", type: "bool" }]
  },
  {
    name: "latestRecord", type: "function", stateMutability: "view",
    inputs: [{ name: "asset", type: "address" }],
    outputs: [{
      name: "", type: "tuple", components: [
        { name: "verdict", type: "uint8" }, { name: "cautionFlags", type: "uint8" },
        { name: "drawdownBps", type: "int16" }, { name: "atrMultiple10", type: "uint16" },
        { name: "rsi", type: "uint8" }, { name: "spreadBps", type: "uint16" },
        { name: "timestamp", type: "uint32" }, { name: "blockNumber", type: "uint64" },
        { name: "reason", type: "string" },
      ]
    }]
  },
] as const;

export const TRADE_LOGGER_ABI = [
  {
    name: "openTrade", type: "function", stateMutability: "nonpayable",
    inputs: [
      { name: "asset", type: "address" }, { name: "direction", type: "uint8" },
      { name: "entryPrice", type: "uint128" }, { name: "sizeUsd", type: "uint128" },
      { name: "confidence", type: "uint8" }, { name: "guardVerdict", type: "uint8" },
      { name: "entryTxHash", type: "bytes32" }, { name: "strategyTag", type: "string" },
      { name: "reason", type: "string" },
    ], outputs: [{ name: "id", type: "uint64" }]
  },
  {
    name: "closeTrade", type: "function", stateMutability: "nonpayable",
    inputs: [
      { name: "id", type: "uint64" }, { name: "exitPrice", type: "uint128" },
      { name: "exitTxHash", type: "bytes32" }, { name: "stoppedOut", type: "bool" },
    ], outputs: []
  },
  {
    name: "totalTrades", type: "function", stateMutability: "view",
    inputs: [], outputs: [{ name: "", type: "uint64" }]
  },
  {
    name: "competitionPnlBps", type: "function", stateMutability: "view",
    inputs: [], outputs: [{ name: "total", type: "int256" }]
  },
] as const;

export const GUARDIAN_VAULT_ABI = [
  {
    name: "protectTokens", type: "function", stateMutability: "nonpayable",
    inputs: [
      { name: "user", type: "address" }, { name: "token", type: "address" },
      { name: "amount", type: "uint128" }, { name: "reason", type: "string" },
    ], outputs: []
  },
  {
    name: "batchProtectTokens", type: "function", stateMutability: "nonpayable",
    inputs: [
      {
        name: "params", type: "tuple[]", components: [
          { name: "user", type: "address" }, { name: "token", type: "address" }, { name: "amount", type: "uint128" },
        ]
      },
      { name: "reason", type: "string" },
    ], outputs: []
  },
  {
    name: "isProtected", type: "function", stateMutability: "view",
    inputs: [{ name: "user", type: "address" }], outputs: [{ name: "", type: "bool" }]
  },
] as const;

export const RISK = {
  maxPositionPct: Number(process.env.MAX_POSITION_PCT ?? 20),
  haltDrawdownPct: Number(process.env.HALT_DRAWDOWN_PCT ?? 12),
  cautionDrawdownPct: Number(process.env.CAUTION_DRAWDOWN_PCT ?? 7),
  atrHaltMultiple: Number(process.env.ATR_HALT_MULTIPLE ?? 2.5),
  atrCautionMultiple: 1.5,
  rsiOverbought: Number(process.env.RSI_OVERBOUGHT ?? 72),
  rsiOversold: Number(process.env.RSI_OVERSOLD ?? 28),
  spreadHaltBps: Number(process.env.SPREAD_HALT_BPS ?? 100),
  spreadCautionBps: 50,
  cooldownSecs: Number(process.env.COOLDOWN_SECS ?? 300),
  cautionSizeMultiplier: 0.67,
  maxDailyTrades: Number(process.env.MAX_DAILY_TRADES ?? 10),
  maxPositionUsd: Number(process.env.MAX_POSITION_USD ?? 500),
  slippageBps: Number(process.env.SLIPPAGE_BPS ?? 50),
} as const;

export const AGENT = {
  cycleIntervalSecs: Number(process.env.CYCLE_INTERVAL_SECS ?? 30),
  aiEnabled: process.env.AI_ENABLED !== "false",
  logLevel: process.env.LOG_LEVEL ?? "info",
  protectedWallets: (process.env.PROTECTED_WALLETS ?? "")
    .split(",").map((w) => w.trim()).filter(Boolean) as Address[],
} as const;

export const CMC = {
  apiKey: process.env.CMC_API_KEY ?? "",
  mcpUrl: process.env.CMC_MCP_URL ?? "https://mcp.coinmarketcap.com",
} as const;

export const Verdict = { CLEAR: 0, CAUTION: 1, HALT: 2 } as const;
export type VerdictType = (typeof Verdict)[keyof typeof Verdict];

export const CautionFlag = {
  DRAWDOWN: 1 << 0, VOLATILITY: 1 << 1, RSI: 1 << 2,
  SPREAD: 1 << 3, COOLDOWN: 1 << 4,
} as const;

export const Direction = { BUY: 0, SELL: 1 } as const;
export type DirectionType = (typeof Direction)[keyof typeof Direction];