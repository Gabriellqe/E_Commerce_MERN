const express = require("express");
const router = express.Router();

const {
  createCart,
  updateCart,
  deleteCart,
  getAllCarts,
  getUserCart,
} = require("../controllers/Cart.controller");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

router
  .route("/")
  .get(verifyTokenAndAdmin, getAllCarts)
  .post(verifyToken, createCart);

router
  .route("/:id")
  .get(verifyTokenAndAuthorization, getUserCart)
  .put(verifyTokenAndAuthorization, updateCart)
  .delete(verifyTokenAndAuthorization, deleteCart);

module.exports = router;
