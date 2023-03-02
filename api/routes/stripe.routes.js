const express = require("express");
const router = express.Router();
const { createPayment } = require("../controllers/stripe.controller");

router.route("/").post(createPayment);

module.exports = router;
