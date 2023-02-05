import asyncHandler from "express-async-handler";
import generateToken from "../config/generateToken.js";
import User from "../models/userModel.js";

// register
export const register = asyncHandler(async (req, res) => {
  const { email } = req.body;

  //Check if user Exist
  const userExists = await User.findOne({ email });

  if (userExists) throw new Error("User already exists");
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      country: req.body.country || "Not Added",
      city: req.body.city || "Not Added",
      address: req.body.address || "Not Added",
      phone: req.body.phone || "Not Added",
      image: req.body.image || "user.png",
    });
    res.status(200).json(user);
  } catch (error) {
    res.json(error);
  }
});

// login
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check if user exists
  const user = await User.findOne({ email });
  if (user && (await user.isPasswordMatched(password))) {
    //Check if password is match
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      country: user.country || "Not Added",
      city: user.city || "Not Added",
      address: user.address || "Not Added",
      phone: user.phone || "Not Added",
      image: user.image || "user.png",
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Login Credentials");
  }
});
