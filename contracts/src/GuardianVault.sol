// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

interface IRiskGuardOracle {
    function isHalted(address asset) external view returns (bool);
}

contract GuardianVault is ReentrancyGuard {
    using SafeERC20 for IERC20;

    struct VaultBalance {
        uint128 amount;
        uint32 protectedAt;
        string reason;
    }

    struct BatchProtectParams {
        address user;
        address token;
        uint128 amount;
    }

    address public guardian;
    address public pendingGuardian;
    IRiskGuardOracle public oracle;

    mapping(address => mapping(address => VaultBalance)) private _balances;

    mapping(address => bool) public protectionEnabled;

    mapping(address => uint32) public lastProtected;

    uint32 public constant COOLDOWN = 5 minutes;

    event ProtectionEnabled(address indexed user);
    event ProtectionDisabled(address indexed user);
    event TokensProtected(
        address indexed user,
        address indexed token,
        uint128 amount,
        string reason
    );
    event TokensWithdrawn(
        address indexed user,
        address indexed token,
        uint128 amount
    );
    event OracleUpdated(address indexed newOracle);
    event GuardianTransferInitiated(address indexed current, address indexed pending);
    event GuardianTransferred(address indexed oldGuardian, address indexed newGuardian);

    error NotGuardian();
    error NotPendingGuardian();
    error ZeroAddress();
    error ZeroAmount();
    error ProtectionNotEnabled(address user);
    error CooldownActive(address user, uint32 unlockAt);
    error InsufficientBalance(address user, address token);
    error AssetNotHalted(address asset);

    constructor(address _guardian, address _oracle) {
        if (_guardian == address(0)) revert ZeroAddress();
        if (_oracle == address(0))   revert ZeroAddress();
        guardian = _guardian;
        oracle   = IRiskGuardOracle(_oracle);
    }

    modifier onlyGuardian() {
        if (msg.sender != guardian) revert NotGuardian();
        _;
    }

    function enableProtection() external {
        protectionEnabled[msg.sender] = true;
        emit ProtectionEnabled(msg.sender);
    }

    function disableProtection() external {
        protectionEnabled[msg.sender] = false;
        emit ProtectionDisabled(msg.sender);
    }

    function withdraw(address token) external nonReentrant {
        VaultBalance storage bal = _balances[msg.sender][token];
        uint128 amount = bal.amount;
        if (amount == 0) revert InsufficientBalance(msg.sender, token);

        bal.amount = 0;
        bal.protectedAt = 0;
        bal.reason = "";

        IERC20(token).safeTransfer(msg.sender, amount);
        emit TokensWithdrawn(msg.sender, token, amount);
    }

    function withdrawAmount(address token, uint128 amount) external nonReentrant {
        if (amount == 0) revert ZeroAmount();
        VaultBalance storage bal = _balances[msg.sender][token];
        if (bal.amount < amount) revert InsufficientBalance(msg.sender, token);

        bal.amount -= amount;

        IERC20(token).safeTransfer(msg.sender, amount);
        emit TokensWithdrawn(msg.sender, token, amount);
    }

    function protectTokens(
        address user,
        address token,
        uint128 amount,
        string calldata reason
    ) external onlyGuardian nonReentrant {
        if (!protectionEnabled[user]) revert ProtectionNotEnabled(user);
        if (amount == 0) revert ZeroAmount();
        if (!oracle.isHalted(token)) revert AssetNotHalted(token);

        uint32 unlockAt = lastProtected[user] + COOLDOWN;
        if (block.timestamp < unlockAt)   revert CooldownActive(user, unlockAt);

        lastProtected[user] = uint32(block.timestamp);

        IERC20(token).safeTransferFrom(user, address(this), amount);

        VaultBalance storage bal = _balances[user][token];
        bal.amount += amount;
        bal.protectedAt = uint32(block.timestamp);
        bal.reason = reason;

        emit TokensProtected(user, token, amount, reason);
    }

    function batchProtectTokens(
        BatchProtectParams[] calldata params,
        string calldata reason
    ) external onlyGuardian nonReentrant {
        uint256 len = params.length;
        for (uint256 i = 0; i < len; i++) {
            BatchProtectParams calldata p = params[i];
            if (!protectionEnabled[p.user]) continue;
            if (p.amount == 0) continue;
            if (!oracle.isHalted(p.token)) continue;

            uint32 unlockAt = lastProtected[p.user] + COOLDOWN;
            if (block.timestamp < unlockAt) continue;

            lastProtected[p.user] = uint32(block.timestamp);

            IERC20(p.token).safeTransferFrom(p.user, address(this), p.amount);

            VaultBalance storage bal = _balances[p.user][p.token];
            bal.amount += p.amount;
            bal.protectedAt = uint32(block.timestamp);
            bal.reason = reason;

            emit TokensProtected(p.user, p.token, p.amount, reason);
        }
    }

    function getBalance(address user, address token)
        external
        view
        returns (VaultBalance memory)
    {
        return _balances[user][token];
    }

    function isProtected(address user) external view returns (bool) {
        return protectionEnabled[user];
    }

    function updateOracle(address _oracle) external onlyGuardian {
        if (_oracle == address(0)) revert ZeroAddress();
        oracle = IRiskGuardOracle(_oracle);
        emit OracleUpdated(_oracle);
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