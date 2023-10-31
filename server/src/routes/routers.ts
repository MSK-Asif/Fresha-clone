import { Router, Request, Response, NextFunction } from "express";
import { userLogin, userRegistration } from "../controllers/user.controller";
import { profileInfo } from "../controllers/profile.controller";
import { allShopInfo, shopInfo } from "../controllers/shop.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Home page");
});


router.post("/login", userLogin); //login route
router.post("/register", userRegistration); //registrarion route


router.get("/profile", profileInfo);//profile



router.get("/shop-data", allShopInfo);//All shop data

router.get("/select/:id", shopInfo);//single shop details

//search
router.get("/search", (req: Request, res: Response) => {
  res.send("Search page");
}) 


router.get("/shop-details", (req: Request, res: Response) => {
    
})

//shop cart
router.post("/shop-cart", (req: Request, res: Response) => {
    
})

//confirmation
router.post("/confirmation", (req: Request, res: Response) => {
    
})

//route not found middleware
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(404).send("Route Not Found");
});


export { router };