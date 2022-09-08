const checkPoint = (req, res) => {
  const { userCode } = req.body;
  console.log(userCode);
};

const usePoint = (req, res) => {};

module.exports = { checkPoint, usePoint };
