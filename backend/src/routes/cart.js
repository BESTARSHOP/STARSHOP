const express = require("express");
const controller = require("../controllers/cart");

const validator = require("../lib/validators/cart");
const app = express.Router();

app.get("/", controller.getcart);
app.post("/addProduct", validator.addProduct, controller.addProduct);
app.post("/setAmount", validator.setAmount, controller.setAmount);

module.exports = app;
