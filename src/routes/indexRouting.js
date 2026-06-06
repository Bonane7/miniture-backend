import producteRouter from "./producteRouter.js"
import { Router } from "express";

const mainRouter=Router();
mainRouter.use("/product", producteRouter)

export default mainRouter;