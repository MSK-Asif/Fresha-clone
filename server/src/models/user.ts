import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
//   role: { type: String, enum: ["admin", "manager", "user"] },
  phone: { type: String }, 
  country: { type: String },
});

type User = InferSchemaType<typeof userSchema>;

const UserModel = model<User>("User", userSchema);//create model
export default UserModel;
