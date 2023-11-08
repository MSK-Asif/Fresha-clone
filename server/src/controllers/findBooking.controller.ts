import Booking, { IBooking } from "../models/booking.model";
import express, { Request, Response } from "express";
// ...

export const findUserBooking = async (req: Request, res: Response) => {
  const email = req.query.email as string; 

  try {

    console.log('req==', email);
    const bookingData = await Booking.findOne({ userEmail: email });

    console.log("Booking Data:", bookingData);

    res.json(bookingData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
