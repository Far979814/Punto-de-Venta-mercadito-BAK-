import joi from 'joi'

 const userSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().min(8).required(),
    role: joi.string().min(3).max(3).required(),
    employee_dni: joi.string().min(13).required(),
});

export default userSchema;