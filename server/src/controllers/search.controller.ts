require("dotenv").config();
import express, { Request, Response } from "express";
import shops, { IShop } from "../models/shop.model";
import services, { IService } from "../models/shopServices.model";

export const findShops = async (req: Request, res: Response) => {
  //const { service, location, email, date, time } = req.body;
 // console.log(req.body);

    try {
       //const { service, location} = req.body;
        const service = 'sr9';
        const location = 'london';

      // Create an array to build the aggregation pipeline
      const pipeline = [];

      if (service) {
        // Add a $match stage to filter by service
        pipeline.push({ $match: { services: service } });
      }

      if (location) {
        // Add a $match stage to filter by location (address)
        pipeline.push({
          $match: { address: { $regex: location, $options: "i" } },
        });
      }

    

      // Execute the aggregation pipeline
        const findedshops = await shops.aggregate(pipeline);
        console.log(findedshops);

      res.json(findedshops);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
};
