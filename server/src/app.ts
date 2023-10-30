import express, {  Request, Response, NextFunction } from "express";
// import express, { Application, Request, Response } from "express";
//import mongoose from "mongoose";
import cors from "cors";
import { router } from "./routes/routers";
import cookieParser from 'cookie-parser';
require("dotenv").config();



const app = express();
require("./config/database");//for Database connection 
const PORT = process.env.PORT || 3000;

const corsConfig = {
  origin: ["http://localhost:4200"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

// middlewares
app.use(cors(corsConfig));
app.use(express.urlencoded({ extended: true })); //body te j data rakbo send korar somoy jate recived korte pari
app.use(cookieParser());
app.use(express.json());

app.use(router);


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
