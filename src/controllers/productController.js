import { response } from "express";
import Product from "../model/productModel.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";

//creat product
export const creatProduct = async (req, res) => {
  try {
    const { productName, productPrice, productCategory, productDescription } =
      req.body;

          // 1. vérifier image
    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }
     // 2. upload vers cloudinary
    const result = await uploadToCloudinary(req.file.buffer);


console.log(req.file);
    const product = new Product({
      productName,
      productPrice,
      productCategory,
      productDescription,
      imageUrl: result.secure_url,
      imagePublicId: result.public_id
    });
    const saveProduct = await product.save();
    res.status(201).json({
      message: "Product created successfully",
      data: saveProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      
      message: "Product failed create",
      error: error.message,
    });
  }
};

//fetch all product
export const getProducts = async (req, res) => {
 
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Products fetched successfully",
      data: products,
    });
    
  } catch (error) {
    res.status(500).json({
      message: "Error fetching products",
      error: error.message,
    });
  }
};

//fetch one product
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.status(200).json({
      message: "Product fetched successfuly",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "error fetching product",
      error: error.message,
    });
  }
};

//delete product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteProduct = await Product.findByIdAndDelete(id);
    res.status(200).json({
      message: "product deleted successfully",
      data: deleteProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "error deleting product",
      error: error.message,
    });
  }
};

//delete all product

export const deleteAllProducts = async (req, res) => {
  try {
    const result = await Product.deleteMany({});

    res.status(200).json({
      message: "All products deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting products",
      error: error.message,
    });
  }
};

//update product

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const { productName, productPrice, productCategory, productDescription }=req.body;

    const updateProduct = await Product.findByIdAndUpdate(id,
     {  productName,
      productPrice,
      productCategory,
      productDescription,
     },
       {new: true}
    );

    res.status(200).json({
      message: "Product updated successfully",
      data: updateProduct
    })
  
  } catch (error) {
    res.status(500).json({
      message:"Error updating product",
      error: error.message
    })
  }
};

