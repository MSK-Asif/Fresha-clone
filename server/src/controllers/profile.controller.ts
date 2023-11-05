import jwt from "jsonwebtoken";
require("dotenv").config();
import express, { Request, Response } from "express";
import UserModel, { IUser } from "../models/user.model";
//import { verifyToken } from "./verifyToken"; // Import the verifyToken middleware
const app = express();
const secretKey = `${process.env.SECRET_KEY}`;
// ...

export const profileInfo = async (req: Request, res: Response) => {
  //try {
  // console.log(req.cookies["auth-token"]); //front end token

  const token = req.cookies["auth-token"]; // Assuming the token is stored in a cookie

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decodedToken = jwt.verify(token, secretKey) as IUser;//{id:kk, email:,kk}
    // console.log('dt==>', decodedToken);
    // console.log(decodedToken.id, decodedToken.email);
    const email = decodedToken.email;
    const user = await UserModel.findOne({ email }).exec();//find the user from db   
    // console.log(user);
    
  return res.json({user });
  //     const userId: string = req.user?.id; // Now TypeScript recognizes 'user'
  //     const userEmail: string = req.user?.email; // Now TypeScript recognizes 'user'

  //     // Retrieve the user data from the database using the id or email
  //     const user = await User.findOne({
  //       $or: [{ _id: userId }, { email: userEmail }],
  //     });

  //     if (!user) {
  //       return res.status(404).json({ message: "User not found" });
  //     }

  //     // Send the user's data as a JSON response
  //     res.json({ name: user.name, email: user.email });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: "Internal Server Error" });
  //  }
};
