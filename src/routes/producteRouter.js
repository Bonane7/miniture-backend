import { creatProduct, getProducts, getProduct, deleteProduct, deleteAllProducts, updateProduct } from "../controllers/productController.js";
import express from "express";


const productRouter =express.Router();
//creat product
productRouter.post("/create", creatProduct);
// READ (GET all products)
productRouter.get("/getProducts", getProducts);
//READ one product
productRouter.get("/getproduct/:id", getProduct);
//Delete one product
productRouter.delete("/deleteProduct/:id", deleteProduct);
//delete all products
productRouter.delete("/deleteAllProducts", deleteAllProducts);
//update product
productRouter.put("/updateProduct/:id", updateProduct)

export default productRouter;









// import {createProduct} from "../controllers/productController.js"
// import express, { Router } from "express"

// const producteRouter= Router();
// producteRouter.post("/createProduct", createProduct)

// export default producteRouter