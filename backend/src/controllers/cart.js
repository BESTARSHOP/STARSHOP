const Cart = require("../models/cart");
const Product = require("../models/product");

exports.getCart = async (req, res, next) => {
  const id = req.params.id;
  const cart = await Cart.findById(id);
  if (!cart) {
    const error = new Error("there is no Cart");
    error.status = 400;
    return next(error);
  }
  require.status(200).send(cart);
};

exports.buyCart = (req, res, next) => {
  //   throw new Error("not implemented");
};

exports.addProduct = async (req, res) => {
  const product = new Product(req.body);
  product.user = req.user._id; // ObjectId
  await product.save();
  res.status(200).send(product);
};

exports.deletProduct = (req, res) => {};

exports.updateProduct = (req, res) => {};
