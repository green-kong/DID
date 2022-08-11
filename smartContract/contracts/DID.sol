// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import './IDID.sol';
import '../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol';

contract DID is IDID, Ownable { 

    // identifier => UserInfo
    mapping(string => UserInfo) private user;

    // identifier => true/false
    mapping(string => bool) private isRegisteredUser;

    constructor() {
        user['4eb991b5e6d2f24f1ac9dc98a1be3ed7fdfd7ab53feeb5179f37a2183208217b'] = UserInfo('DH', '930126', 'male', 'dev-kong@gmail.com');
    }

    function registerUser(string memory _identifier, UserInfo memory _userData) public override {

        require(!isRegisteredUser[_identifier]);
        
        UserInfo memory userInfo;

        userInfo.name = _userData.name;
        userInfo.birth = _userData.birth;
        userInfo.gender = _userData.gender;
        userInfo.email = _userData.email;

        user[_identifier] = userInfo;
        isRegisteredUser[_identifier] = true;
    }

    function withdrawUser(string memory _identifier) public override {
        require(isRegisteredUser[_identifier]);

        delete user[_identifier];
        isRegisteredUser[_identifier] = false;
    }

    function updateUser(string memory _identifier, UserInfo memory _userData) public override {
        require(isRegisteredUser[_identifier]);

        UserInfo memory userInfo;

        userInfo.name = _userData.name;
        userInfo.birth = _userData.birth;
        userInfo.gender = _userData.gender;
        userInfo.email = _userData.email;

        user[_identifier] = userInfo;
    }

    function isRegistered(string memory _identifier) public view override returns (bool) {
        return isRegisteredUser[_identifier];
    }

    function getUserInfo(string memory _identifier) public view override onlyOwner returns (UserInfo memory) {
        return user[_identifier];
    }
}