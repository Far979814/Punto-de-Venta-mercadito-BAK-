import supplierSchema from "../schemas/supplier.schema.js";

export const validateSupplier = (req, res, next) =>{
    const { error } = supplierSchema.validate(req.body); 
    if(error) return res.status(400).json({error: error.details[0].message});
    next();
}