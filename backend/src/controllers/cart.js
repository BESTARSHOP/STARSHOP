const Cart = require("../models/cart");
const product = require("../models/product");
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
  // buy now (user Data)
  //   throw new Error("not implemented");
};

exports.addProduct = async (req, res) => {
  let cart = await Cart.findById(req.user.cart);
  if (!cart) {
    cart = new Cart({
      address: {
        street: "?",
        zipcode: "?",
        city: "?",
      },
      buyMethode: "?",
      products: [],
    });
    console.log(cart);
    req.user.cart = cart._id;
    await cart.save();
    await req.user.save();
  }

  cart.products.push({
    product: req.body.product,
    amount: req.body.amount,
  });
  await cart.save();
  res.status(200).send(cart);
};

exports.deletProduct = async (req, res) => {
  //remove Item
  const { id } = req.params.id;

  let cart = await Cart.findById(req.user.cart);
  cart.products = cart.products.filter((item) => item._id !== id);
  await cart.save();
  res.status(200).send(cart);
};

exports.deletProducts = async (req, res) => {
  const { id } = req.params.id;

  let cart = await Cart.deleteOne(req.user.cart);

  await cart.save();
  res.status(200).send(cart);
};
exports.updateProduct = async (req, res) => {
  //anzahl item
  let cart = await Cart.findById(req.user.cart);
  const product = req.body.product;
  const amount = req.body.amount;
  cart.products = cart.products.map((item) => {
    if (item._id === product._id) {
      item.amount = amount;
    }
    return item;
  });
  await cart.save();
  res.status(200).send(cart);
};
