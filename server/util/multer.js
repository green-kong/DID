const multer = require('multer');

const storage = multer.memoryStorage();

const limits = { Size: 10 * 1024 * 1024 };

const fileFilter = (req, file, cb) => {
  if (file.mimetype.split('/')[0] === 'image') {
    cb(null, true);
  } else {
    cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE'), false);
  }
};

const multerConfig = {
  storage,
  limits,
};

const upload = multer(multerConfig);

module.exports = upload;
