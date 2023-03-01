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
} = require("../middleware/verifyToken");

router.route("/:id").put(verifyTokenAndAuthorization, updateUser);

module.exports = router;
