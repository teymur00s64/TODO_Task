const jwt = require("jsonwebtoken");
const config = require("../config");

const encode = (payload) => {
  return jwt.sign(payload, config.jwtSecret);
};

const decode = (token) => {
  try {
    const payload = jwt.verify(token, config.jwtSecret);
    return payload;
  } catch {
    return false;
  }
};

module.exports = {
  encode,
  decode,
};