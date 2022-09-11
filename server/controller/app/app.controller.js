const { servicesVersion } = require('typescript');
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

const usePoint = async (req, res) => {
  const { userCode, points } = req.body;
  const result = await service.usePoint(userCode, points);

  if (result) {
    res.send(true);
  } else {
    res.send(false);
  }
};

module.exports = { checkPoint, usePoint };
