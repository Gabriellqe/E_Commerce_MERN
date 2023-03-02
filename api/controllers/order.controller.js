const OrderModel = require("../models/Order.model");

const createOrder = async (req, res) => {
  const newOrder = new OrderModel(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(501).json(error);
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const OrderDeleted = await OrderModel.findByIdAndDelete(req.params.id);
    if (!OrderDeleted) {
      return res.status(404).send("Order not found");
    }
    res.status(200).json("Order has been deleted");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserOrder = async (req, res) => {
  try {
    const Order = await Order.find({ userId: req.params.userId });
    if (!Order) {
      return res.status(404).send("Order not found");
    }
    res.status(200).json(Order);
  } catch (error) {
    rres.status(400).json({ message: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const Orders = await OrderModel.find();
    res.status(200).json(Orders);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getStatsOrders = async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await OrderModel.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      { $project: { month: { $month: "$createdAt" }, sales: "$amount" } },
      { $group: { _id: "$month", total: { $sum: "$sales" } } },
    ]);

    res.status(200).json(income);
  } catch (error) {
    res.status(500).json(err);
  }
};

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
  getUserOrder,
  getStatsOrders,
};
