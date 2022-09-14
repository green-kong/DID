require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const devRouter = require('./routers/dev.router.js');
const userRouter = require('./routers/user.router.js');
const appRouter = require('./routers/app.router.js');
const { request } = require('http');

app.use(express.static(path.join(__dirname, './upload')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));
app.use(
  cors({
    origin: [
      'http://helpless-did.shop',
      'https://helpless-did.shop',
      'http://13.124.38.134',
      'https://13.124.38.134',
    ],
    credentials: true,
  }),
);

app.use('/user', userRouter);
app.use('/dev', devRouter);
app.use('/app', appRouter);

app.listen(4000, () => {
  console.log('back server port 4000');
});
