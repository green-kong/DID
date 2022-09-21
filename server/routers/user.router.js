const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
const { pool } = require('../db.js');
const getDeployed = require('../web3.js');
const generateHash = require('../util/hashGenerator.js');
const userCheck = require('../middleware/index.js');
const { encryptUserInfo, decryptUserInfo } = require('../util/crypto');

router.post('/login', userCheck, async (req, res) => {
  const { userId: id } = req.body;

  try {
    const sql = `SELECT * FROM user WHERE userId='${id}'`;
    const [[result]] = await pool.execute(sql);
    const { idx, userId } = result;
    const userInfo = { idx, userId };
    const secretKey = process.env.SALT;
    const options = { expiresIn: '7d' };

    jwt.sign(userInfo, secretKey, options, (err, token) => {
      if (err) console.log(err);
      else res.json({ loginCheck: true, token });
    });
  } catch (e) {
    console.log(e);
    res.json({ loginCheck: false });
  }
});

router.post('/idOverlap_Check', async (req, res) => {
  const { inputId } = req.body;
  try {
    const sql = `Select * from user where userId='${inputId}'`;
    const [result] = await pool.execute(sql);
    if (result.length == 0) res.json({ idCheck: true });
    else res.json({ idCheck: false });
  } catch (e) {
    console.log(e);
    res.json({ idCheck: false });
  }
});

router.post('/sendAuthNum', async (req, res) => {
  const { userEmail } = req.body;

  const generateRandom = (min, max) => {
    var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return String(ranNum);
  };

  const authNum = generateRandom(111111, 999999).split('');
  let html = fs.readFileSync('./public/sendAuthNum.html').toString();
  for (let i = 0; i < authNum.length; i++) {
    html = html.replace(`{{text${i}}}`, authNum[i]);
  }

  let transporter = nodemailer.createTransport({
    // 보내는사람 메일 설정입니다.
    service: process.env.Auth_SERVICE,
    auth: {
      user: process.env.Auth_USER,
      pass: process.env.Auth_PASSWORD,
    },
  });
  let mailOptions = {
    // 받는사람 메일 설정입니다.
    from: process.env.Auth_USER, // 발송 메일 주소
    to: userEmail, // 받는사람 이메일
    subject: '[DID] 인증번호를 확인해주세요.', // 메일 제목
    html,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    // 이메일 발송
    if (error) {
      console.log(error);
      console.log('이메일발송 실패');
    } else {
      console.log('이메일 전송함: ' + info.response); // 성공
    }
  });
  res.json({ authNum });
});

router.post('/regist', async (req, res) => {
  const {
    userId,
    userPw,
    userName: name,
    birth,
    email: inputMail,
    selectMail,
    gender,
  } = req.body;
  const email = inputMail + selectMail;
  const deployed = await getDeployed();
  const userCode = uuid().split('-').join('');

  const hash = generateHash(userId, userPw);
  const userInfo = {
    name,
    birth,
    gender,
    email,
  };
  const address = process.env.ADDRESS;
  const cryptoSalt = process.env.CRYPTO_SALT;

  const stringifiedUserInfo = JSON.stringify(userInfo);
  const encoded = encryptUserInfo(stringifiedUserInfo, cryptoSalt);

  const userData = {
    userCode,
    userInfo: encoded,
  };

  try {
    const txCount = await deployed.client.web3.eth.getTransactionCount(address);
    await deployed.contract.methods
      .registerUser(hash, userData)
      .send({ nonce: txCount, from: address });

    const sql = `INSERT INTO user(userId,userCode) VALUES('${userId}','${userCode}')`;
    await pool.execute(sql);
    res.json({ regist: true });
  } catch (e) {
    console.log(e);
    console.log('유저정보 안들어감');
    res.json({ regist: false });
  }
});

