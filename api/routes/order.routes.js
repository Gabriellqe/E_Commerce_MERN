const express = require("express");
const router = express.Router();

const {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
  getUserOrder,
  getStatsOrders,
} = require("../controllers/Order.controller");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

router
  .route("/")
  .get(verifyTokenAndAdmin, getAllOrders)
  .post(verifyToken, createOrder);

router
  .route("/:id")
  .get(verifyTokenAndAuthorization, getUserOrder)
  .put(verifyTokenAndAdmin, updateOrder)
  .delete(verifyTokenAndAdmin, deleteOrder);

router.route("/income").get(verifyTokenAndAdmin, getStatsOrders);

module.exports = router;
