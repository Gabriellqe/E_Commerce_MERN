const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: String, require: true },
  products: [
    { productId: { type: String }, quanity: { type: Number, default: 1 } },
  ],
});
module.exports = mongoose.model("Cart", cartSchema);
