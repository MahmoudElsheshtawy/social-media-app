import type { NextFunction, Request, Response } from "express";
import { Router } from "express";
import authService from "./auth.service";

const router = Router();

router.post("/signup", (req: Request, res: Response, next: NextFunction) => {

     
  // callservice logic for signup here
  // authService.signup(req.body)

  // res.send("Signup endpoint");
});

export default router;
