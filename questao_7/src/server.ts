import express, { Request, Response } from "express";
import { NextFunction } from "express";
import { CategoryRoutes } from "./routes/category.routes";

const app = express();

app.use(express.json());

// Add headers
app.use(function (req: Request, res: Response, next: NextFunction) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Pass to next layer of middleware
  next();
});

app.use(CategoryRoutes);

app.listen(3000, () => console.log("Server is running on PORT 3000"));
