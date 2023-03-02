const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const connectDB = require("./db/connect");
const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");
const productsRoute = require("./routes/product.routes");
const cartRoute = require("./routes/cart.routes");
const orderRoute = require("./routes/order.routes");

require("dotenv").config();
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/products", productsRoute);
app.use("/api/v1/cart", cartRoute);
app.use("/api/v1/orders", orderRoute);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
