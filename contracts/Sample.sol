// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Sample {
    uint storedNum;

    constructor(uint _value) {
        storedNum = _value;
    }

    function getValue() external view returns (uint) {
        return storedNum;
    }

    function setValue(uint _value) external {
        storedNum = _value;
    }
}
