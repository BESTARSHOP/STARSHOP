const Product = require("../models/product");
exports.getProducts = async (req, res, next) => {
  // all products
  const liste = await Product.find();
  res.status(200).send(liste);
};

exports.getProductById = async (req, res, next) => {
  // view product
  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    const error = new Error("there is no Product");
    error.status = 400;
    return next(error);
  }
  res.status(200).send(product);
};
