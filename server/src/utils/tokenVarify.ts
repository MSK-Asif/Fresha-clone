import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
require("dotenv").config();

const secretKey = `${process.env.SECRET_KEY}`;
export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies["auth-token"]; // Assuming the token is stored in a cookie
  console.log("prf tkn", token); //take front end token

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secretKey, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: "Token is not valid" });
    }

    req.body.User = decoded; // Store the user information in the request
    next();
  });
}
