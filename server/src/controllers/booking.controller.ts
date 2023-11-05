import { Request, RequestHandler, Response } from "express";
import Booking, { IBooking } from "../models/booking.model";
import stripe from "stripe";

const stripeSecretKey = 'sk_test_51O81O4A0tyF9kOksQm3Hvhu13lrCecAd2WxZiO0aeROgAjnC5Bxq42tzUcWLctQXDagAxhO7s0PNUcw2RpyxqW7d00LBBb0UD5'
const redirectBaseUrl = 'http://localhost:4200';
export const createBooking: RequestHandler = async (req: Request, res: Response): Promise<any> => {
  try {
      console.log(req.body);
    const session = await createStripeSession(req.body);
    const { userEmail, shopId, serviceId, teamName, date, time } = req.body;
    const newBooking: IBooking = new Booking({
      userEmail,
      shopId,
      serviceId,
      teamName,
      date,
      time,
    });
    await newBooking.save();
    res.json({url: session.url});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
    } 
};


  const createStripeSession = async (data:any): Promise<any> => {
    const stripeInstance = new stripe(stripeSecretKey);

    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: data.services.map((item:any) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.service_name,
            },
            unit_amount: item.price*100,
          },
          quantity: 1,
        };
      }),
      mode: "payment",
      success_url: `${redirectBaseUrl}/profile`,
      cancel_url: `${redirectBaseUrl}`,
    });

    return session;
}
//   https://checkout.stripe.com/c/pay/cs_test_a1SpOvqE…WBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl
// "https://checkout.stripe.com/c/pay/cs_test_a1dWUwHZlZXUKFvEG8Aa7jTScUdAPX5sJnMirh9xRR0S711rpuI1BWK4rb#fidkdWxOYHwnPyd1blpxYHZxWjA0Sj00SjFENXF8QzxuSm52MWpOfzBUTFBPclBWPF1xQXJdNWFGYHxjRkR8VVNtYH9wNUt1PGRDbj02Y2pOfGFKcWx9djZGVm1mQmNtdUFff3V3azFGbDFoNTV9bn12a3RiQScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl";