// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Sample{
  uint storedNum = 12;

  function getStoredNumValue() external view returns(uint){
    return storedNum;
  } 
}