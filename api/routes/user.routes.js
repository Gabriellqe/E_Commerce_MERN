const express = require("express");
const router = express.Router();
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getStatsUser,
} = require("../controllers/user.controller");

router.route("/user").post(updateUser);

module.exports = router;
