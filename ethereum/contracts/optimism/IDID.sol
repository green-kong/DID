// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IDID {

    struct UserInfo {
        string userCode;
        string name;
        string birth;
        string gender;
        string email;
    }

    /* Function */
    function registerUser(string memory _identifier, UserInfo memory _userData) external;

    function withdrawUser(string memory _identifier) external;

    function updateUser(string memory _identifier, UserInfo memory _userData) external;

    function isRegistered(string memory _identifier) external view returns (bool);

    function getUserInfo(string memory _identifier) external view returns (UserInfo memory);
}