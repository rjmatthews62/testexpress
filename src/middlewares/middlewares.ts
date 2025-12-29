// middlewares.ts
import { RequestHandler } from "express";
import moment from "moment";

export const middleware: RequestHandler = (req, res) => {
  res.send("Hello World (from Robbie)");
};

export const middlewareLog: RequestHandler = (req, res, next) => {
  console.log(`${moment().format("YYYYMMDD HHmmss")} ${req.method} ${req.originalUrl}`);
  next();
};
