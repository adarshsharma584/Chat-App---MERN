import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import {ConnectDB} from "./utils/dbConnection.js";

dotenv.config(
    {
        path: "./.env"
    }
);

const app = express();
ConnectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.use("/api/v1/user",userRouter);

app.listen(3000,()=>{
    console.log("the server is running on port 3000!");
});