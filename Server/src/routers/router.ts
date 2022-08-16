import express, { Request, Response, NextFunction } from "express";
import users from "./users";
import camping from './camping'

const router = express.Router();


router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("라우터 연걸");
});

router.use("/users", users)
router.use("/camping", camping)

export = router;