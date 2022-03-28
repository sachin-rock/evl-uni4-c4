const express = require("express");

const app = express();

const { register, login } = require("./controllers/auth.controlles");
const todoController = require("./controllers/todo.controllers");
app.use(express.json());

app.post("/register", register);
app.post("/login", login);
app.use("todo", todoController);

module.exports = app;
