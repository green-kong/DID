const DID_L1 = artifacts.require("DID_L1");

/* Deploy L1 Contract */

module.exports = async function (deployer) {
  await deployer.deploy(DID_L1);
  console.log("DID_L1 contract deployed!! 👋");
};
