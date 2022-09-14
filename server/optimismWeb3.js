require('dotenv').config();
const Web3 = require('web3');
const ethers = require('ethers');
const sdk = require('@eth-optimism/sdk');
const DID_L2_JSON = require('./contract/DID_L2.json');
// const Provider = require('@truffle/hdwallet-provider');

const infuraKey = process.env.INFURA_KEY;
const privKey = process.env.CONTRACT_DEPLOYER_PK;
const EOA = process.env.ADDRESS;

const l1Web3 = new Web3(
  new Web3.providers.HttpProvider('https://goerli.infura.io/v3/' + infuraKey),
);

const l2Web3 = new Web3(
  new Web3.providers.HttpProvider('https://goerli.optimism.io'),
);

// const provider = new Provider(privKey, 'https://goerli.optimism.io');
// const web3 = new Web3(provider);

const l1Provider = new ethers.providers.Web3Provider(l1Web3.currentProvider);
const l2Provider = new ethers.providers.Web3Provider(l2Web3.currentProvider);

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const updateL1 = async () => {
  const l2NetworkId = await l2Web3.eth.net.getId();
  const abi = DID_L2_JSON.abi;
  const CA = DID_L2_JSON.networks[l2NetworkId].address;

  const instance = new l2Web3.eth.Contract(abi, CA);
  const txData = await instance.methods.sendToL1();
  const encodeABI = txData.encodeABI();

  const signedTx = await l2Web3.eth.accounts.signTransaction(
    {
      from: EOA,
      to: instance.options.address,
      data: encodeABI,
      gas: 1000000,
    },
    privKey,
  );

  console.log('Tx signed');

  const result = await l2Web3.eth.sendSignedTransaction(
    signedTx.rawTransaction,
  );
  const txHash = result.transactionHash;
  //   const instance = new web3.eth.Contract(abi, CA);
  //   const { transactionHash: txHash } = await instance.methods.sendToL1().send({
  //     from: EOA,
  //   });

  console.log('txHash : ', txHash);

  const wallet = new ethers.Wallet(privKey);
  const l1Signer = wallet.connect(l1Provider);

  const crossChainMessenger = new sdk.CrossChainMessenger({
    l1ChainId: 5,
    l2ChainId: 420,
    l1SignerOrProvider: l1Signer,
    l2SignerOrProvider: l2Provider,
  });

  let statusReady = false;
  let i = 1;
  console.log('start');

  while (!statusReady) {
    let status = null;
    status = await crossChainMessenger.getMessageStatus(txHash);
    console.log('status', status);
    statusReady = status == sdk.MessageStatus.READY_FOR_RELAY;
    if (!statusReady) {
      console.log(
        `Message not yet received on L1.\n 🕐 Retrying in 10 seconds... # ${i}`,
      );
      await sleep(10000); // 10 seconds
      i += 1;
    }
  }

  console.log('📬 Message received! Finalizing...');

  finalize = await crossChainMessenger.finalizeMessage(txHash);
  console.log(`🎉 Message finalized.`);
};

updateL1();
