const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  adress: { type: String, required: true },
  bayMethode: { type: String, required: true },
  token: String,
  cart: { type: mongoose.SchemaTypes.ObjectId, ref: "Cart" },
});
module.exports = mongoose.model("User", Schema, "users");
