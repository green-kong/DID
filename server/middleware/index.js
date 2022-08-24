const getDeployed = require('../web3.js');
const generateHash = require('../util/hashGenerator.js');

const userCheck = async (req, res, next) => {
  const { userId, userPw } = req.body;
  const deployed = await getDeployed();
  const hash = generateHash(userId, userPw);
  const address = process.env.ADDRESS;
  const check = await deployed.contract.methods
    .isRegistered(hash)
    .call({ from: address });

  if (check) {
    res.locals.utils = { deployed, hash, address };
    next();
  } else {
    res.sendStatus(500).send(false);
  }
};

module.exports = userCheck;
