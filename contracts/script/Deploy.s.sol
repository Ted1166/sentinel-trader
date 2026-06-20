// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "forge-std/Script.sol";
import "../src/RiskGuardOracle.sol";
import "../src/TradeLogger.sol";
import "../src/GuardianVault.sol";
import "../src/CompetitionRegistry.sol";

contract DeployScript is Script {

    uint32 constant DEFAULT_COMP_START = 1750550400;
    uint32 constant DEFAULT_COMP_END = 1751155140;

    function run() external {
        uint256 deployerKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        address agentWallet = vm.envAddress("AGENT_WALLET");
        address loggerWallet = vm.envAddress("LOGGER_WALLET");

        uint32 compStart = uint32(vm.envOr("COMP_START", uint256(DEFAULT_COMP_START)));
        uint32 compEnd = uint32(vm.envOr("COMP_END", uint256(DEFAULT_COMP_END)));

        string memory strategyName = vm.envOr("STRATEGY_NAME", string("SentinelTrader v1"));
        string memory strategyDesc = vm.envOr(
            "STRATEGY_DESC",
            string("Autonomous trading agent: CMC Fear&Greed + funding rate rotation on BSC with 5-guard risk engine")
        );

        vm.startBroadcast(deployerKey);

        RiskGuardOracle oracle = new RiskGuardOracle(loggerWallet);
        console2.log("RiskGuardOracle  :", address(oracle));

        TradeLogger tradeLogger = new TradeLogger(loggerWallet, compStart, compEnd);
        console2.log("TradeLogger:", address(tradeLogger));

        GuardianVault vault = new GuardianVault(loggerWallet, address(oracle));
        console2.log("GuardianVault:", address(vault));

        CompetitionRegistry registry = new CompetitionRegistry(
            agentWallet,
            address(tradeLogger),
            address(oracle),
            strategyName,
            strategyDesc
        );
        console2.log("CompetitionRegistry:", address(registry));

        vm.stopBroadcast();

        console2.log("\n--- Copy into agent/.env ---");
        console2.log("RISK_GUARD_ORACLE_ADDRESS=%s", address(oracle));
        console2.log("TRADE_LOGGER_ADDRESS=%s", address(tradeLogger));
        console2.log("GUARDIAN_VAULT_ADDRESS=%s", address(vault));
        console2.log("COMPETITION_REGISTRY_ADDRESS=%s", address(registry));
        console2.log("AGENT_WALLET=%s", agentWallet);
        console2.log("LOGGER_WALLET=%s", loggerWallet);
        console2.log("# Set LOGGER_PRIVATE_KEY and GUARDIAN_PRIVATE_KEY in agent/.env");
        console2.log("# to the private key for LOGGER_WALLET shown above (same key, two names).");
    }
}
