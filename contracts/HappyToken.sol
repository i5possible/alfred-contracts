pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HappyToken is ERC20 {
    constructor() ERC20("Happy", "HPY") {
    }

    function transfer(address to, uint256 value) override public returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, value);
        return true;
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
