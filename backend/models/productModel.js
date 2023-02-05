import mongoose from "mongoose";

//create schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    star: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imageOne: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Compile schema into model

export default mongoose.model("Product", productSchema);
