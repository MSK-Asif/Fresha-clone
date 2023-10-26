import { Request, RequestHandler, Response } from "express";
import bcrypt from "bcrypt";
import UserModel from "../models/user.model";
import jwt from "jsonwebtoken";

const userRegistration: RequestHandler = async (req: Request, res: Response) => {
    //   res.send("Registration page");
    const bdy  = req.body;
    await console.log(bdy);
    // const { username, email, password, role } = req.body;
  //   const saltRound = 10;
  try {
    //check for missing fields
    // if (!firstName || !lastName || !email || !password || !phone) {
    //   return res.json({ message: "Parameters missing" });
    //   }
      
    //check if email already exist in database
    // const existingEmail = await UserModel.findOne({ email }).exec(); //ck again
    // if (existingEmail) {
    //   return res.json({ message: "already email exist" });
    // }

    //hash password
    //const passwordHashed = await bcrypt.hash(password, saltRound); //take password from req.body
    // return console.log(req.body);

    //create new user
    // const newUser = await UserModel.create({
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   password: password,
    //   phone: phone,
    // });

    // Generate JWT
    // const token = jwt.sign({ userId: newUser._id, username }, secretKey, {
    // 	expiresIn: "1h", // Set the token expiration time (1 hour)
    // });
    // 	res.cookie("auth-token", token, cookieOptions);
    // 	// Return the token in the response
      
      res.json({
    		message: "User created successfully",
    		// data: email,
    		//token,
    	});
    // // } catch (error) {
    // 	console.log(error);
    // 	return res.send("server error");
    // }
  } catch (error) {
      console.log(error);
      return res.send("server error");
  }
};
export default userRegistration;