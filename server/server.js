const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const { pool } = require("./db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.post("/login", (req, res) => {
  const userData = req.body;
});

app.post("/overlap_Check", async (req, res) => {
  const { inputId } = req.body;
  const sql = `Select * from user where userid='${inputId}'`;
  const [a] = await pool.execute(sql);
  if (a.length == 0) res.json({ idCheck: true });
  else res.json({ idCheck: false });
});

app.post("/regist", async (req, res) => {
  const { userid, userpw, pwCheck, name, birth, gender, email } = req.body;
  const sql = `INSERT INTO USER(USERID) VALUES('${userid}')`;
  await pool.execute(sql);
  res.json({ regist: true });
  console.log("등록됨ㅋ");
});

app.listen(4000, () => {
  console.log("back server port 4000");
});
