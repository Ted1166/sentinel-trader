import { useAccount, useConnect, useDisconnect, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { injected } from "wagmi/connectors";
import { type Address } from "viem";
import { CONTRACTS, GUARDIAN_VAULT_ABI } from "../config/contracts";

export function useWallet() {
    const { address, isConnected, isConnecting } = useAccount();
    const { connect } = useConnect();
    const { disconnect } = useDisconnect();

    const connectWallet = () => connect({ connector: injected() });

    return { address, isConnected, isConnecting, connectWallet, disconnect };
}

export function useIsProtected(address?: Address) {
    const { data, isLoading, refetch } = useReadContract({
        address: CONTRACTS.guardianVault,
        abi: GUARDIAN_VAULT_ABI,
        functionName: "isProtected",
        args: address ? [address] : undefined,
        query: { enabled: !!address && !!CONTRACTS.guardianVault },
    });

    return { isProtected: !!data, isLoading, refetch };
}

export function useVaultBalance(user?: Address, token?: Address) {
    const { data, isLoading, refetch } = useReadContract({
        address: CONTRACTS.guardianVault,
        abi: GUARDIAN_VAULT_ABI,
        functionName: "getBalance",
        args: user && token ? [user, token] : undefined,
        query: { enabled: !!user && !!token && !!CONTRACTS.guardianVault },
    });

    return {
        balance: data
            ? {
                amount: Number(data.amount) / 1e18,
                protectedAt: Number(data.protectedAt),
                reason: data.reason,
            }
            : null,
        isLoading,
        refetch,
    };
}

export function useToggleProtection() {
    const { writeContract, data: hash, isPending, error } = useWriteContract();
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

    const enableProtection = () =>
        writeContract({
            address: CONTRACTS.guardianVault,
            abi: GUARDIAN_VAULT_ABI,
            functionName: "enableProtection",
        });

    const disableProtection = () =>
        writeContract({
            address: CONTRACTS.guardianVault,
            abi: GUARDIAN_VAULT_ABI,
            functionName: "disableProtection",
        });

    return { enableProtection, disableProtection, hash, isPending, isConfirming, isSuccess, error };
}

export function useWithdraw() {
    const { writeContract, data: hash, isPending, error } = useWriteContract();
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

    const withdraw = (token: Address) =>
        writeContract({
            address: CONTRACTS.guardianVault,
            abi: GUARDIAN_VAULT_ABI,
            functionName: "withdraw",
            args: [token],
        });

    return { withdraw, hash, isPending, isConfirming, isSuccess, error };
}