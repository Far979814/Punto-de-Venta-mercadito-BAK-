import { productModelToDb } from "../container/mapper.product.js";

export const validateProducts = (req, res, next) =>{

  //TODO: Agregar schema de validacion como middleware. Con un modulo.
    const {code, supplier_id , date_of_sale , description , product_name , brand,} = productModelToDb(req.body)
    if(code === "" || supplier_id === "" || date_of_sale === "" || description === "" || product_name === "" || brand === "") {
      return res.status(400).json({ error : "Empty fields found" });
    }
    next();
}



/*
JSON{
    "code"        : "random code",
    "supplier_id" : "dasda",
    "date_of_sale": "2024-05-21",
    "description" : "random description",
    "product_name": "Jabon para lavar ropa",
    "brand"       : "random brand"

}
*/