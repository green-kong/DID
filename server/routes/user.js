const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
const { pool } = require('../db.js');
const getDeployed = require('../web3.js');
const generateHash = require('../util/hashGenerator.js');
const userCheck = require('../middleware/index.js');

router.post('/login', async (req, res) => {
  const { id, pw } = req.body;
  const hash = generateHash(id, pw);
  const deployed = await getDeployed();
  const address = process.env.ADDRESS;
  const loginCheck = await deployed.contract.methods
    .isRegistered(hash)
    .call({ from: address });

  if (loginCheck) {
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
  } else {
    res.json({ loginCheck: false });
  }
});

router.post('/overlap_Check', async (req, res) => {
  const { inputId } = req.body;
  const sql = `Select * from user where userid='${inputId}'`;
  const [result] = await pool.execute(sql);
  if (result.length == 0) res.json({ idCheck: true });
  else res.json({ idCheck: false });
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
      console.log(error); // 실패(에러)
    } else {
      console.log('이메일 전송함: ' + info.response); // 성공
    }
  });
  res.json({ authNum });
});

router.post('/regist', async (req, res) => {
  const { userId, userPw, userEmail, selectMail, gender, ...rest } = req.body;
  const email = userEmail + selectMail;
  const deployed = await getDeployed();
  const userCode = uuid();
  console.log(userCode);

  const hash = generateHash(userId, userPw);
  const userInfo = {
    ...rest,
    email,
    gender,
    userCode,
  };

  const address = process.env.ADDRESS;

  await deployed.contract.methods
    .registerUser(hash, userInfo)
    .send({ from: address });

  const sql = `INSERT INTO USER(USERID) VALUES('${userId}')`;
  await pool.execute(sql);
  res.json({ regist: true });
});

router.post('/userInfoCheck', userCheck, async (req, res) => {
  const { userId, userPw } = req.body;
  const { deployed, hash, address } = res.locals.utils;
  const data = await deployed.contract.methods
    .getUserInfo(hash)
    .call({ from: address });
  const { name, birth, email, gender } = data;
  const userInfo = { userId, name, birth, email, gender };
  res.json({ pwCheck: true, userInfo });
});

router.post('/userResign', userCheck, async (req, res) => {
  const { userId, userPw } = req.body;
  const { deployed, hash, address } = res.locals.utils;
  await deployed.contract.methods.withdrawUser(hash).send({ from: address });

  const check = await deployed.contract.methods
    .isRegistered(hash)
    .call({ from: address });

  const sql = `DELETE FROM user where userId=${userId}`;
  await pool.execute(sql);

  res.json({ pwCheck: true });
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

router.post('/connectionsInfo', (req, res) => {
  const { idx, userId } = req.body;
  // console.log(req.body);
  // 여기서 유저가 커넥ㅌ되어있는 페이지 보여주기
  // 연결끊기까지 ?!
  res.json({ a: 333 });
});

module.exports = router;
