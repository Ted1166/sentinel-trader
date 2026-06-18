// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "forge-std/Test.sol";
import "../src/TradeLogger.sol";

contract TradeLoggerTest is Test {
    TradeLogger logger;

    address loggerAddr = makeAddr("logger");
    address stranger = makeAddr("stranger");
    address CAKE = makeAddr("CAKE");
    address LINK = makeAddr("LINK");

    uint32 constant COMP_START = 1750550400;
    uint32 constant COMP_END = 1751155200;

    function setUp() public {
        logger = new TradeLogger(loggerAddr, COMP_START, COMP_END);
        vm.warp(COMP_START + 1 hours);
    }

    function test_onlyLoggerCanOpenTrade() public {
        vm.prank(stranger);
        vm.expectRevert(TradeLogger.NotLogger.selector);
        logger.openTrade(CAKE, TradeLogger.Direction.BUY, 1e18, 100e18, 80, 0, bytes32(0), "fear-greed", "F&G < 20");
    }

    function test_onlyLoggerCanCloseTrade() public {
        vm.prank(loggerAddr);
        uint64 id = logger.openTrade(CAKE, TradeLogger.Direction.BUY, 1e18, 100e18, 80, 0, bytes32("0xabc"), "fear-greed", "F&G < 20");

        vm.prank(stranger);
        vm.expectRevert(TradeLogger.NotLogger.selector);
        logger.closeTrade(id, 11e17, bytes32("0xdef"), false);
    }

    function test_openTradeIncrementsId() public {
        vm.startPrank(loggerAddr);
        uint64 id1 = logger.openTrade(CAKE, TradeLogger.Direction.BUY,  1e18, 100e18, 80, 0, bytes32(0), "momentum", "rsi breakout");
        uint64 id2 = logger.openTrade(LINK, TradeLogger.Direction.SELL, 2e18, 200e18, 70, 1, bytes32(0), "sentiment", "social diverge");
        vm.stopPrank();

        assertEq(id1, 1);
        assertEq(id2, 2);
        assertEq(logger.totalTrades(), 2);
    }

    function test_openTradeStoresFields() public {
        bytes32 txHash = keccak256("entry-tx");

        vm.prank(loggerAddr);
        uint64 id = logger.openTrade(
            CAKE,
            TradeLogger.Direction.BUY,
            1_500_000_000_000_000_000,
            500_000_000_000_000_000_000,
            85,
            0,
            txHash,
            "fear-greed-rotation",
            "Fear below 20, funding negative"
        );

        TradeLogger.Trade memory t = logger.getTrade(id);
        assertEq(t.asset, CAKE);
        assertEq(uint8(t.direction), uint8(TradeLogger.Direction.BUY));
        assertEq(uint8(t.status), uint8(TradeLogger.TradeStatus.OPEN));
        assertEq(t.entryPrice, 1_500_000_000_000_000_000);
        assertEq(t.sizeUsd, 500_000_000_000_000_000_000);
        assertEq(t.confidence, 85);
        assertEq(t.entryTxHash, txHash);
        assertEq(t.strategyTag, "fear-greed-rotation");
        assertEq(t.exitPrice, 0);
        assertEq(t.exitTimestamp, 0);
    }

    function test_closeLongProfitable() public {
        vm.startPrank(loggerAddr);
        uint64 id = logger.openTrade(CAKE, TradeLogger.Direction.BUY, 1e18, 100e18, 80, 0, bytes32(0), "test", "");
        logger.closeTrade(id, 11e17, bytes32("exit"), false);
        vm.stopPrank();

        TradeLogger.Trade memory t = logger.getTrade(id);
        assertEq(uint8(t.status), uint8(TradeLogger.TradeStatus.CLOSED));
        assertEq(t.exitPrice, 11e17);
        assertEq(t.pnlBps, 1000);
    }

    function test_closeLongAtLoss() public {
        vm.startPrank(loggerAddr);
        uint64 id = logger.openTrade(CAKE, TradeLogger.Direction.BUY, 1e18, 100e18, 80, 0, bytes32(0), "test", "");
        logger.closeTrade(id, 9e17, bytes32("exit"), false); // 10% loss
        vm.stopPrank();

        TradeLogger.Trade memory t = logger.getTrade(id);
        assertEq(t.pnlBps, -1000);
    }

    function test_closeShortProfitable() public {
        vm.startPrank(loggerAddr);
        uint64 id = logger.openTrade(CAKE, TradeLogger.Direction.SELL, 2e18, 100e18, 75, 0, bytes32(0), "test", "");
        logger.closeTrade(id, 18e17, bytes32("exit"), false);
        vm.stopPrank();

        TradeLogger.Trade memory t = logger.getTrade(id);
        assertEq(t.pnlBps, 1000);
    }

    function test_stoppedOutStatus() public {
        vm.startPrank(loggerAddr);
        uint64 id = logger.openTrade(CAKE, TradeLogger.Direction.BUY, 1e18, 100e18, 80, 0, bytes32(0), "test", "");
        logger.closeTrade(id, 88e16, bytes32("stop"), true);
        vm.stopPrank();

        TradeLogger.Trade memory t = logger.getTrade(id);
        assertEq(uint8(t.status), uint8(TradeLogger.TradeStatus.STOPPED));
    }

    function test_cannotCloseAlreadyClosed() public {
        vm.startPrank(loggerAddr);
        uint64 id = logger.openTrade(CAKE, TradeLogger.Direction.BUY, 1e18, 100e18, 80, 0, bytes32(0), "test", "");
        logger.closeTrade(id, 11e17, bytes32("exit"), false);

        vm.expectRevert(abi.encodeWithSelector(TradeLogger.TradeAlreadyClosed.selector, id));
        logger.closeTrade(id, 12e17, bytes32("exit2"), false);
        vm.stopPrank();
    }

    function test_getTradeRevertsOnMissing() public {
        vm.expectRevert(abi.encodeWithSelector(TradeLogger.TradeNotFound.selector, 999));
        logger.getTrade(999);
    }

    function test_competitionPnlBps() public {
        vm.startPrank(loggerAddr);
        uint64 id1 = logger.openTrade(CAKE, TradeLogger.Direction.BUY, 1e18, 100e18, 80, 0, bytes32(0), "t1", "");
        logger.closeTrade(id1, 11e17, bytes32("e1"), false);

        uint64 id2 = logger.openTrade(LINK, TradeLogger.Direction.BUY, 2e18, 100e18, 70, 0, bytes32(0), "t2", "");
        logger.closeTrade(id2, 19e17, bytes32("e2"), false);
        vm.stopPrank();

        int256 pnl = logger.competitionPnlBps();
        assertEq(pnl, 500);
    }

    function test_tradesInWindowCount() public {
        vm.startPrank(loggerAddr);
        logger.openTrade(CAKE, TradeLogger.Direction.BUY, 1e18, 100e18, 80, 0, bytes32(0), "t1", "");
        logger.openTrade(LINK, TradeLogger.Direction.BUY, 1e18, 100e18, 80, 0, bytes32(0), "t2", "");
        vm.stopPrank();

        uint256 count = logger.tradesInWindow(COMP_START, COMP_END);
        assertEq(count, 2);
    }

    function test_tradesOutsideWindowNotCounted() public {
        vm.warp(COMP_END + 1 days);

        vm.prank(loggerAddr);
        logger.openTrade(CAKE, TradeLogger.Direction.BUY, 1e18, 100e18, 80, 0, bytes32(0), "t1", "");

        uint256 count = logger.tradesInWindow(COMP_START, COMP_END);
        assertEq(count, 0);
    }

    function test_getTradesByAsset() public {
        vm.startPrank(loggerAddr);
        logger.openTrade(CAKE, TradeLogger.Direction.BUY, 1e18, 100e18, 80, 0, bytes32(0), "t1", "");
        logger.openTrade(LINK, TradeLogger.Direction.BUY, 2e18, 200e18, 70, 0, bytes32(0), "t2", "");
        logger.openTrade(CAKE, TradeLogger.Direction.SELL, 1e18, 100e18, 60, 0, bytes32(0), "t3", "");
        vm.stopPrank();

        uint64[] memory cakeTrades = logger.getTradesByAsset(CAKE);
        assertEq(cakeTrades.length, 2);

        uint64[] memory linkTrades = logger.getTradesByAsset(LINK);
        assertEq(linkTrades.length, 1);
    }

    function test_twoStepLoggerTransfer() public {
        address newLogger = makeAddr("newLogger");

        vm.prank(loggerAddr);
        logger.initiateLoggerTransfer(newLogger);

        vm.prank(newLogger);
        logger.acceptLoggerTransfer();

        assertEq(logger.logger(), newLogger);

        vm.prank(loggerAddr);
        vm.expectRevert(TradeLogger.NotLogger.selector);
        logger.openTrade(CAKE, TradeLogger.Direction.BUY, 1e18, 100e18, 80, 0, bytes32(0), "fail", "");
    }
}
