// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IDID_L2 {

    struct UserData {
        string userCode;
        string userInfo;
    }

    /* Function */
    function registerUser(string memory _identifier, UserData memory _userData) external;

    function withdrawUser(string memory _identifier) external;

    function isRegistered(string memory _identifier) external view returns (bool);

    function getUserInfo(string memory _identifier) external view returns (UserData memory);

    function setL1_CA(address _CA) external;

    function sendToL1() external;
}