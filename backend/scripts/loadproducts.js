const fetch = require("node-fetch");
require("dotenv").config();
const mongoose = require("mongoose");

const { DB_URL, DB_PORT, DB_NAME, PORT } = process.env;
const Product = require("../src/models/product");
mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DB_NAME}`);

fetch("https://fakestoreapi.com/products").then(async (res) => {
  const result = await res.json();
  await Product.collection.drop();
  for (const item of result) {
    const product = new Product({
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      rating: { rate: item.rating.rate, count: item.rating.count },
      image: item.image,
    });
    await product.save();
  }

  console.log("secsess");
});
