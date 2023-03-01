const UserModel = require("../models/User.model");

const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }
  try {
    const updateUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = (req, res) => {};
const getUser = (req, res) => {};
const getAllUsers = (req, res) => {};
const getStatsUser = (req, res) => {};

module.exports = { updateUser, deleteUser, getUser, getAllUsers, getStatsUser };
