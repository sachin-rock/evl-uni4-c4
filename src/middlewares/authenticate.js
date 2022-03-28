// const User = require("../models/user.models");
// const { verify } = require("jsonwebtoken");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
  return jwt.verify(token, process.env.key, function (err, decoded) {
    if (err) {
      res.send({ message: err.message });
    }
    return decoded;
  });
};

const authenticate = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      res.send("token not found or not matching");
    }
    if (!req.headers.authorization.startsWith("Bearer ")) {
      res.send("token not found or not matching");
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded = verifyToken(token);
    req.user = decoded.user;
    return next();
  } catch (error) {}
};
