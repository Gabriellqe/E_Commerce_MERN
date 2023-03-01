const UserModel = require("../models/User.model");
const CryptoJS = require("crypto-js");

const registerUser = async (req, res) => {
  const newUser = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json("Wrong user credentials");
    }
    const hasedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const Originalpassword = hasedPassword.toString(CryptoJS.enc.Utf8);
    if (Originalpassword !== req.body.password) {
      return res.status(401).json("Wrong pass credentials");
    }

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { registerUser, loginUser };
