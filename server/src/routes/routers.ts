import { Router, Request, Response, NextFunction } from "express";
import { userLogin, userRegistration } from "../controllers/user.controller";
import { profileInfo } from "../controllers/profile.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Home page");
});

//login
router.post("/login", userLogin); //login route

//registrarion route
router.post("/register", userRegistration); 

//profile
router.get("/profile", profileInfo);


//recommanded
router.get("/", (req: Request, res: Response) => {
  res.send("Home page");
})

//search
router.get("/search", (req: Request, res: Response) => {
  res.send("Search page");
}) 

//shop details
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