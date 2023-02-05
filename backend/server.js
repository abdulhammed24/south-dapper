import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/db.js";
import productRoute from "./routes/productRoute.js";
import authRoute from "./routes/authRoute.js";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";

const app = express();
dotenv.config();
dbConnect();

// important
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.get("/", async (req, res) => {
  res.send("Backend server is ready");
});

// products
app.use("/api/products", productRoute);
// auth
app.use("/api/auth", authRoute);

// error handler
app.use(notFound);
app.use(errorHandler);

// create server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
