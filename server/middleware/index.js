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
  console.log('미들웨어', check);

  if (check) {
    res.locals.utils = { deployed, hash, address };
    next();
  } else {
    res.json({ pwCheck: false, loginCheck: false });
  }
};

module.exports = userCheck;
