//4 db connection

// require("dotenv").config();
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();


mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1); /// Exit the process with an error code
    // console.error("Error connecting to MongoDB:", error);
  });