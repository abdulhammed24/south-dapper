import express from "express";

import { createProduct, getProducts } from "../controllers/productCtrl.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

// create product
// only admin
router.post("/create", verifyToken, createProduct);

// get all products
router.get("/", getProducts);

export default router;
