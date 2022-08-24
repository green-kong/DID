const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const { pool } = require('../db.js');
const getDeployed = require('../web3.js');
const generateHash = require('../util/hashGenerator.js');

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
  const { userId, userPw, userEmail, selectMail, ...rest } = req.body;
  const email = userEmail + selectMail;
  const deployed = await getDeployed();

  const hash = generateHash(userId, userPw);
  const userInfo = {
    ...rest,
    email,
    gender: '남자다 이색기야',
  };

  const address = process.env.ADDRESS;

  await deployed.contract.methods
    .registerUser(hash, userInfo)
    .send({ from: address });

  // const a = await deployed.contract.methods
  //   .isRegistered(hash)
  //   .call({ from: address });
  // console.log(a);

  const sql = `INSERT INTO USER(USERID) VALUES('${userId}')`;
  await pool.execute(sql);
  res.json({ regist: true });
});

router.post('/viewProfile', async (req, res) => {
  const sql = `Select * from user where userid='asdf'`;

  // const asdf = await deployed.contract.methods
  //   .getUserInfo(hash)
  //   .call({ from: address });
  // console.log(asdf);

  const [result] = await pool.execute(sql);
  res.json({ result });
});

router.post('/userInfoCheck', async (req, res) => {
  const { userId, userPw } = req.body;

  const deployed = await getDeployed();
  const hash = generateHash(userId, userPw);
  const address = process.env.ADDRESS;

  console.log(userId, userPw);

  // const a = await deployed.contract.methods
  //   .isRegistered(hash)
  //   .call({ from: address });
  // console.log(a);

  const name = '오승주';
  const birth = '930429';
  const email = 'seungju121@naver.com';
  const userInfo = { userId, name, birth, email };

  // 쿠키에서 구한 아이디와 비번 해쉬한값을 컨트랙트에 있는지 조회함,
  // 있으면 true, 없으면 false res.json  ㄱ ㄱ
  res.json({ pwCheck: true, userInfo });
});

router.post('/userResign', async (req, res) => {
  const { userId } = req.body;

  // const sql = `DELETE FROM user where userid=${userId}`;
  // await pool.execute(sql);

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
  console.log(req.body);
  // 여기서 유저가 커넥ㅌ되어있는 페이지 보여주기
  // 연결끊기까지 ?!
  res.json({ a: 333 });
});

module.exports = router;
