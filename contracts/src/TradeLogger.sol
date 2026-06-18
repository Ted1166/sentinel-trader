// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract TradeLogger {
    enum Direction { BUY, SELL }
    enum TradeStatus {
        OPEN,
        CLOSED,
        STOPPED
    }

    struct Trade {
        uint64 id;
        address asset;
        Direction direction;
        TradeStatus status;

        uint128 entryPrice;
        uint128 exitPrice;
        uint128 sizeUsd;

        int32 pnlBps;
        uint8 confidence;
        uint8 guardVerdict;

        uint32 entryTimestamp;
        uint32 exitTimestamp;
        uint64 entryBlock;
        uint64 exitBlock;

        bytes32 entryTxHash;
        bytes32 exitTxHash;
        string strategyTag;
        string reason;
    }

    address public logger;
    address public pendingLogger;

    uint64 private _nextId;

    mapping(uint64 => Trade) private _trades;
    mapping(address => uint64[]) private _tradesByAsset;
    uint64[] private _allIds;

    uint32 public competitionStart;
    uint32 public competitionEnd;

    event TradeOpened(
        uint64 indexed id,
        address indexed asset,
        Direction direction,
        uint128 entryPrice,
        uint128 sizeUsd,
        uint8 confidence,
        string strategyTag,
        string reason
    );

    event TradeClosed(
        uint64 indexed id,
        address indexed asset,
        uint128 exitPrice,
        int32 pnlBps,
        TradeStatus status
    );

    event LoggerTransferInitiated(address indexed current, address indexed pending);
    event LoggerTransferred(address indexed oldLogger, address indexed newLogger);

    error NotLogger();
    error NotPendingLogger();
    error ZeroAddress();
    error TradeNotFound(uint64 id);
    error TradeAlreadyClosed(uint64 id);
    error TradeNotOpen(uint64 id);

    constructor(address _logger, uint32 _compStart, uint32 _compEnd) {
        if (_logger == address(0)) revert ZeroAddress();
        logger = _logger;
        competitionStart = _compStart;
        competitionEnd = _compEnd;
        _nextId = 1;
    }

    modifier onlyLogger() {
        if (msg.sender != logger) revert NotLogger();
        _;
    }

    function openTrade(
        address asset,
        Direction direction,
        uint128 entryPrice,
        uint128 sizeUsd,
        uint8 confidence,
        uint8 guardVerdict,
        bytes32 entryTxHash,
        string calldata strategyTag,
        string calldata reason
    ) external onlyLogger returns (uint64 id) {
        id = _nextId++;

        _trades[id] = Trade({
            id: id,
            asset: asset,
            direction: direction,
            status: TradeStatus.OPEN,
            entryPrice: entryPrice,
            exitPrice: 0,
            sizeUsd: sizeUsd,
            pnlBps: 0,
            confidence: confidence,
            guardVerdict: guardVerdict,
            entryTimestamp: uint32(block.timestamp),
            exitTimestamp: 0,
            entryBlock: uint64(block.number),
            exitBlock: 0,
            entryTxHash: entryTxHash,
            exitTxHash: bytes32(0),
            strategyTag: strategyTag,
            reason: reason
        });

        _tradesByAsset[asset].push(id);
        _allIds.push(id);

        emit TradeOpened(id, asset, direction, entryPrice, sizeUsd, confidence, strategyTag, reason);
    }

    function closeTrade(
        uint64 id,
        uint128 exitPrice,
        bytes32 exitTxHash,
        bool stoppedOut
    ) external onlyLogger {
        Trade storage t = _trades[id];
        if (t.id == 0) revert TradeNotFound(id);
        if (t.status != TradeStatus.OPEN) revert TradeAlreadyClosed(id);

        int32 pnl;
        if (t.entryPrice > 0) {
            int256 raw = (int256(uint256(exitPrice)) - int256(uint256(t.entryPrice)))
                         * 10_000
                         / int256(uint256(t.entryPrice));
            if (t.direction == Direction.SELL) raw = -raw;
            pnl = int32(raw);
        }

        t.exitPrice = exitPrice;
        t.exitTxHash = exitTxHash;
        t.exitTimestamp = uint32(block.timestamp);
        t.exitBlock = uint64(block.number);
        t.pnlBps = pnl;
        t.status = stoppedOut ? TradeStatus.STOPPED : TradeStatus.CLOSED;

        emit TradeClosed(id, t.asset, exitPrice, pnl, t.status);
    }

    function getTrade(uint64 id) external view returns (Trade memory) {
        if (_trades[id].id == 0) revert TradeNotFound(id);
        return _trades[id];
    }

    function getTradesByAsset(address asset) external view returns (uint64[] memory) {
        return _tradesByAsset[asset];
    }

    function getAllTradeIds() external view returns (uint64[] memory) {
        return _allIds;
    }

    function totalTrades() external view returns (uint64) {
        return _nextId - 1;
    }

    function competitionPnlBps() external view returns (int256 total) {
        uint256 len = _allIds.length;
        for (uint256 i = 0; i < len; i++) {
            Trade storage t = _trades[_allIds[i]];
            if (
                t.status != TradeStatus.OPEN &&
                t.entryTimestamp >= competitionStart &&
                t.entryTimestamp <= competitionEnd
            ) {
                total += t.pnlBps;
            }
        }
    }

    function tradesInWindow(uint32 from, uint32 to) external view returns (uint256 count) {
        uint256 len = _allIds.length;
        for (uint256 i = 0; i < len; i++) {
            Trade storage t = _trades[_allIds[i]];
            if (t.entryTimestamp >= from && t.entryTimestamp <= to) {
                count++;
            }
        }
    }

    function initiateLoggerTransfer(address newLogger) external onlyLogger {
        if (newLogger == address(0)) revert ZeroAddress();
        pendingLogger = newLogger;
        emit LoggerTransferInitiated(logger, newLogger);
    }

    function acceptLoggerTransfer() external {
        if (msg.sender != pendingLogger) revert NotPendingLogger();
        emit LoggerTransferred(logger, pendingLogger);
        logger = pendingLogger;
        pendingLogger = address(0);
    }
}