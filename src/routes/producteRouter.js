import {createProduct} from "../controllers/productController.js"
import express, { Router } from "express"

const producteRouter= Router();
producteRouter.post("/createProduct", createProduct)

export default producteRouter