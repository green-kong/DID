const DID = artifacts.require('DID');

module.exports = function (deployer) {
  deployer.deploy(DID);
};
