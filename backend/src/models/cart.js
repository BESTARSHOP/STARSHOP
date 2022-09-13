const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  title: { type: String, required: true },
  preis: { type: String, required: true },
  user: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: "User" },
  product: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Product" }],
});
module.exports = mongoose.model("Cart", Schema, "carts");
