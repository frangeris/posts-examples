// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract GatewayV2 is Initializable, OwnableUpgradeable {
    uint private fee;

    function initialize(uint _fee) public initializer {
        fee = _fee;
        __Ownable_init();
    }

    function getFee() public view returns (uint) {
        return fee;
    }

    function setFee(uint _fee) public onlyOwner {
        fee = _fee;
    }
}
