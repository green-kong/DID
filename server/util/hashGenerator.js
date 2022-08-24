require("dotenv").config();
const crypto = require("crypto");
const salt = process.env.SALT;

const generateHash = (userId, userPw) => {
  const hash = crypto
    .createHmac("sha256", salt)
    .update(userId + userPw)
    .digest("hex");
  return hash;
};

module.exports = generateHash;
