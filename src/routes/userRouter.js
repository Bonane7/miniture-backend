import { registerUser } from "../controllers/userController.js";
import express from "express";


const userRouter = express.Router()

userRouter.post("/create", registerUser)


export default userRouter;