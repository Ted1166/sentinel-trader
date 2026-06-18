// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "forge-std/Test.sol";
import "../src/GuardianVault.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockERC20 is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}
    function mint(address to, uint256 amount) external { _mint(to, amount); }
}

contract MockOracle {
    mapping(address => bool) public halted;
    function setHalted(address asset, bool h) external { halted[asset] = h; }
    function isHalted(address asset) external view returns (bool) { return halted[asset]; }
}

contract GuardianVaultTest is Test {
    GuardianVault vault;
    MockOracle oracle;
    MockERC20 token;

    address guardian = makeAddr("guardian");
    address user1 = makeAddr("user1");
    address user2 = makeAddr("user2");
    address stranger = makeAddr("stranger");

    uint128 constant AMOUNT = 1_000e18;

    function setUp() public {
        vm.warp(10000);
        oracle = new MockOracle();
        vault = new GuardianVault(guardian, address(oracle));
        token = new MockERC20("PancakeSwap", "CAKE");

        token.mint(user1, AMOUNT * 10);
        token.mint(user2, AMOUNT * 10);

        vm.prank(user1);
        token.approve(address(vault), type(uint256).max);
        vm.prank(user2);
        token.approve(address(vault), type(uint256).max);
    }

    function test_enableAndDisableProtection() public {
        assertFalse(vault.isProtected(user1));

        vm.prank(user1);
        vault.enableProtection();
        assertTrue(vault.isProtected(user1));

        vm.prank(user1);
        vault.disableProtection();
        assertFalse(vault.isProtected(user1));
    }

    function test_protectTokensHappyPath() public {
        vm.prank(user1);
        vault.enableProtection();
        oracle.setHalted(address(token), true);

        uint256 balBefore = token.balanceOf(user1);

        vm.prank(guardian);
        vault.protectTokens(user1, address(token), AMOUNT, "drawdown halt");

        assertEq(token.balanceOf(user1), balBefore - AMOUNT);
        assertEq(token.balanceOf(address(vault)), AMOUNT);

        GuardianVault.VaultBalance memory b = vault.getBalance(user1, address(token));
        assertEq(b.amount, AMOUNT);
        assertEq(b.reason, "drawdown halt");
    }

    function test_protectRevertsIfNotEnabled() public {
        oracle.setHalted(address(token), true);
        vm.prank(guardian);
        vm.expectRevert(abi.encodeWithSelector(GuardianVault.ProtectionNotEnabled.selector, user1));
        vault.protectTokens(user1, address(token), AMOUNT, "halt");
    }

    function test_protectRevertsIfNotHalted() public {
        vm.prank(user1);
        vault.enableProtection();

        vm.prank(guardian);
        vm.expectRevert(abi.encodeWithSelector(GuardianVault.AssetNotHalted.selector, address(token)));
        vault.protectTokens(user1, address(token), AMOUNT, "halt");
    }

    function test_protectRevertsIfNotGuardian() public {
        vm.prank(user1);
        vault.enableProtection();
        oracle.setHalted(address(token), true);

        vm.prank(stranger);
        vm.expectRevert(GuardianVault.NotGuardian.selector);
        vault.protectTokens(user1, address(token), AMOUNT, "halt");
    }

    function test_cooldownEnforced() public {
        vm.prank(user1);
        vault.enableProtection();
        oracle.setHalted(address(token), true);

        vm.prank(guardian);
        vault.protectTokens(user1, address(token), AMOUNT, "first");

        vm.prank(guardian);
        vm.expectRevert();
        vault.protectTokens(user1, address(token), AMOUNT, "second");

        vm.warp(block.timestamp + 5 minutes + 1);
        vm.prank(guardian);
        vault.protectTokens(user1, address(token), AMOUNT, "third");

        GuardianVault.VaultBalance memory b = vault.getBalance(user1, address(token));
        assertEq(b.amount, AMOUNT * 2);
    }

    function test_batchProtect() public {
        vm.prank(user1); vault.enableProtection();
        vm.prank(user2); vault.enableProtection();
        oracle.setHalted(address(token), true);

        GuardianVault.BatchProtectParams[] memory params = new GuardianVault.BatchProtectParams[](2);
        params[0] = GuardianVault.BatchProtectParams(user1, address(token), AMOUNT);
        params[1] = GuardianVault.BatchProtectParams(user2, address(token), AMOUNT);

        vm.prank(guardian);
        vault.batchProtectTokens(params, "batch halt");

        assertEq(vault.getBalance(user1, address(token)).amount, AMOUNT);
        assertEq(vault.getBalance(user2, address(token)).amount, AMOUNT);
        assertEq(token.balanceOf(address(vault)), AMOUNT * 2);
    }

    function test_batchSkipsDisabledUsers() public {
        vm.prank(user1); vault.enableProtection();
        oracle.setHalted(address(token), true);

        GuardianVault.BatchProtectParams[] memory params = new GuardianVault.BatchProtectParams[](2);
        params[0] = GuardianVault.BatchProtectParams(user1, address(token), AMOUNT);
        params[1] = GuardianVault.BatchProtectParams(user2, address(token), AMOUNT);

        vm.prank(guardian);
        vault.batchProtectTokens(params, "batch");

        assertEq(vault.getBalance(user1, address(token)).amount, AMOUNT);
        assertEq(vault.getBalance(user2, address(token)).amount, 0);
    }

    function test_withdrawFullBalance() public {
        vm.prank(user1); vault.enableProtection();
        oracle.setHalted(address(token), true);
        vm.prank(guardian);
        vault.protectTokens(user1, address(token), AMOUNT, "halt");

        uint256 balBefore = token.balanceOf(user1);

        vm.prank(user1);
        vault.withdraw(address(token));

        assertEq(token.balanceOf(user1), balBefore + AMOUNT);
        assertEq(vault.getBalance(user1, address(token)).amount, 0);
    }

    function test_withdrawPartialAmount() public {
        vm.prank(user1); vault.enableProtection();
        oracle.setHalted(address(token), true);
        vm.prank(guardian);
        vault.protectTokens(user1, address(token), AMOUNT, "halt");

        vm.prank(user1);
        vault.withdrawAmount(address(token), AMOUNT / 2);

        assertEq(vault.getBalance(user1, address(token)).amount, AMOUNT / 2);
    }

    function test_withdrawRevertsOnZeroBalance() public {
        vm.prank(user1);
        vm.expectRevert(
            abi.encodeWithSelector(GuardianVault.InsufficientBalance.selector, user1, address(token))
        );
        vault.withdraw(address(token));
    }

    function test_withdrawAmountRevertsIfExceedsBalance() public {
        vm.prank(user1); vault.enableProtection();
        oracle.setHalted(address(token), true);
        vm.prank(guardian);
        vault.protectTokens(user1, address(token), AMOUNT, "halt");

        vm.prank(user1);
        vm.expectRevert(
            abi.encodeWithSelector(GuardianVault.InsufficientBalance.selector, user1, address(token))
        );
        vault.withdrawAmount(address(token), AMOUNT + 1);
    }

    function test_twoStepGuardianTransfer() public {
        address newGuardian = makeAddr("newGuardian");

        vm.prank(guardian);
        vault.initiateGuardianTransfer(newGuardian);

        vm.prank(newGuardian);
        vault.acceptGuardianTransfer();

        assertEq(vault.guardian(), newGuardian);
    }
}