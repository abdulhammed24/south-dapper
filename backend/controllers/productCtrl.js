import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// create a new product
export const createProduct = asyncHandler(async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all products
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.send(products);
});
