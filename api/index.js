const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const connectDB = require("./db/connect");
const userRoute = require("./routes/user.routes");
const authRoute = require("./routes/auth.routes");

require("dotenv").config();
app.use(express.json());
app.use("/api/v1", authRoute);
app.use("/api/v1/user", userRoute);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
