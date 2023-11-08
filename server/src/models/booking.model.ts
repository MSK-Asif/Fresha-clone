// models/booking.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IBooking extends Document {
  userEmail: string;
  shopName: string;
  serviceName: string[];
  teamName: string;
  date: string;
  time: string;
  services: [];
}

const BookingSchema = new Schema({
  userEmail: { type: String, required: true },
  shopName: { type: String, required: true },
  serviceName: [{ type: String, required: true }],
  teamName: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  services: { type: Array },
});

export default mongoose.model<IBooking>("Booking", BookingSchema);
