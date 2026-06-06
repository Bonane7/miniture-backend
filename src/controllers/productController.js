import Product from "../model/productModel.js";

export const creatProduct = async (req, res) => {
  try {
    const { productName, productPrice, productCategory, productDescription } =
      req.body;

    const product = new Product({
      productName,
      productPrice,
      productCategory,
      productDescription,
    });
    const saveProduct = await product.save();
    res.status(201).json({
      message: "Product created successfully",
      data: saveProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Product failed create",
      error: error.message,
    });
  }
};

// import Product from "../model/productModel.js";

// export const createProduct = async (req, res) => {
// try {
//     const { productName, productPrice, productCategory, productDescription } =
//     req.body;

//     const product = new Product({
//     productName,
//     productPrice,
//     productCategory,
//     productDescription,
//     });

//     const saveProduct = await product.save();
//     res.status(201).json({
//     message: "Product creat successfully",
//     data: saveProduct,
//     });
// } catch (error) {
//     res.status(500).json({
//     message: "Error Creating Product",
//     error: error.message,
//     });
// }
// };
