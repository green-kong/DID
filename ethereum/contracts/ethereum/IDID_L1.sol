// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IDID_L1 {

    event checkUser(bool _check);

    /* Function */
    function setUsers (string[] memory _users) external;

    function isDIDuser (string memory _userCode) external returns (bool);
}