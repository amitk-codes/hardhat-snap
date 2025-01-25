// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Sample {
    uint storedNum;

    constructor(uint _value) {
        storedNum = _value;
    }

    function getValue() external view returns (uint) {
        console.log("GETTER FUNCTION CALLED");
        return storedNum;
    }

    function setValue(uint _value) external {
        console.log("SETTER FUNCTION CALLED WITH VALUE: %s", _value);
        storedNum = _value;
    }
}
