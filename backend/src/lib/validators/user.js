const { body } = require("express-validator");

const validator = require("../middlewares/valdators");
exports.register = [
  body("email").isEmail().withMessage("wir bentötigen eine valide Email"),
  body("password")
    .isLength({ min: 4 })
    .withMessage("Dein Passwort ist nicht stark genug"),
  body("name").exists().trim().withMessage("Dein Name darf nicht leer sein"),
  validator,
];

exports.login = [
  body("email").isEmail().withMessage("wir bentötigen eine valide Email"),
  body("password")
    .isLength({ min: 4 })
    .withMessage("das ist nicht dein Passwort"),
  validator,
];
