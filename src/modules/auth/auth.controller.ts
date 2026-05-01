import {
  type NextFunction,
  type Request,
  type Response,
  Router,
} from "express";

const router = Router();

router.post("/signup", (req: Request, res: Response, next: NextFunction) => {


  // callservice logic for signup here


  res.send("Signup endpoint");
});

export default router;
