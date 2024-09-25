import productSchema from "../schemas/product.schema.js";

export const validateProducts = (req, res, next) =>{
    const { error } = productSchema.validate(req.body); 
    if(error) return res.status(400).json({error: error.details[0].message});
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