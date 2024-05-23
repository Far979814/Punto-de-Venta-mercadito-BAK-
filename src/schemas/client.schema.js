import joi from 'joi'

 const clientSchema = joi.object({
    rtn: joi.string().min(14).required(),
    dni: joi.string().min(13).required(),
    phone: joi.string().min(10).required(),
    type_account: joi.number().required()
});

export default clientSchema;