import { productModel } from "../models/product.js"

export const getProducts = async(req, res) =>{
    try {
        const products = await productModel.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({
            Error: error.message
        });
    }
}