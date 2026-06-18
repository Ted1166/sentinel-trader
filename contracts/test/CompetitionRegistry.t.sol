// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "forge-std/Test.sol";
import "../src/CompetitionRegistry.sol";

contract CompetitionRegistryTest is Test {
    CompetitionRegistry reg;

    address owner = makeAddr("owner");
    address agentWallet = makeAddr("agentWallet");
    address tradeLogger = makeAddr("tradeLogger");
    address oracle = makeAddr("oracle");
    address stranger = makeAddr("stranger");

    function setUp() public {
        vm.prank(owner);
        reg = new CompetitionRegistry(
            agentWallet,
            tradeLogger,
            oracle,
            "SentinelTrader v1",
            "Fear & Greed + funding rate rotation on BSC"
        );
    }

    function test_initialState() public view {
        CompetitionRegistry.AgentConfig memory cfg = reg.getConfig();
        assertEq(cfg.agentWallet, agentWallet);
        assertEq(cfg.tradeLogger, tradeLogger);
        assertEq(cfg.riskGuardOracle, oracle);
        assertEq(cfg.strategyName, "SentinelTrader v1");
        assertTrue(cfg.active);
        assertFalse(reg.registeredOnChain());
    }

    function test_markRegistered() public {
        vm.prank(owner);
        reg.markRegistered();
        assertTrue(reg.registeredOnChain());
    }

    function test_cannotMarkRegisteredTwice() public {
        vm.prank(owner);
        reg.markRegistered();

        vm.prank(owner);
        vm.expectRevert(CompetitionRegistry.AlreadyRegistered.selector);
        reg.markRegistered();
    }

    function test_onlyOwnerCanMark() public {
        vm.prank(stranger);
        vm.expectRevert(CompetitionRegistry.NotOwner.selector);
        reg.markRegistered();
    }

    function test_updateContracts() public {
        address newLogger = makeAddr("newLogger");
        address newOracle = makeAddr("newOracle");

        vm.prank(owner);
        reg.updateContracts(newLogger, newOracle);

        CompetitionRegistry.AgentConfig memory cfg = reg.getConfig();
        assertEq(cfg.tradeLogger, newLogger);
        assertEq(cfg.riskGuardOracle, newOracle);
    }

    function test_deactivate() public {
        assertTrue(reg.isActive());
        vm.prank(owner);
        reg.deactivate();
        assertFalse(reg.isActive());
    }

    function test_constructorRejectsZeroAddresses() public {
        vm.expectRevert(CompetitionRegistry.ZeroAddress.selector);
        new CompetitionRegistry(address(0), tradeLogger, oracle, "S", "D");

        vm.expectRevert(CompetitionRegistry.ZeroAddress.selector);
        new CompetitionRegistry(agentWallet, address(0), oracle, "S", "D");

        vm.expectRevert(CompetitionRegistry.ZeroAddress.selector);
        new CompetitionRegistry(agentWallet, tradeLogger, address(0), "S", "D");
    }
}
