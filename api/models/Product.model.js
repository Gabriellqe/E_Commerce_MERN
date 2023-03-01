const mongoose = require("mongoose");

const productSchemaSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String, require: true },
    img: { type: Object, require: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
