const express = require("express");
const controller = require("../controllers/user");
const app = express.Router();
const validation = require("../lib/validators/user");

app.post("/logout", controller.logout);
app.post("/register", validation.register, controller.register);
app.post("/login", validation.login, controller.login);

module.exports = app;
