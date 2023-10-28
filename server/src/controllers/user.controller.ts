import { Request, RequestHandler, Response } from "express";
import bcrypt from "bcrypt";
import UserModel, { IUser } from "../models/user.model";
import jwt from "jsonwebtoken";
require("dotenv").config();

const cookieOptions = {
  httpOnly: true,
  maxAge: 86400000, // Cookie expires in 1 day (in milliseconds)
};
const secretKey = `${process.env.SECRET_KEY}`;

//=====================================registration==========================================================
 export const userRegistration: RequestHandler = async (req: Request,res: Response) => {
  const { firstName, lastName, email, password, mobile } = req.body;
  //console.log("hi",req.body);
  const saltRound = 10;

  try {
    //check for missing fields
    if (!firstName || !lastName || !email || !password || !mobile) {
      return res.json({ message: "Some field is missing" });
    }

    //check if email already exist in database
    const existingEmail = await UserModel.findOne({ email }); //.exec(); //ck again
    if (existingEmail) {
      return res.json({ message: "Email already exist" });
    }

    //password convert to hash password
    const passwordHashed = await bcrypt.hash(password, saltRound); //take password from req.body

    //create new user
    const newUser = await UserModel.create({//Save into DB
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: passwordHashed,
      phone: mobile,
    });

    // Generate JWT
    const token = jwt.sign({ id: newUser._id, email: newUser.email }, secretKey, {
      expiresIn: "1d",
    });
    //console.log(token);
    res.cookie("auth-token", token, cookieOptions); // Return the token in the cookie as response

    res.json({
      message: "User is created successfully",
      user: newUser,
      token:token,
    });
    // }
  } catch (error: any) {
    // console.log(error);
    res.status(500).send(error.message);
    // res.send("server error");
  }
};
//==================================================login=======================================================================
export const userLogin: RequestHandler = async (req: Request, res: Response) => {
  // console.log(req.body);
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.json({ message: "Email or password is missing" });
    }

    const user: any = await UserModel.findOne({email}).exec();//user find by email
    console.log("user=", user, user.email, user.password);
    //return res.json(user);

      if (!user) {
        return res.json({ message: "Email not valid. Sign up first." });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.json({ message: "Wrong password."});
    }
    // else{return res.json({ message: "success."});}

    //   // Generate JWT
      const token = jwt.sign(
        { id: user._id, email: user.email },
        secretKey,
        {
          expiresIn: "1 d", 
        }
      );

    // Set the JWT as an HTTP cookie
      res.cookie("auth-token", token, cookieOptions);
      return res.status(200).json({
        message: "successfully login",
        user:user,
        token: token,
      });
  } catch (error) {
    console.log(error);
    return res.send("server error");
  }
};


