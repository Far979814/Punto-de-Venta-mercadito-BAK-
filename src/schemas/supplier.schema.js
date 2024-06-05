import Joi from "joi";

const supplierSchema = Joi.object({
    
        rtn: Joi.string().min(12).required(),
        route_code: Joi.string().required(),
        description: Joi.string().required(),
        phone: Joi.string().min(9).required(),
        supplier_name: Joi.string().required(),
        direction: Joi.string().required(),
})

export default supplierSchema;