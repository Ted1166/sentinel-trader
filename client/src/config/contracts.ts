import { type Address } from "viem";

export const CHAIN_ID = Number(import.meta.env.VITE_CHAIN_ID ?? 97);

export const BSC_RPC_URL =
    import.meta.env.VITE_BSC_RPC_URL ?? "https://data-seed-prebsc-1-s1.binance.org:8545";

export const POLL_INTERVAL_MS = Number(import.meta.env.VITE_POLL_INTERVAL_MS ?? 15000);

export const CONTRACTS = {
    riskGuardOracle: (import.meta.env.VITE_RISK_GUARD_ORACLE_ADDRESS ?? "") as Address,
    tradeLogger: (import.meta.env.VITE_TRADE_LOGGER_ADDRESS ?? "") as Address,
    guardianVault: (import.meta.env.VITE_GUARDIAN_VAULT_ADDRESS ?? "") as Address,
    competitionRegistry: (import.meta.env.VITE_COMPETITION_REGISTRY_ADDRESS ?? "") as Address,
    agentWallet: (import.meta.env.VITE_AGENT_WALLET ?? "") as Address,
} as const;

export const RISK_GUARD_ORACLE_ABI = [
    {
        name: "isHalted", type: "function", stateMutability: "view",
        inputs: [{ name: "asset", type: "address" }],
        outputs: [{ name: "", type: "bool" }]
    },
    {
        name: "latestRecord", type: "function", stateMutability: "view",
        inputs: [{ name: "asset", type: "address" }],
        outputs: [{
            name: "", type: "tuple", components: [
                { name: "verdict", type: "uint8" },
                { name: "cautionFlags", type: "uint8" },
                { name: "drawdownBps", type: "int16" },
                { name: "atrMultiple10", type: "uint16" },
                { name: "rsi", type: "uint8" },
                { name: "spreadBps", type: "uint16" },
                { name: "timestamp", type: "uint32" },
                { name: "blockNumber", type: "uint64" },
                { name: "reason", type: "string" },
            ]
        }]
    },
    {
        name: "recentRecords", type: "function", stateMutability: "view",
        inputs: [{ name: "asset", type: "address" }, { name: "count", type: "uint256" }],
        outputs: [{
            name: "out", type: "tuple[]", components: [
                { name: "verdict", type: "uint8" },
                { name: "cautionFlags", type: "uint8" },
                { name: "drawdownBps", type: "int16" },
                { name: "atrMultiple10", type: "uint16" },
                { name: "rsi", type: "uint8" },
                { name: "spreadBps", type: "uint16" },
                { name: "timestamp", type: "uint32" },
                { name: "blockNumber", type: "uint64" },
                { name: "reason", type: "string" },
            ]
        }]
    },
    {
        name: "totalRecords", type: "function", stateMutability: "view",
        inputs: [{ name: "asset", type: "address" }],
        outputs: [{ name: "", type: "uint256" }]
    },
    {
        name: "VerdictRecorded", type: "event",
        inputs: [
            { name: "asset", type: "address", indexed: true },
            { name: "verdict", type: "uint8", indexed: true },
            { name: "cautionFlags", type: "uint8", indexed: false },
            { name: "drawdownBps", type: "int16", indexed: false },
            { name: "rsi", type: "uint8", indexed: false },
            { name: "timestamp", type: "uint32", indexed: false },
            { name: "reason", type: "string", indexed: false },
        ]
    },
] as const;

export const TRADE_LOGGER_ABI = [
    {
        name: "getTrade", type: "function", stateMutability: "view",
        inputs: [{ name: "id", type: "uint64" }],
        outputs: [{
            name: "", type: "tuple", components: [
                { name: "id", type: "uint64" },
                { name: "asset", type: "address" },
                { name: "direction", type: "uint8" },
                { name: "status", type: "uint8" },
                { name: "entryPrice", type: "uint128" },
                { name: "exitPrice", type: "uint128" },
                { name: "sizeUsd", type: "uint128" },
                { name: "pnlBps", type: "int32" },
                { name: "confidence", type: "uint8" },
                { name: "guardVerdict", type: "uint8" },
                { name: "entryTimestamp", type: "uint32" },
                { name: "exitTimestamp", type: "uint32" },
                { name: "entryBlock", type: "uint64" },
                { name: "exitBlock", type: "uint64" },
                { name: "entryTxHash", type: "bytes32" },
                { name: "exitTxHash", type: "bytes32" },
                { name: "strategyTag", type: "string" },
                { name: "reason", type: "string" },
            ]
        }]
    },
    {
        name: "getAllTradeIds", type: "function", stateMutability: "view",
        inputs: [], outputs: [{ name: "", type: "uint64[]" }]
    },
    {
        name: "getTradesByAsset", type: "function", stateMutability: "view",
        inputs: [{ name: "asset", type: "address" }],
        outputs: [{ name: "", type: "uint64[]" }]
    },
    {
        name: "totalTrades", type: "function", stateMutability: "view",
        inputs: [], outputs: [{ name: "", type: "uint64" }]
    },
    {
        name: "competitionPnlBps", type: "function", stateMutability: "view",
        inputs: [], outputs: [{ name: "total", type: "int256" }]
    },
    {
        name: "competitionStart", type: "function", stateMutability: "view",
        inputs: [], outputs: [{ name: "", type: "uint32" }]
    },
    {
        name: "competitionEnd", type: "function", stateMutability: "view",
        inputs: [], outputs: [{ name: "", type: "uint32" }]
    },
] as const;