router.post('/userInfoCheck', userCheck, async (req, res) => {
  const { userId } = req.body;
  try {
    const { deployed, hash, address } = res.locals.utils;
    const data = await deployed.contract.methods
      .getUserInfo(hash)
      .call({ from: address });
    const { userCode, userInfo } = data;
    const cryptoSalt = process.env.CRYPTO_SALT;
    const decoded = decryptUserInfo(userInfo, cryptoSalt);

    const userData = { userCode, ...decoded, userId };

    res.json({ pwCheck: true, userInfo: userData });
  } catch (e) {
    console.log(e);
    console.log('userInfoCheck Error');
    res.json({ pwCheck: false, userInfo: userData });
  }
});

router.post('/userResign', userCheck, async (req, res) => {
  const { userIdx: u_idx, userId } = req.body;
  try {
    const { deployed, hash, address } = res.locals.utils;
    const txCount = await deployed.client.web3.eth.getTransactionCount(address);
    await deployed.contract.methods
      .withdrawUser(hash)
      .send({ nonce: txCount, from: address });

    const sqlConnectIdx = `SELECT idx FROM application WHERE u_idx='${u_idx}'`;
    const [result] = await pool.execute(sqlConnectIdx);
    let app_idx = [];
    result.forEach((v) => {
      app_idx.push(`a_idx='${v.idx}'`);
    });
    const where = 'WHERE ' + app_idx.join(' or ');

    if (app_idx.length !== 0) {
      const sqlDeleteDesc = `DELETE FROM appDesc ${where} `;
      await pool.execute(sqlDeleteDesc);

      const sqlDeleteImg = `DELETE FROM appImg ${where} `;
      await pool.execute(sqlDeleteImg);

      const sqlDeleteConnect = `DELETE FROM connected ${where}`;
      await pool.execute(sqlDeleteConnect);
    }
    const sqlDeleteApp = `DELETE FROM application WHERE u_idx='${u_idx}' `;
    await pool.execute(sqlDeleteApp);

    const sqlDeleteUser = `DELETE FROM user WHERE userId='${userId}'`;
    await pool.execute(sqlDeleteUser);

    const sqlDeleteConnect_u_idx = `DELETE FROM connected WHERE u_idx='${u_idx}'`;
    await pool.execute(sqlDeleteConnect_u_idx);

    res.json({ pwCheck: true });
  } catch (e) {
    console.log(e);
    console.log(`can't remove userInfo at DB or contract`);
    res.json({ pwCheck: false });
  }
});

router.post('/sendToken', (req, res) => {
  const { userToken: token } = req.body;
  const secretKey = process.env.SALT;

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log('에러에요');
      res.sendStatus(500).send(false);
    } else {
      const { idx, userId } = decoded;
      const result = { idx, userId };
      res.json(result);
    }
  });
});

router.post('/connectionsInfo', async (req, res) => {
  try {
    const { idx: u_idx } = req.body;
    const sql = `
        SELECT application.idx, name, appDesc, imgUrl, host
        FROM connected
        JOIN application ON connected.a_idx=application.idx
        LEFT JOIN appDesc ON connected.a_idx=appDesc.a_idx
        LEFT JOIN appImg ON connected.a_idx=appImg.a_idx
        WHERE connected.u_idx=${u_idx};
    `;

    const [connectionInfo] = await pool.execute(sql);
    res.json({ check: true, connectionInfo });
  } catch (e) {
    console.log(e);
    console.log('no connectionsInfo');
    res.json({ check: false });
  }
});

router.post('/disconnected', async (req, res) => {
  try {
    const {
      userData: { idx: u_idx },
      v: { idx: a_idx },
    } = req.body;

    const sqlDeleteConnect = `
      delete from connected
      where a_idx=${a_idx} and u_idx=${u_idx}
    `;
    await pool.execute(sqlDeleteConnect);

    res.json({ delete: true });
  } catch (e) {
    console.log(e);
    console.log('failed move to hostURL');
    res.json({ delete: false });
  }
});

router.post('/disconnectFromApp', async (req, res) => {
  const { userCode, clientId } = req.body;

  const deleteSql = `
  DELETE connected
  FROM connected 
  LEFT JOIN application
  ON application.idx = connected.a_idx
  LEFT JOIN user
  ON user.idx = connected.u_idx
  WHERE application.APIKey='${clientId}'
  AND user.userCode='${userCode}'
  `;

  try {
    await pool.query(deleteSql);
    res.send(true);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
