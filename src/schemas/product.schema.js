import joi from 'joi'

 const productSchema = joi.object({
    code: joi.string().min(3),
    supplier_id: joi.number().required(),
    description: joi.string().min(10),
    product_name: joi.string().min(2).required(),
    brand: joi.string().min(2).required(),
    stock: joi.number().required(),
});

export default productSchema;