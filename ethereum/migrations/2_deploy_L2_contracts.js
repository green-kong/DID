const DID = artifacts.require("DID");

/* Deploy L2 Contract */

module.exports = async function (deployer) {
  await deployer.deploy(DID);
};
