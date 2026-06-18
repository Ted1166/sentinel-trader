// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract CompetitionRegistry {
    struct AgentConfig {
        address agentWallet;
        address tradeLogger;
        address riskGuardOracle;
        string strategyName;
        string strategyDesc;
        uint32 registeredAt;
        bool active;
    }

    address public owner;
    AgentConfig public config;

    address public constant COMPETITION_CONTRACT =
        0x212c61B9B72C95d95BF29CF032F5E5635629Aed5;

    bool public registeredOnChain;

    event AgentRegistered(
        address indexed agentWallet,
        string strategyName,
        uint32 timestamp
    );

    event ConfigUpdated(address indexed updatedBy, uint32 timestamp);

    error NotOwner();
    error ZeroAddress();
    error AlreadyRegistered();

    constructor(
        address _agentWallet,
        address _tradeLogger,
        address _riskGuardOracle,
        string memory _strategyName,
        string memory _strategyDesc
    ) {
        if (_agentWallet == address(0)) revert ZeroAddress();
        if (_tradeLogger == address(0)) revert ZeroAddress();
        if (_riskGuardOracle == address(0)) revert ZeroAddress();

        owner = msg.sender;

        config = AgentConfig({
            agentWallet: _agentWallet,
            tradeLogger: _tradeLogger,
            riskGuardOracle: _riskGuardOracle,
            strategyName: _strategyName,
            strategyDesc: _strategyDesc,
            registeredAt: uint32(block.timestamp),
            active: true
        });
    }

    modifier onlyOwner() {
        if (msg.sender != owner) revert NotOwner();
        _;
    }

    function markRegistered() external onlyOwner {
        if (registeredOnChain) revert AlreadyRegistered();
        registeredOnChain = true;
        emit AgentRegistered(config.agentWallet, config.strategyName, uint32(block.timestamp));
    }

    function updateContracts(
        address _tradeLogger,
        address _riskGuardOracle
    ) external onlyOwner {
        if (_tradeLogger == address(0))    revert ZeroAddress();
        if (_riskGuardOracle == address(0)) revert ZeroAddress();
        config.tradeLogger = _tradeLogger;
        config.riskGuardOracle = _riskGuardOracle;
        emit ConfigUpdated(msg.sender, uint32(block.timestamp));
    }

    function deactivate() external onlyOwner {
        config.active = false;
        emit ConfigUpdated(msg.sender, uint32(block.timestamp));
    }

    function getConfig() external view returns (AgentConfig memory) {
        return config;
    }

    function isActive() external view returns (bool) {
        return config.active;
    }
}