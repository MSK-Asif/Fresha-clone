// models/booking.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IBooking extends Document {
  userEmail: string;
  shopId: string;
  serviceId: string[];
  teamName: string;
  date: string;
  time: string;
}

const BookingSchema = new Schema({
  userEmail: { type: String, required: true },
  shopId: { type: String, required: true },
  serviceId: [{ type: String, required: true }],
  teamName: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

export default mongoose.model<IBooking>("Booking", BookingSchema);
