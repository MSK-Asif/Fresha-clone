
require("dotenv").config();
import express, { Request, Response } from "express";
import UserModel, { IUser } from "../models/user.model";
import shops, { IShop } from "../models/shop.model";
import services, { IService } from "../models/shopServices.model";

export const allShopInfo = async (req: Request, res: Response) => {
  try {
      const shopsData = await shops.find();
    //   console.log(shopsData);
    res.json(shopsData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
export const shopInfo = async (req: Request, res: Response) => {
    // console.log(req.params.id);
    try {
      
      const shop = await shops.findOne({ shop_id: req.params.id });//query to find shops by id
      const serviceIdsToFind = shop?.services;
      // const shopServices = await services.find({ service_id });
      const shopServices = await services.find({service_id: { $in: serviceIdsToFind }});

      // console.log(shop);
      // console.log(shopServices);
        if (shopServices) {
          console.log({ shop, shopServices });
          res.json({ shop, shopServices });
    } else {
      res.status(404).json({ error: "Shop not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
