const req = require("express/lib/request");
const Todo = require("../models/toto.model");

const authorise = async (req, res, next) => {
  const todo = await Todo.find({ _id: req.params.id }).lean().exec();
  if (todo.userId != req.user._id) {
    res.status(401).send("you are not the main user");
  }
  return next();
};

module.exports = authorise;
