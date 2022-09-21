const crypto = require('crypto');

const encryptUserInfo = (_stringifiedUserInfo, _key) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(_key), iv);

  const encrypted = cipher.update(_stringifiedUserInfo);

  return `${iv.toString('hex')}:${Buffer.concat([
    encrypted,
    cipher.final(),
  ]).toString('hex')}`;
};

function decryptUserInfo(_encoded, _key) {
  const textArr = _encoded.split(':');
  const iv = Buffer.from(textArr.shift(), 'hex');

  const encryptedText = Buffer.from(textArr.join(''), 'hex');

  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(_key),
    iv,
  );
  const decrypted = decipher.update(encryptedText);
  const decodedResult = Buffer.concat([decrypted, decipher.final()]).toString();

  return JSON.parse(decodedResult);
}

module.exports = {
  encryptUserInfo,
  decryptUserInfo,
};
