const ProductModel = require("../models/Product.model");

const createProduct = async (req, res) => {
  const newProduct = new ProductModel(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(501).json(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productDeleted = await ProductModel.findByIdAndDelete(req.params.id);
    if (!productDeleted) {
      return res.status(404).send("Product not found");
    }
    res.status(200).json({ Productdeleted: productDeleted.title });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.status(200).json(product);
  } catch (error) {
    rres.status(400).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await ProductModel.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await ProductModel.find({ categories: { $in: [qCategory] } });
    } else {
      products = await ProductModel.find();
    }

    if (!products) {
      return res.status(404).send("Users not found");
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
};
