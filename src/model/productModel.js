import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type: Number,
        required: true
    },
    productCategory:{
        type: String,
        required: true
    },
    productDescription:{
        type: String,
        required: false
    }
})

const Product = mongoose.model("products", productSchema)

export default Product;