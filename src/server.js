import express from "express";
import dotenv from 'dotenv';
const app = express();
dotenv.config();
import mainRouter from "./routes/indexRouting.js";

import mongoDbConnect from "./dbconfig/connectionDb.js";

const port = process.env.PORT || 7000;

app.use(express.json());
app.use("/api_v1",mainRouter);
app.listen(port, ()=>{
    mongoDbConnect();
    console.log(`server runing on http://localhost: ${port}`)
});
