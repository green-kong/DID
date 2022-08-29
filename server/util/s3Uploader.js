require('dotenv').config();
const { S3 } = require('aws-sdk');

const uploadS3 = async (file) => {
  const s3 = new S3();

  const param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${Number(new Date())}-${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  const result = await s3.upload(param).promise();
  console.log(result);
  return result;
};

module.exports = uploadS3;
