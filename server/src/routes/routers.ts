import { Router, Request, Response, NextFunction } from "express";
import { userLogin, userRegistration } from "../controllers/user.controller";
import { profileInfo } from "../controllers/profile.controller";
import { allShopInfo, shopInfo } from "../controllers/shop.controller";
import { createBooking} from "../controllers/booking.controller";
import { findShops } from "../controllers/search.controller";
import { findUserBooking } from "../controllers/findBooking.controller";
import { createOwnerBooking } from "../controllers/business.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Home page");
});


router.post("/login", userLogin); //login route
router.post("/register", userRegistration); //registrarion route


router.get("/profile", profileInfo);//profile



router.get("/shop-data", allShopInfo);//All shop data

router.get("/select/:id", shopInfo);//single shop details

router.post("/serviceBooking", createBooking);//book service

router.post("/business", createOwnerBooking);//book service


//search
router.get("/search/:id/:location", findShops); 



router.get("/findBooking", findUserBooking)

//route not found middleware
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(404).send("Route Not Found");
});


export { router };