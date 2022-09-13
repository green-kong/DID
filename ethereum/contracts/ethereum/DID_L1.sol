// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
import './IDID_L1.sol';

contract DID_L1 is IDID_L1 {

    string[] private users;

    function setUsers (string[] memory _users) public {
        users = _users;
    }

    function isDIDuser(string memory _userCode) public view returns (bool) {
        bool check = false;
        for (uint i=0; i<users.length; i++) {
            if (keccak256(abi.encodePacked(users[i])) == keccak256(abi.encodePacked(_userCode))) check = true;
        }

        return check;
    }
}