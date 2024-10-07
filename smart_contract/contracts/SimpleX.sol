// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.27;

contract SimpleX {
  string public constant name = "SimpleX";
  string public constant symbol = "SX";
  uint8 public constant decimals = 18;
  uint256 public immutable totalSupply;

  mapping(address => uint256) public balanceOf;

  event Transfer(address indexed _from, address indexed _to, uint256 _value);

  constructor(uint256 _initialSupply) {
    totalSupply = _initialSupply * (10 ** uint256(decimals));
    balanceOf[msg.sender] = totalSupply;
  }

  function transfer(address _to, uint256 _value) public returns (bool success) {
    uint256 senderBalance = balanceOf[msg.sender];
    require(senderBalance >= _value, "Insufficient balance");
    require(_to != address(0), "Invalid address");

    unchecked {
      balanceOf[msg.sender] = senderBalance - _value;
      balanceOf[_to] += _value;
    }
    emit Transfer(msg.sender, _to, _value);
    return true;
  }
}
