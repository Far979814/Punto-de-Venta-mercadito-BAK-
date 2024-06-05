import  employeeSchema  from '../schemas/employee.schema.js';

export const validate = (req, res, next) =>{
    const { error } = employeeSchema.validate(req.body); 
    if(error) return res.status(400).json({error: error.details[0].message});

    next();
}