export const GUARDIAN_VAULT_ABI = [
    {
        name: "enableProtection", type: "function", stateMutability: "nonpayable",
        inputs: [], outputs: []
    },
    {
        name: "disableProtection", type: "function", stateMutability: "nonpayable",
        inputs: [], outputs: []
    },
    {
        name: "withdraw", type: "function", stateMutability: "nonpayable",
        inputs: [{ name: "token", type: "address" }], outputs: []
    },
    {
        name: "isProtected", type: "function", stateMutability: "view",
        inputs: [{ name: "user", type: "address" }], outputs: [{ name: "", type: "bool" }]
    },
    {
        name: "getBalance", type: "function", stateMutability: "view",
        inputs: [{ name: "user", type: "address" }, { name: "token", type: "address" }],
        outputs: [{
            name: "", type: "tuple", components: [
                { name: "amount", type: "uint128" },
                { name: "protectedAt", type: "uint32" },
                { name: "reason", type: "string" },
            ]
        }]
    },
] as const;

export const COMPETITION_REGISTRY_ABI = [
    {
        name: "getConfig", type: "function", stateMutability: "view",
        inputs: [], outputs: [{
            name: "", type: "tuple", components: [
                { name: "agentWallet", type: "address" },
                { name: "tradeLogger", type: "address" },
                { name: "riskGuardOracle", type: "address" },
                { name: "strategyName", type: "string" },
                { name: "strategyDesc", type: "string" },
                { name: "registeredAt", type: "uint32" },
                { name: "active", type: "bool" },
            ]
        }]
    },
    {
        name: "registeredOnChain", type: "function", stateMutability: "view",
        inputs: [], outputs: [{ name: "", type: "bool" }]
    },
] as const;

export const Verdict = { CLEAR: 0, CAUTION: 1, HALT: 2 } as const;
export const VerdictLabels = ["CLEAR", "CAUTION", "HALT"] as const;

export const Direction = { BUY: 0, SELL: 1 } as const;
export const DirectionLabels = ["BUY", "SELL"] as const;

export const TradeStatus = { OPEN: 0, CLOSED: 1, STOPPED: 2 } as const;
export const TradeStatusLabels = ["OPEN", "CLOSED", "STOPPED"] as const;

export const CautionFlag = {
    DRAWDOWN: 1 << 0, VOLATILITY: 1 << 1, RSI: 1 << 2,
    SPREAD: 1 << 3, COOLDOWN: 1 << 4,
} as const;

export function activeCautionFlags(flags: number): string[] {
    const active: string[] = [];
    if (flags & CautionFlag.DRAWDOWN) active.push("DRAWDOWN");
    if (flags & CautionFlag.VOLATILITY) active.push("VOLATILITY");
    if (flags & CautionFlag.RSI) active.push("RSI");
    if (flags & CautionFlag.SPREAD) active.push("SPREAD");
    if (flags & CautionFlag.COOLDOWN) active.push("COOLDOWN");
    return active;
}

export const PRIORITY_TOKENS: { symbol: string; address: Address }[] = [
    { symbol: "ETH", address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8" },
    { symbol: "LINK", address: "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD" },
    { symbol: "ADA", address: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47" },
    { symbol: "DOT", address: "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402" },
    { symbol: "UNI", address: "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1" },
    { symbol: "AAVE", address: "0xfb6115445Bff7b52FeB98650C87f44907E58f802" },
    { symbol: "CAKE", address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82" },
    { symbol: "ATOM", address: "0x0Eb3a705fc54725037CC9e008bDede697f62F335" },
    { symbol: "INJ", address: "0xa2B726B1145A4773F68593CF171187d8EBe4d495" },
    { symbol: "AVAX", address: "0x1CE0c2827e2eF14D5C4f29a091d735A204794041" },
    { symbol: "LDO", address: "0x986854779804799C1d68867F5E03e601E781e41b" },
    { symbol: "PENDLE", address: "0xb3Ed0A426155B79B898849803E3B36552f7ED507" },
    { symbol: "AXS", address: "0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0" },
    { symbol: "SNX", address: "0x9Ac983826058b8a9C7Aa1C9171441191232E8404" },
];