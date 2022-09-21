const crypto = require('crypto');

// 암호화
const cipher = (_userInfo, _key) => {
  const encrypt = crypto.createCipher('des', _key); // des알고리즘
  const encryptResult =
    encrypt.update(_userInfo, 'utf8', 'base64') + encrypt.final('base64'); // 암호화
  return encryptResult;
};

// 복호화
const decipher = (_encoded, _key) => {
  const decode = crypto.createDecipher('des', _key);
  const decodeResult =
    decode.update(_encoded, 'base64', 'utf8') + decode.final('utf8'); // 복호화
  return decodeResult;
};

const encryptUserInfo = (_stringifiedUserInfo, _salt) => {
  const encodedResult = cipher(_stringifiedUserInfo, _salt);

  return encodedResult;
};

const decryptUserInfo = (_encoded, _salt) => {
  const decodedResult = decipher(_encoded, _salt);
  const result = JSON.parse(decodedResult);

  return result;
};

module.exports = {
  encryptUserInfo,
  decryptUserInfo,
};
