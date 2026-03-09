import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
// import {productRouter} from "./routes/productRoute.js";
import { storeRouter } from "./routes/storeRoute.js";
const app = express();
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
dotenv.config()

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use("/", storeRouter);
// app.use("/auth", authRouter);
// app.use("/products", productRouter);
// app.use("/users", userRouter);


const startserver= async ()=>{
   await dbConnect()   //db connect ia await asynchronous in db.js so it return promise
   app.listen(5000, () => {
  console.log("Server Started");
});
   
};

startserver();

 