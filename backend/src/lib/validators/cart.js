const { body } = require("express-validator");

const validator = require("../middlewares/valdators");
exports.addProduct = [
  body("product").isLength({ min: 5 }).withMessage("we need the product_id"),

  body("amount").isNumeric().withMessage("we need the amount"),

  validator,
];

exports.buyCart = [
  body("Product").isLength({ min: 5 }).withMessage("we need the products"),

  body("preis").isLength({ min: 5 }).withMessage("we need the  Price"),

  validator,
];

exports.deletProduct = [
  body("Product").isLength({ min: 5 }).withMessage("we need the products"),

  body("preis").isLength({ min: 5 }).withMessage("we need the  Price"),

  validator,
];

exports.deletProducts = [
  body("Product").isLength({ min: 5 }).withMessage("we need the products"),

  body("preis").isLength({ min: 5 }).withMessage("we need the  Price"),

  validator,
];

exports.updateProduct = [
  body("Product").isLength({ min: 5 }).withMessage("we need the products"),

  body("preis").isLength({ min: 5 }).withMessage("we need the  Price"),

  validator,
];
