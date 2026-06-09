import contactRouter from "./contactRouter.js";
import productRouter from "./producteRouter.js";
import userRouter from "./userRouter.js";
import express from "express";


const mainRouter= express.Router();

mainRouter.use("/product", productRouter);
mainRouter.use("/contact", contactRouter);
mainRouter.use("/user", userRouter)

export default mainRouter;




// import producteRouter from "./producteRouter.js"
// import { Router } from "express";

// const mainRouter=Router();
// mainRouter.use("/product", producteRouter)

// export default mainRouter;