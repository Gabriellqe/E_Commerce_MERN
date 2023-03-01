const express = require("express");
const router = express.Router();
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getStatsUser,
} = require("../controllers/user.controller");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

router
  .route("/:id")
  .put(verifyTokenAndAuthorization, updateUser)
  .delete(verifyTokenAndAuthorization, deleteUser);

router.route("/find/").get(verifyTokenAndAdmin, getAllUsers);
router.route("/find/:id").get(verifyTokenAndAdmin, getUser);
router.route("/stats").get(verifyTokenAndAdmin, getStatsUser);

module.exports = router;
