import { creatProduct, getProducts, getProduct, deleteProduct, deleteAllProducts, updateProduct } from "../controllers/productController.js";
import express from "express";

import { verifyToken } from "../middlewares/authMidlewares.js";
import { verifyAdmin } from "../middlewares/roleMiddleware.js";


const productRouter =express.Router();
//creat product
// productRouter.post("/create", creatProduct);
productRouter.post(
  "/create",
  verifyToken,
  verifyAdmin,
  creatProduct
);
// READ (GET all products)
productRouter.get(
  "/getProducts",
  verifyToken,
  getProducts
);
//READ one product
// productRouter.get("/getproduct/:id", getProduct);
productRouter.get(
  "/getproduct/:id",
  verifyToken,
  getProduct
);
//Delete one product
// productRouter.delete("/deleteProduct/:id", deleteProduct);
productRouter.delete(
  "/deleteProduct/:id",
  verifyToken,
  verifyAdmin,
  deleteProduct
);
//delete all products
// productRouter.delete("/deleteAllProducts", deleteAllProducts);
//update product
// productRouter.put("/updateProduct/:id", updateProduct)
productRouter.put(
  "/updateProduct/:id",
  verifyToken,
  verifyAdmin,
  updateProduct
);

export default productRouter;









// import {createProduct} from "../controllers/productController.js"
// import express, { Router } from "express"

// const producteRouter= Router();
// producteRouter.post("/createProduct", createProduct)

// export default producteRouter