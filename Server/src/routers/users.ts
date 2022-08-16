import express, { Request, Response, NextFunction } from "express";

const users = express.Router();

users.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("dhk 연걸");
});

export = users;