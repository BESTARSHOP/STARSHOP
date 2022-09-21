const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  adress: { type: String, required: true },
  bayMethode: { type: String, required: true },

  product: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Product" }],
});
module.exports = mongoose.model("Cart", Schema, "carts");
