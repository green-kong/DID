const service = require('./app.service.js');

const checkPoint = async (req, res) => {
  const { userCode, clientId } = req.body;
  const result = await service.getPoint(userCode, clientId);

  if (result) {
    res.json(result);
  } else {
    res.sendStatus(500);
  }
};

const usePoint = (req, res) => {};

module.exports = { checkPoint, usePoint };
