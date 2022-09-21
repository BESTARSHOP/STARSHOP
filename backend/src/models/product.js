const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  Anzahl: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Product", Schema, "products");
