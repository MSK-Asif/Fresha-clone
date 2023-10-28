import express, {  Request, Response, NextFunction } from "express";
// import express, { Application, Request, Response } from "express";
//import mongoose from "mongoose";
import cors from "cors";
import { router } from "./routes/routers";

require("dotenv").config();



const app = express();
require("./config/database");//for Database connection 
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true })); //body te j data rakbo send korar somoy jate recived korte pari
app.use(express.json());

app.use(router);


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
