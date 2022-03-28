const req = require("express/lib/request");
const res = require("express/lib/response");
const User = require("../models/user.models");
var jwt = require("jsonwebtoken");
const { reject } = require("bcrypt/promises");
require("dotenv").config();

const matchPassword = (hash, log) => {
  return newPromise((resolve, reject) => {
    return bcrypt.compare(log, hash, function (err, result) {
      // result == true
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};
const generateToken = (user) => {
  return jwt.sign({ user }, process.env.key);
};
const register = async () => {
  try {
    user = await User.find({ email: req.body.email }).lean().exec();
    if (user) {
      res.send("user is already exist");
    }
    user = await User.create(req.body);
    const token = generateToken(user);
    res.send(token);
  } catch (error) {
    res.send({ error });
  }
};
const login = async () => {
  try {
    let user = await User.find({ email: req.body.email });
    if (!user) {
      res.send("user not exist");
    }
    mainPass = user.password;
    logPass = req.body.password;
    const match = await matchPassword(mainPass, logPass);

    if (!match) {
      res.send("email and password not match");
    }
    const token = generateToken(user);
    res.send(token);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { register, login };
