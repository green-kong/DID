require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { pool } = require("./db");
const nodemailer = require("nodemailer");
const contract = require("./contract/DID.json");
const getDeployed = require("./web3.js");
const generateHash = require("./util/hashGenerator.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.post("/login", async (req, res) => {
  const { id, pw } = req.body;

  // id pw 해쉬만든다음 컨트랙트 상태변수에 있는지 조회
  // 있으면 true, 없으면 false

  res.json({ loginCheck: true });
});

app.post("/overlap_Check", async (req, res) => {
  const { inputId } = req.body;
  const sql = `Select * from user where userid='${inputId}'`;
  const [result] = await pool.execute(sql);
  if (result.length == 0) res.json({ idCheck: true });
  else res.json({ idCheck: false });
});

app.post("/sendAuthNum", async (req, res) => {
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
    subject: "DID 테스트입니다.", // 메일 제목
    text: authNum, // 메일 내용
  };
  transporter.sendMail(mailOptions, (error, info) => {
    // 이메일 발송
    if (error) {
      console.log(error); // 실패(에러)
    } else {
      console.log("이메일 발송에 성공했습니다: " + info.response); // 성공
    }
  });
  res.json({ authNum });
});

app.post("/regist", async (req, res) => {
  const { userId, userPw, userEmail, selectMail, ...rest } = req.body;
  const email = userEmail + selectMail;
  const deployed = (await getDeployed()).contract;
  const CONTRACT_DEPLOYER = process.env.CONTRACT_DEPLOYER;

  const hash = generateHash(userId, userPw);
  const userInfo = {
    ...rest,
    email,
  };

  await deployed.methods
    .registerUser(hash, userInfo)
    .send({ from: CONTRACT_DEPLOYER });
  // const a = await deployed.methods.isRegistered(hash).call();
  // console.log(a);

  // console.log(userId, userPw, userName, birth, userMail);

  // const sql = `INSERT INTO USER(USERID) VALUES('${userId}')`;
  // await pool.execute(sql);
  res.json({ regist: true });
});

app.post("/viewProfile", async (req, res) => {
  const sql = `Select * from user where userid='asdf'`;
  const [result] = await pool.execute(sql);
  res.json({ result });
});

app.post("/userInfoCheck", async (req, res) => {
  const { userId, userPw } = req.body;
  // name, birth, emali 컨트랙트에서 가져오기
  const name = "오승주";
  const birth = "930429";
  const email = "seungju121@naver.com";
  const userInfo = { userId, name, birth, email };

  // 쿠키에서 구한 아이디와 비번 해쉬한값을 컨트랙트에 있는지 조회함,
  // 있으면 true, 없으면 false res.json  ㄱ ㄱ
  res.json({ pwCheck: true, userInfo });
});

app.post("/userResign", async (req, res) => {
  const { userId } = req.body;

  // const sql = `DELETE FROM user where userid=${userId}`;
  // await pool.execute(sql);

  res.json({ pwCheck: true });
});

app.listen(4000, () => {
  console.log("back server port 4000");
});
