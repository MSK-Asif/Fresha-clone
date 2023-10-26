import express, {  Request, Response, NextFunction } from "express";
// import express, { Application, Request, Response } from "express";
//import mongoose from "mongoose";
import cors from "cors";
import userRegistration from "./controllers/user.controller";
require("dotenv").config();



const app = express();
require("./config/database");//for Database connection 
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true })); //body te j data rakbo send korar somoy jate recived korte pari
app.use(express.json());

//home route
app.get("/", (req: Request, res: Response) => {
  res.send("Home page");

});

//login route
app.post("/login", (req: Request, res: Response) => {
  res.send("Login page");
})

//registrarion route
app.post("/register", userRegistration);
// app.post("/register", (req: Request, res: Response) => {
//   res.send("Registration page");
//   console.log("run");
// })

//profile route
app.get("/profile", (req: Request, res: Response) => {
  res.send("Profile page");
})

//route not found middleware
app.use((err:Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  console.log("jello");
  res.status(404).send("Route Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
