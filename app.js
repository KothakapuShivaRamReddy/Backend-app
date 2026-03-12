import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import { authenticateAdmin } from "./middleware/auth.js";
import productRouter from "./routes/productRoute.js"
import storeRouter  from "./routes/storeRoute.js";
import homeRouter from "./routes/homeRoute.js";
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
import cors from "cors";//frontend->backend




const app = express();
app.use(cors());
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());//used for body prase
app.use(express.static("public"));
dotenv.config()
app.set("layout","layout")
app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
  }),
);
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});
app.use("/auth", authRouter);
app.use("/store", storeRouter);
app.use("/", authenticateAdmin, homeRouter);
app.use("/products", authenticateAdmin, productRouter);
app.use("/users", authenticateAdmin, userRouter);



const startserver= async ()=>{
   await dbConnect()   //db connect ia await asynchronous in db.js so it return promise
   app.listen(5000, () => {
  console.log("Server Started");
});
   
};

startserver();

 