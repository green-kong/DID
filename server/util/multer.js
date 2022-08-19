const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, done) {
    done(null, 'upload');
  },

  filename(req, file, done) {
    const ext = path.extname(file.originalname);
    const fileName = `${path.basename(
      file.originalname,
      ext
    )}_${Date.now()}${ext}`;
    done(null, fileName);
  },
});

const limits = { fileSize: 10 * 1024 * 1024 };

const multerConfig = {
  storage,
  limits,
};

const upload = multer(multerConfig);

// const multer = require('multer');
// const multerS3 = require('multer-s3');
// const aws = require('aws-sdk');
// const path = require('path');

// require('dotenv').config();

// aws.config.loadFromPath(path.join(__dirname, '/../awsconfig.json'));
// aws.config.update({
//   accessKeyId: process.env.S3_ACCESS_KEY_ID,
//   secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//   region: 'ap-northeast-2',
// });

// const s3 = new aws.S3();

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'did-app-logos',
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     acl: 'public-read',
//     metadata: function (req, file, cb) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req, file, cb) {
//       cb(
//         null,
//         Math.floor(Math.random() * 1000).toString() +
//           Date.now() +
//           '.' +
//           file.originalname
//       );
//     },
//   }),
//   limits: { fileSize: 1000 * 1000 * 10 },
// });

// const upload = multer

module.exports = upload;
