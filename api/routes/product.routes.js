const express = require("express");
const router = express.Router();

const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
} = require("../controllers/product.controller");

const { verifyTokenAndAdmin } = require("../middleware/verifyToken");

router.route("/").get(getAllProducts).post(verifyTokenAndAdmin, createProduct);

router
  .route("/:id")
  .get(getProduct)
  .put(verifyTokenAndAdmin, updateProduct)
  .delete(verifyTokenAndAdmin, deleteProduct);

module.exports = router;
