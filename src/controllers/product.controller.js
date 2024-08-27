import { productModel } from "../config/models/product.model.js";

export const getProducts = async (req, res) => {
  try{
    const products = await productModel.findAll();
    if(!products) return res.status(401).json({Message: 'Products not found'});
    res.json(products);
}catch (error){
    res.status(500).json({
        Error: error.message
    });
}
};

export const getProduct = async (req, res) => {
  try {
    const { code } = req.body;
    const product = await productModel.findOne({
      where: {
        code: code,
      },
    });
    if (!product)
      return res
        .status(401)
        .json({ Message: `product with code ${code} not found` });
    if (product.stock === 0)
      return res
        .status(401)
        .json({ Message: `There's no more in stock (${product.code})` });
    product.update({
      stock: product.stock - 1,
    });
    res.status(200).json({ product: product });
  } catch (error) {
    res.status(500).json({
      Error: error.message,
    });
  }
};

export const restoreProduct = async (req, res) => {
  try {
    const { code } = req.body;
    const product = await productModel.findOne({
      where: {
        code: code,
      },
    });
    if (!product)
      return res
        .status(401)
        .json({ Message: `product with code ${code} not found` });
    product.update({
      stock: product.stock + 1,
    });
    res.status(200).json({ product: product });
  } catch (error) {
    res.status(500).json({
      Error: error.message,
    });
  }
};

export const addProduct = async (req, res) => {
  const {
    code,
    supplier_id,
    date_of_sale,
    description,
    product_name,
    brand,
    stock,
  } = req.body;
  try {
    const newProduct = await productModel.create({
      code,
      supplier_id,
      date_of_sale,
      description,
      product_name,
      brand,
      stock,
    });
    res.status(200).json({ productoCreado: newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
