import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.CONNECTION_URL;

const connectDB = async()=>{
   try {
    await mongoose.connect(connectionString)
    console.log("DB connected successfully")
   } catch (error) {
    console.log("error to connection", error)
   }

}
export default connectDB;
