import "dotenv/config";
import { type Address } from "viem";
export declare const BSC_CHAIN: {
    readonly id: number;
    readonly name: "BNB Smart Chain";
    readonly rpcUrl: string;
};
export declare const CONTRACTS: {
    readonly riskGuardOracle: Address;
    readonly tradeLogger: Address;
    readonly guardianVault: Address;
    readonly competitionRegistry: Address;
    readonly agentWallet: Address;
};
export declare const RISK_GUARD_ORACLE_ABI: readonly [{
    readonly name: "recordVerdict";
    readonly type: "function";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
    }, {
        readonly name: "verdict";
        readonly type: "uint8";
    }, {
        readonly name: "cautionFlags";
        readonly type: "uint8";
    }, {
        readonly name: "drawdownBps";
        readonly type: "int16";
    }, {
        readonly name: "atrMultiple10";
        readonly type: "uint16";
    }, {
        readonly name: "rsi";
        readonly type: "uint8";
    }, {
        readonly name: "spreadBps";
        readonly type: "uint16";
    }, {
        readonly name: "reason";
        readonly type: "string";
    }];
    readonly outputs: readonly [];
}, {
    readonly name: "isHalted";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}, {
    readonly name: "latestRecord";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "verdict";
            readonly type: "uint8";
        }, {
            readonly name: "cautionFlags";
            readonly type: "uint8";
        }, {
            readonly name: "drawdownBps";
            readonly type: "int16";
        }, {
            readonly name: "atrMultiple10";
            readonly type: "uint16";
        }, {
            readonly name: "rsi";
            readonly type: "uint8";
        }, {
            readonly name: "spreadBps";
            readonly type: "uint16";
        }, {
            readonly name: "timestamp";
            readonly type: "uint32";
        }, {
            readonly name: "blockNumber";
            readonly type: "uint64";
        }, {
            readonly name: "reason";
            readonly type: "string";
        }];
    }];
}];
export declare const TRADE_LOGGER_ABI: readonly [{
    readonly name: "openTrade";
    readonly type: "function";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
    }, {
        readonly name: "direction";
        readonly type: "uint8";
    }, {
        readonly name: "entryPrice";
        readonly type: "uint128";
    }, {
        readonly name: "sizeUsd";
        readonly type: "uint128";
    }, {
        readonly name: "confidence";
        readonly type: "uint8";
    }, {
        readonly name: "guardVerdict";
        readonly type: "uint8";
    }, {
        readonly name: "entryTxHash";
        readonly type: "bytes32";
    }, {
        readonly name: "strategyTag";
        readonly type: "string";
    }, {
        readonly name: "reason";
        readonly type: "string";
    }];
    readonly outputs: readonly [{
        readonly name: "id";
        readonly type: "uint64";
    }];
}, {
    readonly name: "closeTrade";
    readonly type: "function";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint64";
    }, {
        readonly name: "exitPrice";
        readonly type: "uint128";
    }, {
        readonly name: "exitTxHash";
        readonly type: "bytes32";
    }, {
        readonly name: "stoppedOut";
        readonly type: "bool";
    }];
    readonly outputs: readonly [];
}, {
    readonly name: "totalTrades";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
    }];
}, {
    readonly name: "competitionPnlBps";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "total";
        readonly type: "int256";
    }];
}];
export declare const GUARDIAN_VAULT_ABI: readonly [{
    readonly name: "protectTokens";
    readonly type: "function";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint128";
    }, {
        readonly name: "reason";
        readonly type: "string";
    }];
    readonly outputs: readonly [];
}, {
    readonly name: "batchProtectTokens";
    readonly type: "function";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint128";
        }];
    }, {
        readonly name: "reason";
        readonly type: "string";
    }];
    readonly outputs: readonly [];
}, {
    readonly name: "isProtected";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}];
export declare const RISK: {
    readonly maxPositionPct: number;
    readonly haltDrawdownPct: number;
    readonly cautionDrawdownPct: number;
    readonly atrHaltMultiple: number;
    readonly atrCautionMultiple: 1.5;
    readonly rsiOverbought: number;
    readonly rsiOversold: number;
    readonly spreadHaltBps: number;
    readonly spreadCautionBps: 50;
    readonly cooldownSecs: number;
    readonly cautionSizeMultiplier: 0.67;
    readonly maxDailyTrades: number;
    readonly maxPositionUsd: number;
    readonly slippageBps: number;
};
export declare const AGENT: {
    readonly cycleIntervalSecs: number;
    readonly aiEnabled: boolean;
    readonly logLevel: string;
    readonly protectedWallets: Address[];
};
export declare const CMC: {
    readonly apiKey: string;
    readonly mcpUrl: string;
};
export declare const Verdict: {
    readonly CLEAR: 0;
    readonly CAUTION: 1;
    readonly HALT: 2;
};
export type VerdictType = (typeof Verdict)[keyof typeof Verdict];
export declare const CautionFlag: {
    readonly DRAWDOWN: number;
    readonly VOLATILITY: number;
    readonly RSI: number;
    readonly SPREAD: number;
    readonly COOLDOWN: number;
};
export declare const Direction: {
    readonly BUY: 0;
    readonly SELL: 1;
};
export type DirectionType = (typeof Direction)[keyof typeof Direction];
//# sourceMappingURL=config.d.ts.map