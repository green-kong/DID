const express = require('express');

const router = express.Router();

const controller = require('../controller/app/app.controller.js');

router.post('/checkPoint', controller.checkPoint);

router.post('/usePoint', controller.usePoint);

module.exports = router;
