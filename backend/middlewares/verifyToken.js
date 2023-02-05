import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const verifyToken = asyncHandler(async (req, res, next) => {
  let token;

  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        //find the user by id
        const user = await User.findById(decoded?.id).select("-password");
        //attach the user to the request object
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not authorized token expired, login again");
    }
  } else {
    throw new Error("There is no token attached to the header");
  }
});

// export const verifyTokenandAdmin = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     next();
//   } else {
//     res.status(401);
//     throw new Error("Not authorized as an admin");
//   }
// };
