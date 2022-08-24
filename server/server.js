require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const devRouter = require('./routers/dev.router.js');
const userRouter = require('./routes/user.js');

app.use(express.static(path.join(__dirname, './upload')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

app.use(userRouter);
app.use('/dev', devRouter);

app.listen(4000, () => {
  console.log('back server port 4000');
});
