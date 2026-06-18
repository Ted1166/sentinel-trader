// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract RiskGuardOracle {
    enum Verdict { CLEAR, CAUTION, HALT }

    uint8 public constant FLAG_DRAWDOWN = 1 << 0;
    uint8 public constant FLAG_VOLATILITY = 1 << 1;
    uint8 public constant FLAG_RSI = 1 << 2;
    uint8 public constant FLAG_SPREAD = 1 << 3;
    uint8 public constant FLAG_COOLDOWN = 1 << 4;

    struct GuardRecord {
        Verdict verdict;
        uint8 cautionFlags;
        int16 drawdownBps;
        uint16 atrMultiple10;
        uint8 rsi;
        uint16 spreadBps;
        uint32 timestamp;
        uint64 blockNumber;
        string reason;
    }

    uint256 public constant RING_SIZE = 50;

    address public guardian;
    address public pendingGuardian;

    mapping(address => GuardRecord[RING_SIZE]) private _records;
    mapping(address => uint256) private _head;
    mapping(address => uint256) private _totalRecords;
    mapping(address => bool) private _halted;

    event VerdictRecorded(
        address indexed asset,
        Verdict indexed verdict,
        uint8 cautionFlags,
        int16 drawdownBps,
        uint8 rsi,
        uint32 timestamp,
        string reason
    );

    event HaltTriggered(
        address indexed asset,
        int16 drawdownBps,
        uint8 rsi,
        uint32 timestamp,
        string reason
    );

    event HaltCleared(address indexed asset, uint32 timestamp);

    event GuardianTransferInitiated(address indexed current, address indexed pending);
    event GuardianTransferred(address indexed oldGuardian, address indexed newGuardian);

    error NotGuardian();
    error NotPendingGuardian();
    error ZeroAddress();

    constructor(address _guardian) {
        if (_guardian == address(0)) revert ZeroAddress();
        guardian = _guardian;
    }

    modifier onlyGuardian() {
        if (msg.sender != guardian) revert NotGuardian();
        _;
    }

    function recordVerdict(
        address asset,
        Verdict verdict,
        uint8 cautionFlags,
        int16 drawdownBps,
        uint16 atrMultiple10,
        uint8 rsi,
        uint16 spreadBps,
        string calldata reason
    ) external onlyGuardian {
        uint256 idx = _head[asset];

        _records[asset][idx] = GuardRecord({
            verdict: verdict,
            cautionFlags: cautionFlags,
            drawdownBps: drawdownBps,
            atrMultiple10: atrMultiple10,
            rsi: rsi,
            spreadBps: spreadBps,
            timestamp: uint32(block.timestamp),
            blockNumber: uint64(block.number),
            reason: reason
        });

        _head[asset] = (idx + 1) % RING_SIZE;
        _totalRecords[asset]++;

        bool wasHalted = _halted[asset];
        bool nowHalt = verdict == Verdict.HALT;

        if (nowHalt && !wasHalted) {
            _halted[asset] = true;
            emit HaltTriggered(asset, drawdownBps, rsi, uint32(block.timestamp), reason);
        } else if (!nowHalt && wasHalted) {
            _halted[asset] = false;
            emit HaltCleared(asset, uint32(block.timestamp));
        }

        emit VerdictRecorded(asset, verdict, cautionFlags, drawdownBps, rsi, uint32(block.timestamp), reason);
    }

    function isHalted(address asset) external view returns (bool) {
        return _halted[asset];
    }

    function latestRecord(address asset) external view returns (GuardRecord memory) {
        uint256 total = _totalRecords[asset];
        if (total == 0) {
            return GuardRecord(Verdict.CLEAR, 0, 0, 0, 0, 0, 0, 0, "");
        }
        uint256 latestIdx = (_head[asset] + RING_SIZE - 1) % RING_SIZE;
        return _records[asset][latestIdx];
    }

    function recentRecords(address asset, uint256 count)
        external
        view
        returns (GuardRecord[] memory out)
    {
        uint256 total = _totalRecords[asset];
        uint256 available = total < RING_SIZE ? total : RING_SIZE;
        uint256 n = count < available ? count : available;

        out = new GuardRecord[](n);
        uint256 head = _head[asset];

        for (uint256 i = 0; i < n; i++) {
            uint256 idx = (head + RING_SIZE - 1 - i) % RING_SIZE;
            out[i] = _records[asset][idx];
        }
    }

    function totalRecords(address asset) external view returns (uint256) {
        return _totalRecords[asset];
    }

    function initiateGuardianTransfer(address newGuardian) external onlyGuardian {
        if (newGuardian == address(0)) revert ZeroAddress();
        pendingGuardian = newGuardian;
        emit GuardianTransferInitiated(guardian, newGuardian);
    }

    function acceptGuardianTransfer() external {
        if (msg.sender != pendingGuardian) revert NotPendingGuardian();
        emit GuardianTransferred(guardian, pendingGuardian);
        guardian = pendingGuardian;
        pendingGuardian = address(0);
    }
}