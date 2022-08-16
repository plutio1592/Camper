import express, { Request, Response, NextFunction } from "express";

const camping = express.Router()

camping.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("camping connect")
})

export = camping;