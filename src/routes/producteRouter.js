import { creatProduct } from "../controllers/productController.js";
import {Router} from "express";


const productRouter = Router();

productRouter.post("/create", creatProduct);

export default productRouter;









// import {createProduct} from "../controllers/productController.js"
// import express, { Router } from "express"

// const producteRouter= Router();
// producteRouter.post("/createProduct", createProduct)

// export default producteRouter