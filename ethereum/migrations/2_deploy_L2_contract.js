const DID_L2 = artifacts.require("DID_L2");

/* Deploy L2 Contract */

module.exports = async function (deployer) {
  await deployer.deploy(DID_L2);
  console.log("DID_L2 contract deployed!! 👋👋");
};
