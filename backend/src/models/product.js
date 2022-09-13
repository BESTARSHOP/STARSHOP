const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  title: { type: String, required: true },
  preis: { type: String, required: true },
  user: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
  cart: { type: mongoose.SchemaTypes.ObjectId, ref: "Cart" },
});
module.exports = mongoose.model("Product", Schema, "products");
