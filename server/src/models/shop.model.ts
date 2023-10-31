import mongoose, { Schema, Document } from "mongoose";

export interface IShop extends Document {
  shop_id: string;
  shop_name: string;
  category: string;
  address: string;
  latitude: number;
  longitude: number;
  images: string[];
  services: string[];
  times: string[];
  booked: Record<string, Record<string, string[]>>;
  about: string;
  ratings: number;
  reviews: string[];
}

const shopSchema: Schema = new Schema({
  shop_id: String,
  shop_name: String,
  category: String,
  address: String,
  latitude: Number,
  longitude: Number,
  images: [String],
  services: [String],
  times: [String],
  booked: Object, // Store booked times in a nested object
  about: String,
  ratings: Number,
  reviews: [String],
});

export default mongoose.model<IShop>("shops", shopSchema);
