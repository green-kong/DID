const express = require('express');
const multer = require('multer');

const router = express.Router();

const upload = require('../util/multer.js');

const controller = require('../controller/dev/dev.controller.js');

router.post('/addApp', upload.single('file'), controller.addApp);

router.post('/appList', controller.appList);

router.post('/appInfo', controller.appInfo);

router.post('/updateApp', upload.single('file'), controller.updateApp);

router.post('/delApp', controller.delApp);

module.exports = router;
