// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "forge-std/Test.sol";
import "../src/RiskGuardOracle.sol";

contract RiskGuardOracleTest is Test {
    RiskGuardOracle oracle;

    address guardian = makeAddr("guardian");
    address stranger = makeAddr("stranger");
    address asset = makeAddr("CAKE");

    function setUp() public {
        oracle = new RiskGuardOracle(guardian);
    }

    function test_onlyGuardianCanWrite() public {
        vm.prank(stranger);
        vm.expectRevert(RiskGuardOracle.NotGuardian.selector);
        oracle.recordVerdict(asset, RiskGuardOracle.Verdict.CLEAR, 0, 0, 0, 50, 0, "ok");
    }

    function test_constructorRejectsZeroAddress() public {
        vm.expectRevert(RiskGuardOracle.ZeroAddress.selector);
        new RiskGuardOracle(address(0));
    }

    function test_recordAndReadLatest() public {
        vm.prank(guardian);
        oracle.recordVerdict(
            asset,
            RiskGuardOracle.Verdict.CAUTION,
            uint8(4),
            -250,
            15,
            74,
            30,
            "rsi overbought"
        );

        RiskGuardOracle.GuardRecord memory r = oracle.latestRecord(asset);
        assertEq(uint8(r.verdict), uint8(RiskGuardOracle.Verdict.CAUTION));
        assertEq(r.cautionFlags, uint8(4));
        assertEq(r.drawdownBps, -250);
        assertEq(r.rsi, 74);
        assertEq(r.spreadBps, 30);
        assertEq(oracle.totalRecords(asset), 1);
    }

    function test_latestRecordOnEmptyReturnsZeroStruct() public view {
        RiskGuardOracle.GuardRecord memory r = oracle.latestRecord(asset);
        assertEq(uint8(r.verdict), uint8(RiskGuardOracle.Verdict.CLEAR));
        assertEq(r.rsi, 0);
    }

    function test_haltTriggeredAndCleared() public {
        assertFalse(oracle.isHalted(asset));

        vm.prank(guardian);
        vm.expectEmit(true, true, false, true);
        emit RiskGuardOracle.HaltTriggered(asset, -1300, 25, uint32(block.timestamp), "drawdown halt");
        oracle.recordVerdict(asset, RiskGuardOracle.Verdict.HALT, uint8(1), -1300, 30, 25, 120, "drawdown halt");

        assertTrue(oracle.isHalted(asset));

        vm.prank(guardian);
        vm.expectEmit(true, false, false, false);
        emit RiskGuardOracle.HaltCleared(asset, uint32(block.timestamp));
        oracle.recordVerdict(asset, RiskGuardOracle.Verdict.CLEAR, 0, -50, 10, 50, 20, "recovered");

        assertFalse(oracle.isHalted(asset));
    }

    function test_haltEventNotDuplicatedOnConsecutiveHalts() public {
        vm.startPrank(guardian);
        oracle.recordVerdict(asset, RiskGuardOracle.Verdict.HALT, 0, -1400, 30, 20, 200, "halt 1");
        oracle.recordVerdict(asset, RiskGuardOracle.Verdict.HALT, 0, -1500, 32, 18, 210, "halt 2");
        vm.stopPrank();

        assertTrue(oracle.isHalted(asset));
    }

    function test_ringBufferWrapsAt50() public {
        vm.startPrank(guardian);
        for (uint256 i = 0; i < 55; i++) {
            oracle.recordVerdict(asset, RiskGuardOracle.Verdict.CLEAR, 0, 0, 10, 50, 20, "cycle");
        }
        vm.stopPrank();

        assertEq(oracle.totalRecords(asset), 55);

        RiskGuardOracle.GuardRecord[] memory recs = oracle.recentRecords(asset, 60);
        assertEq(recs.length, 50);
    }

    function test_recentRecordsNewestFirst() public {
        vm.startPrank(guardian);
        oracle.recordVerdict(asset, RiskGuardOracle.Verdict.CLEAR, 0, 0, 10, 50, 20, "first");
        oracle.recordVerdict(asset, RiskGuardOracle.Verdict.CAUTION, 0, 0, 15, 65, 40, "second");
        oracle.recordVerdict(asset, RiskGuardOracle.Verdict.HALT, 0, -1300, 30, 20, 110, "third");
        vm.stopPrank();

        RiskGuardOracle.GuardRecord[] memory recs = oracle.recentRecords(asset, 3);
        assertEq(uint8(recs[0].verdict), uint8(RiskGuardOracle.Verdict.HALT));
        assertEq(uint8(recs[1].verdict), uint8(RiskGuardOracle.Verdict.CAUTION));
        assertEq(uint8(recs[2].verdict), uint8(RiskGuardOracle.Verdict.CLEAR));
    }

    function test_twoStepGuardianTransfer() public {
        address newGuardian = makeAddr("newGuardian");

        vm.prank(guardian);
        oracle.initiateGuardianTransfer(newGuardian);
        assertEq(oracle.pendingGuardian(), newGuardian);

        vm.prank(guardian);
        oracle.recordVerdict(asset, RiskGuardOracle.Verdict.CLEAR, 0, 0, 10, 50, 20, "ok");

        vm.prank(newGuardian);
        oracle.acceptGuardianTransfer();

        assertEq(oracle.guardian(), newGuardian);
        assertEq(oracle.pendingGuardian(), address(0));

        vm.prank(guardian);
        vm.expectRevert(RiskGuardOracle.NotGuardian.selector);
        oracle.recordVerdict(asset, RiskGuardOracle.Verdict.CLEAR, 0, 0, 10, 50, 20, "fail");
    }

    function test_acceptTransferRevertsIfNotPending() public {
        vm.prank(stranger);
        vm.expectRevert(RiskGuardOracle.NotPendingGuardian.selector);
        oracle.acceptGuardianTransfer();
    }
}
