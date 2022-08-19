const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const axios = require('axios');
const { pool } = require('./db');
const nodemailer = require('nodemailer');
const devRouter = require('./routers/dev.router.js');
const path = require('path');

require('dotenv').config();

// const Web3 = require('web3')
// const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9000'))

app.use(express.static(path.join(__dirname, './upload')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

app.use('/dev', devRouter);

app.post('/login', (req, res) => {
  const { id, pw } = req.body;
  res.json({ a: 1 });
});

app.post('/overlap_Check', async (req, res) => {
  const { inputId } = req.body;
  const sql = `Select * from user where userid='${inputId}'`;
  const [result] = await pool.execute(sql);
  if (result.length == 0) res.json({ idCheck: true });
  else res.json({ idCheck: false });
});

app.post('/sendAuthNum', async (req, res) => {
  // const { inputEmail } = req.body;
  const { userEmail } = req.body;

  const generateRandom = (min, max) => {
    var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return String(ranNum);
  };

  const authNum = generateRandom(111111, 999999);

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
    subject: 'DID 테스트입니다.', // 메일 제목
    text: authNum, // 메일 내용
  };
  transporter.sendMail(mailOptions, (error, info) => {
    // 이메일 발송
    if (error) {
      console.log(error); // 실패(에러)
    } else {
      console.log('이메일 발송에 성공했습니다: ' + info.response); // 성공
    }
  });
  res.json({ authNum });
});

app.post('/regist', async (req, res) => {
  const { userid, userpw, pwCheck, name, birth, email, selectMail } = req.body;
  const userMail = email + selectMail;

  // const sql = `INSERT INTO USER(USERID) VALUES('${userid}')`;
  // await pool.execute(sql);
  res.json({ regist: true });
});

app.post('/viewProfile', async (req, res) => {
  const sql = `Select * from user where userid='asdf'`;
  const [result] = await pool.execute(sql);
  res.json({ result });
});

app.listen(4000, () => {
  console.log('back server port 4000');
});
