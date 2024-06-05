
import userSchema from '../schemas/users.chema.js';

export const validateUser = (req, res, next) =>{
    const { error } = userSchema.validate(req.body); 
    if(error) return res.status(400).json({error: error.details[0].message});
    next();
}