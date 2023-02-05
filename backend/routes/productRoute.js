import express from "express";

import {
  createProduct,
  getProduct,
  getProducts,
} from "../controllers/productCtrl.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

// create product
// only admin
router.post("/create", verifyToken, createProduct);

// get all products
router.get("/", getProducts);

// get single products
router.get("/:id", getProduct);

export default router;
