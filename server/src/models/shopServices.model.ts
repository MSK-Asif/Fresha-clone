import mongoose, { Schema, Document } from "mongoose";

export interface IService extends Document {
  service_id: string;
  service_name: string;
  price: number;
  category: string;
  duration: string;
}

const serviceSchema: Schema = new Schema({
  service_id: String,
  service_name: String,
  price: Number,
  category: String,
  duration: String,
});

export default mongoose.model<IService>("services", serviceSchema);
