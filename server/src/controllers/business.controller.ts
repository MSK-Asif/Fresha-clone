import { Request, RequestHandler, Response } from "express";
import Booking, { IBooking } from "../models/booking.model";
import stripe from "stripe";
import shops, { IShop } from "../models/shop.model";

export const createOwnerBooking: RequestHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    console.log("ll", req.body.data);
    const shop_id = "sh101";
    const date = "2023-11-10";
    for (const { time, team } of req.body.data) {
      console.log("t", time, "tm", team);

      const shop = await shops.findOne({ shop_id: shop_id });

      if (shop) {
        shop.booked[team][date] = [];
        console.log("hwllo jogn", shop.booked[team][date]);
        // for (let date of shop.booked[team]) {
        //     console.log("date", date);
        // }
          shop.booked[team][date].push(time);
          console.log(shop)
        await shops.findOneAndUpdate({ shop_id: shop_id }, shop);
      }
    }

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
