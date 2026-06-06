    import Product from "../model/productModel.js";

    export const createProduct = async (req, res) => {
    try {
        const { productName, productPrice, productCategory, productDescription } =
        req.body;

        const product = new Product({
        productName,
        productPrice,
        productCategory,
        productDescription,
        });

        const saveProduct = product.save();
        res.status(201).json({
        message: "Product creat successfully",
        data: await saveProduct,
        });
    } catch (error) {
        res.status(500).json({
        message: "Error Creating Product",
        error: error.message,
        });
    }
    };
 