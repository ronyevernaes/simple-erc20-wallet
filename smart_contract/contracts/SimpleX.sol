// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.27;

contract SimpleX {
  string public name = "SimpleX";
  string public symbol = "SX";
  uint8 public decimals = 18;
  uint256 public totalSupply;

  mapping(address => uint256) public balanceOf;

  event Transfer(address indexed _from, address indexed _to, uint256 _value);

  constructor(uint256 _initialSupply) {
    totalSupply = _initialSupply * (10 ** uint256(decimals));
    balanceOf[msg.sender] = totalSupply;
  }

  function transfer(address _to, uint256 _value) public returns (bool success) {
    require(balanceOf[msg.sender] >= _value, "Insufficient balance");
    require(_to != address(0), "Invalid address");
    balanceOf[msg.sender] -= _value;
    balanceOf[_to] += _value;
    emit Transfer(msg.sender, _to, _value);
    return true;
  }
}
