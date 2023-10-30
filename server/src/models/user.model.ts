// import { InferSchemaType, Schema, model } from "mongoose";
import mongoose from "mongoose";


// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  createdOn?: any;
}


// 2. Create a Schema corresponding to the document interface.

const userSchema = new mongoose.Schema<IUser>({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String},
  password: { type: String},
  phone: { type: String },
  createdOn: { type: Date, default: Date.now },
});
// const userSchema = new mongoose.Schema<IUser>({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true, select: false },
//   phone: { type: String, required: true },
//   createdOn: { type: Date, default: Date.now },
// });

// 3. Create a Model.
const UserModel = mongoose.model<IUser>("User", userSchema);//create model


export default UserModel ;
