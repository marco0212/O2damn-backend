import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index";
import { CustomError, errorHandler } from "./lib/error";

import "./db";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use(function (req, res, next) {
  next(new CustomError(404, "Not Found"));
});

app.use(function (err, req, res, next) {
  errorHandler(err, res);
});

module.exports = app;
