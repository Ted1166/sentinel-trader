import { createConfig, http } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { CHAIN_ID, BSC_RPC_URL } from "./contracts";

const chain = CHAIN_ID === 56 ? bsc : bscTestnet;

export const wagmiConfig = createConfig({
    chains: [chain],
    connectors: [injected()],
    transports: {
        [bsc.id]: http(BSC_RPC_URL),
        [bscTestnet.id]: http(BSC_RPC_URL),
    },
});

export const activeChain = chain;