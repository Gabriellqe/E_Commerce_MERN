const CartModel = require("../models/Cart.model");

const createCart = async (req, res) => {
  const newCart = new CartModel(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(501).json(error);
  }
};

const updateCart = async (req, res) => {
  try {
    const updatedCart = await CartModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteCart = async (req, res) => {
  try {
    const CartDeleted = await CartModel.findByIdAndDelete(req.params.id);
    if (!CartDeleted) {
      return res.status(404).send("Cart not found");
    }
    res.status(200).json("Cart has been deleted");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) {
      return res.status(404).send("Cart not found");
    }
    res.status(200).json(cart);
  } catch (error) {
    rres.status(400).json({ message: error.message });
  }
};

const getAllCarts = async (req, res) => {
  try {
    const carts = await CartModel.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  getAllCarts,
  getUserCart,
};
