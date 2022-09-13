const { body } = require("express-validator");

const validator = require("../middlewares/valdators");
exports.addProduct = [
  body("Product").exists().withMessage("wir bentötigen die Products"),

  validator,
];

exports.setAmount = [
  body("Product").exists().withMessage("wir bentötigen die Products"),

  validator,
];
