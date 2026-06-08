import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection_string = process.env.CONNECTION_URL

const connectDb = async()=>{

try{
 await  mongoose.connect(connection_string)
 console.log("connection db successfuly")

}catch(error){
console.log("error to connect mongodb",error)
connect.exit(1)
}

}
export default connectDb
