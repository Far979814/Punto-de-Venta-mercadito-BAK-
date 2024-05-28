import { productModel } from "../config/models/product.model.js"

export const getProducts = async( res ) =>{
    try {
        const products = await productModel.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({
            Error: error.message
        });
    }
}

export const addProduct = async( req, res) => {
    const { code, supplier_id, date_of_sale, description, product_name, brand, stock } = req.body;
    try {
      const newProduct = await productModel.create({
        code,
        supplier_id,
        date_of_sale,
        description, 
        product_name,
        brand,
        stock
      })
      res.status(200).json({productoCreado: newProduct});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}