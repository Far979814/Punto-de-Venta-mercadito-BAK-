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
    const { code, supplier_id, date_of_sale, description, product_name, brand } = req.body;
    try {
      const newProduct = await productModel.create({
        code,
        supplier_id,
        date_of_sale,
        description, 
        product_name,
        brand 
      })
      res.status(200).json({productoCreado: newProduct});
    } catch (error) {
        const { sqlMessage } = error.parent
        res.status(500).json({error: sqlMessage});
    }
}