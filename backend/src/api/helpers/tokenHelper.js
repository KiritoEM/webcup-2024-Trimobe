const jwt = require("jsonwebtoken");

function createToken(payload) {
  try {
    if (!payload) {
      throw new Error("Payload not provided");
    }
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "365d" });
  } catch (error) {
    throw new Error(error);
  }
}

function verifyToken(token) {
  try {
    if (!token) {
      throw new Error("Token not provided");
    }
    return jwt.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  createToken,
  verifyToken
}