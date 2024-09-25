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

  try {
    const product = new productModel(req.body);
    console.log(product);
    await product.save();
    res.json({message:'Product Saved successfully',product_name:product.product_name});
} catch (error) {
    let sqlMessage = 'Unknown error';
    if (error.parent) {
        sqlMessage = error.parent.sqlMessage;
    }
    res.status(500).json({
        Error: 'An error ocurred',
        SqlMessage: sqlMessage
    });
}
};

export const updateProduct = async( req, res ) => {
  try {
      const { code, description , product_name , brand, stock } = req.body;
      const updateResult = await productModel.update( {
          code,
          description,
          product_name,
          brand,
          stock
      },
      {
          where: {
              code: req.params.id
          }
      });
      console.log(updateResult);

      updateResult[0] === 1 ? res.send(`Product with id ${req.params.id} updated.`) : res.send(`Product with id ${req.params.id} not found`);

  } catch (error) {
      let sqlMessage = 'Unknown error';
      if (error.parent) {
          sqlMessage = error.parent.sqlMessage;
      }
      res.status(500).json({
          Error: 'An error ocurred',
          SqlMessage: sqlMessage
      });
  }
}

export const deleteProduct = async (req, res) =>{
  try {
      const deleteResult = await productModel.destroy( {
          where: {
              code: req.params.id
          }
      });
      deleteResult === 1 ? res.send(`Product with code ${req.params.id} deleted.`) : res.send(`Product with code ${req.params.id} not found`);
  } catch (error) {
      let sqlMessage = 'Unknown error';
      if (error.parent) {
          sqlMessage = error.parent.sqlMessage;
      }
      res.status(500).json({
          Error: 'An error ocurred',
          SqlMessage: sqlMessage
      });
  }
}
