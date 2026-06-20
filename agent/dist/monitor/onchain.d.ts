import { type Address } from "viem";
export declare const publicClient: {
    account: undefined;
    batch?: {
        multicall?: boolean | import("viem").Prettify<import("viem").MulticallBatchOptions> | undefined;
    } | undefined;
    cacheTime: number;
    ccipRead?: false | {
        request?: (parameters: import("viem").CcipRequestParameters) => Promise<`0x${string}`>;
    } | undefined;
    chain: {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    };
    dataSuffix?: import("viem").DataSuffix | undefined;
    experimental_blockTag?: import("viem").BlockTag | undefined;
    key: string;
    name: string;
    pollingInterval: number;
    request: import("viem").EIP1193RequestFn<import("viem").PublicRpcSchema>;
    transport: import("viem").TransportConfig<"http", import("viem").EIP1193RequestFn> & {
        fetchOptions?: import("viem").HttpTransportConfig["fetchOptions"] | undefined;
        url?: string | undefined;
    };
    type: string;
    uid: string;
    call: (parameters: import("viem").CallParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }>) => Promise<import("viem").CallReturnType>;
    createAccessList: (parameters: import("viem").CreateAccessListParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }>) => Promise<{
        accessList: import("viem").AccessList;
        gasUsed: bigint;
    }>;
    createBlockFilter: () => Promise<import("viem").CreateBlockFilterReturnType>;
    createContractEventFilter: <const abi extends import("viem").Abi | readonly unknown[], eventName extends import("viem").ContractEventName<abi> | undefined, args extends import("viem").MaybeExtractEventArgsFromAbi<abi, eventName> | undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined>(args: import("viem").CreateContractEventFilterParameters<abi, eventName, args, strict, fromBlock, toBlock>) => Promise<import("viem").CreateContractEventFilterReturnType<abi, eventName, args, strict, fromBlock, toBlock>>;
    createEventFilter: <const abiEvent extends import("viem").AbiEvent | undefined = undefined, const abiEvents extends readonly import("viem").AbiEvent[] | readonly unknown[] | undefined = abiEvent extends import("viem").AbiEvent ? [abiEvent] : undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, _EventName extends string | undefined = import("viem").MaybeAbiEventName<abiEvent>, _Args extends import("viem").MaybeExtractEventArgsFromAbi<abiEvents, _EventName> | undefined = undefined>(args?: import("viem").CreateEventFilterParameters<abiEvent, abiEvents, strict, fromBlock, toBlock, _EventName, _Args> | undefined) => Promise<import("viem").CreateEventFilterReturnType<abiEvent, abiEvents, strict, fromBlock, toBlock, _EventName, _Args>>;
    createPendingTransactionFilter: () => Promise<import("viem").CreatePendingTransactionFilterReturnType>;
    estimateContractGas: <chain extends import("viem").Chain | undefined, const abi extends import("viem").Abi | readonly unknown[], functionName extends import("viem").ContractFunctionName<abi, "nonpayable" | "payable">, args extends import("viem").ContractFunctionArgs<abi, "nonpayable" | "payable", functionName>>(args: import("viem").EstimateContractGasParameters<abi, functionName, args, chain>) => Promise<import("viem").EstimateContractGasReturnType>;
    estimateGas: (args: import("viem").EstimateGasParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }>) => Promise<import("viem").EstimateGasReturnType>;
    fillTransaction: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | Address | undefined = undefined>(args: import("viem").FillTransactionParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, import("viem").Account | undefined, chainOverride, accountOverride>) => Promise<import("viem").FillTransactionReturnType<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>>;
    getBalance: (args: import("viem").GetBalanceParameters) => Promise<import("viem").GetBalanceReturnType>;
    getBlobBaseFee: () => Promise<import("viem").GetBlobBaseFeeReturnType>;
    getBlock: <includeTransactions extends boolean = false, blockTag extends import("viem").BlockTag = "latest">(args?: import("viem").GetBlockParameters<includeTransactions, blockTag> | undefined) => Promise<{
        number: blockTag extends "pending" ? null : bigint;
        timestamp: bigint;
        hash: blockTag extends "pending" ? null : `0x${string}`;
        nonce: blockTag extends "pending" ? null : `0x${string}`;
        logsBloom: blockTag extends "pending" ? null : `0x${string}`;
        baseFeePerGas: bigint | null;
        blobGasUsed: bigint;
        difficulty: bigint;
        excessBlobGas: bigint;
        extraData: import("viem").Hex;
        gasLimit: bigint;
        gasUsed: bigint;
        miner: Address;
        mixHash: import("viem").Hash;
        parentBeaconBlockRoot?: `0x${string}` | undefined;
        parentHash: import("viem").Hash;
        receiptsRoot: import("viem").Hex;
        sealFields: import("viem").Hex[];
        sha3Uncles: import("viem").Hash;
        size: bigint;
        stateRoot: import("viem").Hash;
        totalDifficulty: bigint | null;
        transactionsRoot: import("viem").Hash;
        uncles: import("viem").Hash[];
        withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
        withdrawalsRoot?: `0x${string}` | undefined;
        transactions: includeTransactions extends true ? ({
            value: bigint;
            yParity?: undefined | undefined;
            blockTimestamp?: bigint | undefined;
            from: Address;
            gas: bigint;
            hash: import("viem").Hash;
            input: import("viem").Hex;
            nonce: number;
            r: import("viem").Hex;
            s: import("viem").Hex;
            to: Address | null;
            typeHex: import("viem").Hex | null;
            v: bigint;
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            chainId?: number | undefined;
            type: "legacy";
            gasPrice: bigint;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T ? T extends (blockTag extends "pending" ? true : false) ? T extends true ? null : bigint : never : never;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_1 ? T_1 extends (blockTag extends "pending" ? true : false) ? T_1 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_2 ? T_2 extends (blockTag extends "pending" ? true : false) ? T_2 extends true ? null : number : never : never;
        } | {
            value: bigint;
            yParity: number;
            blockTimestamp?: bigint | undefined;
            from: Address;
            gas: bigint;
            hash: import("viem").Hash;
            input: import("viem").Hex;
            nonce: number;
            r: import("viem").Hex;
            s: import("viem").Hex;
            to: Address | null;
            typeHex: import("viem").Hex | null;
            v: bigint;
            accessList: import("viem").AccessList;
            authorizationList?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            chainId: number;
            type: "eip2930";
            gasPrice: bigint;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T_3 ? T_3 extends (blockTag extends "pending" ? true : false) ? T_3 extends true ? null : bigint : never : never;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_4 ? T_4 extends (blockTag extends "pending" ? true : false) ? T_4 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_5 ? T_5 extends (blockTag extends "pending" ? true : false) ? T_5 extends true ? null : number : never : never;
        } | {
            value: bigint;
            yParity: number;
            blockTimestamp?: bigint | undefined;
            from: Address;
            gas: bigint;
            hash: import("viem").Hash;
            input: import("viem").Hex;
            nonce: number;
            r: import("viem").Hex;
            s: import("viem").Hex;
            to: Address | null;
            typeHex: import("viem").Hex | null;
            v: bigint;
            accessList: import("viem").AccessList;
            authorizationList?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            chainId: number;
            type: "eip1559";
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T_6 ? T_6 extends (blockTag extends "pending" ? true : false) ? T_6 extends true ? null : bigint : never : never;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_7 ? T_7 extends (blockTag extends "pending" ? true : false) ? T_7 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_8 ? T_8 extends (blockTag extends "pending" ? true : false) ? T_8 extends true ? null : number : never : never;
        } | {
            value: bigint;
            yParity: number;
            blockTimestamp?: bigint | undefined;
            from: Address;
            gas: bigint;
            hash: import("viem").Hash;
            input: import("viem").Hex;
            nonce: number;
            r: import("viem").Hex;
            s: import("viem").Hex;
            to: Address | null;
            typeHex: import("viem").Hex | null;
            v: bigint;
            accessList: import("viem").AccessList;
            authorizationList?: undefined | undefined;
            blobVersionedHashes: readonly import("viem").Hex[];
            chainId: number;
            type: "eip4844";
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T_9 ? T_9 extends (blockTag extends "pending" ? true : false) ? T_9 extends true ? null : bigint : never : never;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_10 ? T_10 extends (blockTag extends "pending" ? true : false) ? T_10 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_11 ? T_11 extends (blockTag extends "pending" ? true : false) ? T_11 extends true ? null : number : never : never;
        } | {
            value: bigint;
            yParity: number;
            blockTimestamp?: bigint | undefined;
            from: Address;
            gas: bigint;
            hash: import("viem").Hash;
            input: import("viem").Hex;
            nonce: number;
            r: import("viem").Hex;
            s: import("viem").Hex;
            to: Address | null;
            typeHex: import("viem").Hex | null;
            v: bigint;
            accessList: import("viem").AccessList;
            authorizationList: import("viem").SignedAuthorizationList;
            blobVersionedHashes?: undefined | undefined;
            chainId: number;
            type: "eip7702";
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T_12 ? T_12 extends (blockTag extends "pending" ? true : false) ? T_12 extends true ? null : bigint : never : never;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_13 ? T_13 extends (blockTag extends "pending" ? true : false) ? T_13 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_14 ? T_14 extends (blockTag extends "pending" ? true : false) ? T_14 extends true ? null : number : never : never;
        })[] : `0x${string}`[];
    }>;
    getBlockReceipts: (args?: import("viem").GetBlockReceiptsParameters | undefined) => Promise<import("viem").GetBlockReceiptsReturnType<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }>>;
    getBlockNumber: (args?: import("viem").GetBlockNumberParameters | undefined) => Promise<import("viem").GetBlockNumberReturnType>;
    getBlockTransactionCount: (args?: import("viem").GetBlockTransactionCountParameters | undefined) => Promise<import("viem").GetBlockTransactionCountReturnType>;
    getBytecode: (args: import("viem").GetBytecodeParameters) => Promise<import("viem").GetBytecodeReturnType>;
    getChainId: () => Promise<import("viem").GetChainIdReturnType>;
    getCode: (args: import("viem").GetBytecodeParameters) => Promise<import("viem").GetBytecodeReturnType>;
    getContractEvents: <const abi extends import("viem").Abi | readonly unknown[], eventName extends import("viem").ContractEventName<abi> | undefined = undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined>(args: import("viem").GetContractEventsParameters<abi, eventName, strict, fromBlock, toBlock>) => Promise<import("viem").GetContractEventsReturnType<abi, eventName, strict, fromBlock, toBlock>>;
    getDelegation: (args: import("viem").GetDelegationParameters) => Promise<import("viem").GetDelegationReturnType>;
    getEip712Domain: (args: import("viem").GetEip712DomainParameters) => Promise<import("viem").GetEip712DomainReturnType>;
    getEnsAddress: (args: import("viem").GetEnsAddressParameters) => Promise<import("viem").GetEnsAddressReturnType>;
    getEnsAvatar: (args: import("viem").GetEnsAvatarParameters) => Promise<import("viem").GetEnsAvatarReturnType>;
    getEnsName: (args: import("viem").GetEnsNameParameters) => Promise<import("viem").GetEnsNameReturnType>;
    getEnsResolver: (args: import("viem").GetEnsResolverParameters) => Promise<import("viem").GetEnsResolverReturnType>;
    getEnsText: (args: import("viem").GetEnsTextParameters) => Promise<import("viem").GetEnsTextReturnType>;
    getFeeHistory: (args: import("viem").GetFeeHistoryParameters) => Promise<import("viem").GetFeeHistoryReturnType>;
    estimateFeesPerGas: <chainOverride extends import("viem").Chain | undefined = undefined, type extends import("viem").FeeValuesType = "eip1559">(args?: import("viem").EstimateFeesPerGasParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride, type> | undefined) => Promise<import("viem").EstimateFeesPerGasReturnType<type>>;
    getFilterChanges: <filterType extends import("viem").FilterType, const abi extends import("viem").Abi | readonly unknown[] | undefined, eventName extends string | undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined>(args: import("viem").GetFilterChangesParameters<filterType, abi, eventName, strict, fromBlock, toBlock>) => Promise<import("viem").GetFilterChangesReturnType<filterType, abi, eventName, strict, fromBlock, toBlock>>;
    getFilterLogs: <const abi extends import("viem").Abi | readonly unknown[] | undefined, eventName extends string | undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined>(args: import("viem").GetFilterLogsParameters<abi, eventName, strict, fromBlock, toBlock>) => Promise<import("viem").GetFilterLogsReturnType<abi, eventName, strict, fromBlock, toBlock>>;
    getGasPrice: () => Promise<import("viem").GetGasPriceReturnType>;
    getLogs: <const abiEvent extends import("viem").AbiEvent | undefined = undefined, const abiEvents extends readonly import("viem").AbiEvent[] | readonly unknown[] | undefined = abiEvent extends import("viem").AbiEvent ? [abiEvent] : undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined>(args?: import("viem").GetLogsParameters<abiEvent, abiEvents, strict, fromBlock, toBlock> | undefined) => Promise<import("viem").GetLogsReturnType<abiEvent, abiEvents, strict, fromBlock, toBlock>>;
    getProof: (args: import("viem").GetProofParameters) => Promise<import("viem").GetProofReturnType>;
    estimateMaxPriorityFeePerGas: <chainOverride extends import("viem").Chain | undefined = undefined>(args?: {
        chain?: chainOverride | null | undefined;
    } | undefined) => Promise<import("viem").EstimateMaxPriorityFeePerGasReturnType>;
    getStorageAt: (args: import("viem").GetStorageAtParameters) => Promise<import("viem").GetStorageAtReturnType>;
    getTransaction: <blockTag extends import("viem").BlockTag = "latest">(args: import("viem").GetTransactionParameters<blockTag>) => Promise<{
        value: bigint;
        yParity?: undefined | undefined;
        blockTimestamp?: bigint | undefined;
        from: Address;
        gas: bigint;
        hash: import("viem").Hash;
        input: import("viem").Hex;
        nonce: number;
        r: import("viem").Hex;
        s: import("viem").Hex;
        to: Address | null;
        typeHex: import("viem").Hex | null;
        v: bigint;
        accessList?: undefined | undefined;
        authorizationList?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        chainId?: number | undefined;
        type: "legacy";
        gasPrice: bigint;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: undefined | undefined;
        maxPriorityFeePerGas?: undefined | undefined;
        blockNumber: (blockTag extends "pending" ? true : false) extends infer T ? T extends (blockTag extends "pending" ? true : false) ? T extends true ? null : bigint : never : never;
        blockHash: (blockTag extends "pending" ? true : false) extends infer T_1 ? T_1 extends (blockTag extends "pending" ? true : false) ? T_1 extends true ? null : `0x${string}` : never : never;
        transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_2 ? T_2 extends (blockTag extends "pending" ? true : false) ? T_2 extends true ? null : number : never : never;
    } | {
        value: bigint;
        yParity: number;
        blockTimestamp?: bigint | undefined;
        from: Address;
        gas: bigint;
        hash: import("viem").Hash;
        input: import("viem").Hex;
        nonce: number;
        r: import("viem").Hex;
        s: import("viem").Hex;
        to: Address | null;
        typeHex: import("viem").Hex | null;
        v: bigint;
        accessList: import("viem").AccessList;
        authorizationList?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        chainId: number;
        type: "eip2930";
        gasPrice: bigint;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: undefined | undefined;
        maxPriorityFeePerGas?: undefined | undefined;
        blockNumber: (blockTag extends "pending" ? true : false) extends infer T_3 ? T_3 extends (blockTag extends "pending" ? true : false) ? T_3 extends true ? null : bigint : never : never;
        blockHash: (blockTag extends "pending" ? true : false) extends infer T_4 ? T_4 extends (blockTag extends "pending" ? true : false) ? T_4 extends true ? null : `0x${string}` : never : never;
        transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_5 ? T_5 extends (blockTag extends "pending" ? true : false) ? T_5 extends true ? null : number : never : never;
    } | {
        value: bigint;
        yParity: number;
        blockTimestamp?: bigint | undefined;
        from: Address;
        gas: bigint;
        hash: import("viem").Hash;
        input: import("viem").Hex;
        nonce: number;
        r: import("viem").Hex;
        s: import("viem").Hex;
        to: Address | null;
        typeHex: import("viem").Hex | null;
        v: bigint;
        accessList: import("viem").AccessList;
        authorizationList?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        chainId: number;
        type: "eip1559";
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        blockNumber: (blockTag extends "pending" ? true : false) extends infer T_6 ? T_6 extends (blockTag extends "pending" ? true : false) ? T_6 extends true ? null : bigint : never : never;
        blockHash: (blockTag extends "pending" ? true : false) extends infer T_7 ? T_7 extends (blockTag extends "pending" ? true : false) ? T_7 extends true ? null : `0x${string}` : never : never;
        transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_8 ? T_8 extends (blockTag extends "pending" ? true : false) ? T_8 extends true ? null : number : never : never;
    } | {
        value: bigint;
        yParity: number;
        blockTimestamp?: bigint | undefined;
        from: Address;
        gas: bigint;
        hash: import("viem").Hash;
        input: import("viem").Hex;
        nonce: number;
        r: import("viem").Hex;
        s: import("viem").Hex;
        to: Address | null;
        typeHex: import("viem").Hex | null;
        v: bigint;
        accessList: import("viem").AccessList;
        authorizationList?: undefined | undefined;
        blobVersionedHashes: readonly import("viem").Hex[];
        chainId: number;
        type: "eip4844";
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        blockNumber: (blockTag extends "pending" ? true : false) extends infer T_9 ? T_9 extends (blockTag extends "pending" ? true : false) ? T_9 extends true ? null : bigint : never : never;
        blockHash: (blockTag extends "pending" ? true : false) extends infer T_10 ? T_10 extends (blockTag extends "pending" ? true : false) ? T_10 extends true ? null : `0x${string}` : never : never;
        transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_11 ? T_11 extends (blockTag extends "pending" ? true : false) ? T_11 extends true ? null : number : never : never;
    } | {
        value: bigint;
        yParity: number;
        blockTimestamp?: bigint | undefined;
        from: Address;
        gas: bigint;
        hash: import("viem").Hash;
        input: import("viem").Hex;
        nonce: number;
        r: import("viem").Hex;
        s: import("viem").Hex;
        to: Address | null;
        typeHex: import("viem").Hex | null;
        v: bigint;
        accessList: import("viem").AccessList;
        authorizationList: import("viem").SignedAuthorizationList;
        blobVersionedHashes?: undefined | undefined;
        chainId: number;
        type: "eip7702";
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        blockNumber: (blockTag extends "pending" ? true : false) extends infer T_12 ? T_12 extends (blockTag extends "pending" ? true : false) ? T_12 extends true ? null : bigint : never : never;
        blockHash: (blockTag extends "pending" ? true : false) extends infer T_13 ? T_13 extends (blockTag extends "pending" ? true : false) ? T_13 extends true ? null : `0x${string}` : never : never;
        transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_14 ? T_14 extends (blockTag extends "pending" ? true : false) ? T_14 extends true ? null : number : never : never;
    }>;
    getTransactionConfirmations: (args: import("viem").GetTransactionConfirmationsParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }>) => Promise<import("viem").GetTransactionConfirmationsReturnType>;
    getTransactionCount: (args: import("viem").GetTransactionCountParameters) => Promise<import("viem").GetTransactionCountReturnType>;
    getTransactionReceipt: (args: import("viem").GetTransactionReceiptParameters) => Promise<import("viem").TransactionReceipt>;
    multicall: <const contracts extends readonly unknown[], allowFailure extends boolean = true>(args: import("viem").MulticallParameters<contracts, allowFailure>) => Promise<import("viem").MulticallReturnType<contracts, allowFailure>>;
    prepareTransactionRequest: <const request extends import("viem").PrepareTransactionRequestRequest<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | Address | undefined = undefined>(args: import("viem").PrepareTransactionRequestParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, import("viem").Account | undefined, chainOverride, accountOverride, request>) => Promise<import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride> extends infer T_1 ? T_1 extends import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride> ? T_1 extends import("viem").Chain ? {
        chain: T_1;
    } : {
        chain?: undefined;
    } : never : never) & (import("viem").DeriveAccount<import("viem").Account | undefined, accountOverride> extends infer T_2 ? T_2 extends import("viem").DeriveAccount<import("viem").Account | undefined, accountOverride> ? T_2 extends import("viem").Account ? {
        account: T_2;
        from: Address;
    } : {
        account?: undefined;
        from?: undefined;
    } : never : never), import("viem").IsNever<import("viem").ExtractFormattedTransactionRequest<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, {
        type?: ((request["type"] extends string ? request["type"] : import("viem").IsNever<import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_3 ? T_3 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_3 extends object ? request extends import("viem").ExactPartial<T_3> ? T_3 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_4 ? T_4 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_4 extends object ? request extends import("viem").ExactPartial<T_4> ? T_4 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never> extends false ? import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_5 ? T_5 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_5 extends object ? request extends import("viem").ExactPartial<T_5> ? T_5 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_6 ? T_6 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_6 extends object ? request extends import("viem").ExactPartial<T_6> ? T_6 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never : request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_7 ? T_7 extends (request["type"] extends string ? request["type"] : import("viem").IsNever<import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_8 ? T_8 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_8 extends object ? request extends import("viem").ExactPartial<T_8> ? T_8 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_9 ? T_9 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_9 extends object ? request extends import("viem").ExactPartial<T_9> ? T_9 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never> extends false ? import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_10 ? T_10 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_10 extends object ? request extends import("viem").ExactPartial<T_10> ? T_10 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_11 ? T_11 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_11 extends object ? request extends import("viem").ExactPartial<T_11> ? T_11 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never : request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_7 extends string ? T_7 : undefined : never : never) | undefined;
    }, import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from">, ((request["type"] extends string ? request["type"] : import("viem").IsNever<import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_12 ? T_12 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_12 extends object ? request extends import("viem").ExactPartial<T_12> ? T_12 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_13 ? T_13 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_13 extends object ? request extends import("viem").ExactPartial<T_13> ? T_13 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never> extends false ? import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_14 ? T_14 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_14 extends object ? request extends import("viem").ExactPartial<T_14> ? T_14 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_15 ? T_15 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_15 extends object ? request extends import("viem").ExactPartial<T_15> ? T_15 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never : request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
        accessList?: undefined | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    }) ? "eip1559" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: undefined | undefined;
        maxPriorityFeePerGas?: undefined | undefined;
    } & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    } ? "eip2930" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    }) & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
        accessList?: undefined | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    }) ? "eip1559" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: undefined | undefined;
        maxPriorityFeePerGas?: undefined | undefined;
    } & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    } ? "eip2930" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    }) & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_16 ? T_16 extends (request["type"] extends string ? request["type"] : import("viem").IsNever<import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_17 ? T_17 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_17 extends object ? request extends import("viem").ExactPartial<T_17> ? T_17 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_18 ? T_18 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_18 extends object ? request extends import("viem").ExactPartial<T_18> ? T_18 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never> extends false ? import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_19 ? T_19 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_19 extends object ? request extends import("viem").ExactPartial<T_19> ? T_19 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_20 ? T_20 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_20 extends object ? request extends import("viem").ExactPartial<T_20> ? T_20 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never : request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
        accessList?: undefined | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    }) ? "eip1559" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: undefined | undefined;
        maxPriorityFeePerGas?: undefined | undefined;
    } & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    } ? "eip2930" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    }) & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
        accessList?: undefined | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    }) ? "eip1559" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: undefined | undefined;
        maxPriorityFeePerGas?: undefined | undefined;
    } & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    } ? "eip2930" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    }) & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_16 extends string ? T_16 : undefined : never : never) | undefined>> extends true ? unknown : import("viem").ExactPartial<import("viem").ExtractFormattedTransactionRequest<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, {
        type?: ((request["type"] extends string ? request["type"] : import("viem").IsNever<import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_21 ? T_21 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_21 extends object ? request extends import("viem").ExactPartial<T_21> ? T_21 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_22 ? T_22 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_22 extends object ? request extends import("viem").ExactPartial<T_22> ? T_22 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never> extends false ? import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_23 ? T_23 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_23 extends object ? request extends import("viem").ExactPartial<T_23> ? T_23 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_24 ? T_24 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_24 extends object ? request extends import("viem").ExactPartial<T_24> ? T_24 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never : request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_25 ? T_25 extends (request["type"] extends string ? request["type"] : import("viem").IsNever<import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_26 ? T_26 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_26 extends object ? request extends import("viem").ExactPartial<T_26> ? T_26 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_27 ? T_27 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_27 extends object ? request extends import("viem").ExactPartial<T_27> ? T_27 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never> extends false ? import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_28 ? T_28 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_28 extends object ? request extends import("viem").ExactPartial<T_28> ? T_28 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_29 ? T_29 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            blockTime: 750;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://56.rpc.thirdweb.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        } | {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            blockTime?: number | undefined | undefined;
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "BNB Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            experimental_preconfirmationTime?: number | undefined | undefined;
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            extendSchema?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
                client: import("viem").Client;
                phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
            }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
                runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
            }] | undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
        }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_29 extends object ? request extends import("viem").ExactPartial<T_29> ? T_29 extends {
            type?: infer type | undefined;
        } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never : request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_25 extends string ? T_25 : undefined : never : never) | undefined;
    }, import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from">, ((request["type"] extends string ? request["type"] : import("viem").IsNever<import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_30 ? T_30 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_30 extends object ? request extends import("viem").ExactPartial<T_30> ? T_30 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_31 ? T_31 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_31 extends object ? request extends import("viem").ExactPartial<T_31> ? T_31 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never> extends false ? import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_32 ? T_32 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_32 extends object ? request extends import("viem").ExactPartial<T_32> ? T_32 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_33 ? T_33 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_33 extends object ? request extends import("viem").ExactPartial<T_33> ? T_33 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never : request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
        accessList?: undefined | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    }) ? "eip1559" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: undefined | undefined;
        maxPriorityFeePerGas?: undefined | undefined;
    } & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    } ? "eip2930" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    }) & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
        accessList?: undefined | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    }) ? "eip1559" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: undefined | undefined;
        maxPriorityFeePerGas?: undefined | undefined;
    } & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    } ? "eip2930" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    }) & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_34 ? T_34 extends (request["type"] extends string ? request["type"] : import("viem").IsNever<import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_35 ? T_35 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_35 extends object ? request extends import("viem").ExactPartial<T_35> ? T_35 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_36 ? T_36 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_36 extends object ? request extends import("viem").ExactPartial<T_36> ? T_36 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never> extends false ? import("viem").IsNever<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_37 ? T_37 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_37 extends object ? request extends import("viem").ExactPartial<T_37> ? T_37 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>>> extends true ? Exclude<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> extends infer T_38 ? T_38 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> ? T_38 extends object ? request extends import("viem").ExactPartial<T_38> ? T_38 extends {
        type?: infer type | undefined;
    } ? Extract<type, string> : never : never : never : never : never, NonNullable<"legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined>> : never : request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
        accessList?: undefined | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    }) ? "eip1559" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: undefined | undefined;
        maxPriorityFeePerGas?: undefined | undefined;
    } & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    } ? "eip2930" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    }) & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
        accessList?: undefined | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    }) ? "eip1559" : never) | (request extends {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: undefined | undefined;
        maxPriorityFeePerGas?: undefined | undefined;
    } & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    } ? "eip2930" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined | undefined;
        blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    } | {
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: import("viem").SignedAuthorizationList | undefined;
        blobs?: undefined | undefined;
        blobVersionedHashes?: undefined | undefined;
        gasPrice?: undefined | undefined;
        maxFeePerBlobGas?: undefined | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined | undefined;
    }) & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_34 extends string ? T_34 : undefined : never : never) | undefined>>> & {
        chainId?: number | undefined;
    }, (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "fees" | "gas" | "nonce" | "blobVersionedHashes" | "chainId" | "type") extends infer T_39 ? T_39 extends (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "fees" | "gas" | "nonce" | "blobVersionedHashes" | "chainId" | "type") ? T_39 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_39 : never : never> & (unknown extends request["kzg"] ? {} : Pick<request, "kzg">) & {
        _capabilities?: {
            [x: string]: any;
        } | undefined;
    } extends infer T ? { [K in keyof T]: T[K]; } : never>;
    readContract: <const abi extends import("viem").Abi | readonly unknown[], functionName extends import("viem").ContractFunctionName<abi, "pure" | "view">, const args extends import("viem").ContractFunctionArgs<abi, "pure" | "view", functionName>>(args: import("viem").ReadContractParameters<abi, functionName, args>) => Promise<import("viem").ReadContractReturnType<abi, functionName, args>>;
    sendRawTransaction: (args: import("viem").SendRawTransactionParameters) => Promise<import("viem").SendRawTransactionReturnType>;
    sendRawTransactionSync: (args: import("viem").SendRawTransactionSyncParameters) => Promise<import("viem").TransactionReceipt>;
    simulate: <const calls extends readonly unknown[]>(args: import("viem").SimulateBlocksParameters<calls>) => Promise<import("viem").SimulateBlocksReturnType<calls>>;
    simulateBlocks: <const calls extends readonly unknown[]>(args: import("viem").SimulateBlocksParameters<calls>) => Promise<import("viem").SimulateBlocksReturnType<calls>>;
    simulateCalls: <const calls extends readonly unknown[]>(args: import("viem").SimulateCallsParameters<calls>) => Promise<import("viem").SimulateCallsReturnType<calls>>;
    simulateContract: <const abi extends import("viem").Abi | readonly unknown[], functionName extends import("viem").ContractFunctionName<abi, "nonpayable" | "payable">, const args_1 extends import("viem").ContractFunctionArgs<abi, "nonpayable" | "payable", functionName>, chainOverride extends import("viem").Chain | undefined, accountOverride extends import("viem").Account | Address | undefined = undefined>(args: import("viem").SimulateContractParameters<abi, functionName, args_1, {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, chainOverride, accountOverride>) => Promise<import("viem").SimulateContractReturnType<abi, functionName, args_1, {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, import("viem").Account | undefined, chainOverride, accountOverride>>;
    verifyHash: (args: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>;
    verifyMessage: (args: import("viem").VerifyMessageActionParameters) => Promise<import("viem").VerifyMessageActionReturnType>;
    verifySiweMessage: (args: {
        blockNumber?: bigint | undefined | undefined;
        blockTag?: import("viem").BlockTag | undefined;
        address?: `0x${string}` | undefined;
        nonce?: string | undefined | undefined;
        domain?: string | undefined | undefined;
        scheme?: string | undefined | undefined;
        time?: Date | undefined;
        message: string;
        signature: import("viem").Hex;
    }) => Promise<boolean>;
    verifyTypedData: (args: import("viem").VerifyTypedDataActionParameters) => Promise<import("viem").VerifyTypedDataActionReturnType>;
    uninstallFilter: (args: import("viem").UninstallFilterParameters) => Promise<import("viem").UninstallFilterReturnType>;
    waitForTransactionReceipt: (args: import("viem").WaitForTransactionReceiptParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }>) => Promise<import("viem").TransactionReceipt>;
    watchBlockNumber: (args: import("viem").WatchBlockNumberParameters) => import("viem").WatchBlockNumberReturnType;
    watchBlocks: <includeTransactions extends boolean = false, blockTag extends import("viem").BlockTag = "latest">(args: import("viem").WatchBlocksParameters<import("viem").HttpTransport<undefined, false>, {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, includeTransactions, blockTag>) => import("viem").WatchBlocksReturnType;
    watchContractEvent: <const abi extends import("viem").Abi | readonly unknown[], eventName extends import("viem").ContractEventName<abi>, strict extends boolean | undefined = undefined>(args: import("viem").WatchContractEventParameters<abi, eventName, strict, import("viem").HttpTransport<undefined, false>>) => import("viem").WatchContractEventReturnType;
    watchEvent: <const abiEvent extends import("viem").AbiEvent | undefined = undefined, const abiEvents extends readonly import("viem").AbiEvent[] | readonly unknown[] | undefined = abiEvent extends import("viem").AbiEvent ? [abiEvent] : undefined, strict extends boolean | undefined = undefined>(args: import("viem").WatchEventParameters<abiEvent, abiEvents, strict, import("viem").HttpTransport<undefined, false>>) => import("viem").WatchEventReturnType;
    watchPendingTransactions: (args: import("viem").WatchPendingTransactionsParameters<import("viem").HttpTransport<undefined, false>>) => import("viem").WatchPendingTransactionsReturnType;
    extend: <const client extends {
        [x: string]: unknown;
        account?: undefined;
        batch?: undefined;
        cacheTime?: undefined;
        ccipRead?: undefined;
        chain?: undefined;
        dataSuffix?: undefined;
        experimental_blockTag?: undefined;
        key?: undefined;
        name?: undefined;
        pollingInterval?: undefined;
        request?: undefined;
        transport?: undefined;
        type?: undefined;
        uid?: undefined;
    } & import("viem").ExactPartial<Pick<import("viem").PublicActions<import("viem").HttpTransport<undefined, false>, {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, undefined>, "prepareTransactionRequest" | "call" | "createContractEventFilter" | "createEventFilter" | "estimateContractGas" | "estimateGas" | "getBlock" | "getBlockNumber" | "getChainId" | "getContractEvents" | "getEnsText" | "getFilterChanges" | "getGasPrice" | "getLogs" | "getTransaction" | "getTransactionCount" | "getTransactionReceipt" | "readContract" | "sendRawTransaction" | "simulateContract" | "uninstallFilter" | "watchBlockNumber" | "watchContractEvent"> & Pick<import("viem").WalletActions<{
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, undefined>, "sendTransaction" | "writeContract">>>(fn: (client: import("viem").Client<import("viem").HttpTransport<undefined, false>, {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, undefined, import("viem").PublicRpcSchema, import("viem").PublicActions<import("viem").HttpTransport<undefined, false>, {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }>>) => client) => import("viem").Client<import("viem").HttpTransport<undefined, false>, {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }, undefined, import("viem").PublicRpcSchema, { [K in keyof client]: client[K]; } & import("viem").PublicActions<import("viem").HttpTransport<undefined, false>, {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://bscscan.com";
                readonly apiUrl: "https://api.bscscan.com/api";
            };
        };
        blockTime: 750;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 15921452;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 56;
        name: "BNB Smart Chain";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "BNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://56.rpc.thirdweb.com"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet?: boolean | undefined | undefined;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    } | {
        blockExplorers: {
            readonly default: {
                readonly name: "BscScan";
                readonly url: "https://testnet.bscscan.com";
                readonly apiUrl: "https://api-testnet.bscscan.com/api";
            };
        };
        blockTime?: number | undefined | undefined;
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 17422483;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 97;
        name: "BNB Smart Chain Testnet";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "BNB";
            readonly symbol: "tBNB";
        };
        experimental_preconfirmationTime?: number | undefined | undefined;
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        extendSchema?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
            client: import("viem").Client;
            phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
        }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
            runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
        }] | undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
    }>>;
};
export interface OnchainOracleRecord {
    verdict: number;
    cautionFlags: number;
    drawdownBps: number;
    atrMultiple10: number;
    rsi: number;
    spreadBps: number;
    timestamp: number;
    blockNumber: bigint;
    reason: string;
}
export declare function readLatestOracleRecord(asset: Address): Promise<OnchainOracleRecord | null>;
export declare function isAssetHalted(asset: Address): Promise<boolean>;
export declare function getCompetitionPnl(): Promise<bigint>;
//# sourceMappingURL=onchain.d.ts.map