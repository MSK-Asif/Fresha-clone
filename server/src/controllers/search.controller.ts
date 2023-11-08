require("dotenv").config();
import express, { Request, Response } from "express";
import shops, { IShop } from "../models/shop.model";
import services, { IService } from "../models/shopServices.model";

export const findShops = async (req: Request, res: Response) => {
  //const { service, location, email, date, time } = req.body;
const id = req.params.id;
const location = req.params.location;
  console.log('1==', id, '2===', location);

  try {
      
       //const { service, location} = req.body;
      const service = id;
        const loc = location;

      // Create an array to build the aggregation pipeline
      const pipeline = [];

      if (service) {
        // Add a $match stage to filter by service
        pipeline.push({ $match: { services: service } });
      }

      if (loc) {
        // Add a $match stage to filter by location (address)
        pipeline.push({
          $match: { address: { $regex: loc, $options: "i" } },
        });
      }

    

    // Execute the aggregation pipeline
    if (!id && !loc) {
      const findedAllshops = await shops.find();
      console.log(findedAllshops);
      res.json(findedAllshops);
    }
    else { 
      const findedshops = await shops.aggregate(pipeline);
      res.json(findedshops);
    }
       
        // console.log(findedshops);

      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
};
