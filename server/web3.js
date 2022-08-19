const Web3 = require("web3");
const contract = require("./contract/DID.json");
require("dotenv").config();

let instance;
class Instance {
  constructor(URL) {
    if (instance) return instance;
    this.web3 = new Web3(new Web3.providers.HttpProvider(URL));
    instance = this;
  }
}

let deploy;
class Deploy {
  constructor(abi, ca, client) {
    if (deploy) return deploy;
    this.contract = new client.web3.eth.Contract(abi, ca);
    deploy = this;
  }
}

const getDeployed = async () => {
  const URL = process.env.NETWORK_URL;
  const client = new Instance(URL);

  const networkId = await client.web3.eth.net.getId();

  const ca = contract.networks[networkId].address;
  const abi = contract.abi;

  const deployed = new Deploy(abi, ca, client);
  return deployed;
};

module.exports = getDeployed;
