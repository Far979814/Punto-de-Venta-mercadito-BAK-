import joi from 'joi'
import JoiDate from '@joi/date';

const extension = joi.extend(JoiDate);

 const clientSchema = joi.object({
    dni: joi.string().min(13).required(),
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    date_of_birth: extension.date().format('YYYY-MM-DD').utc().required(),
    department: joi.number().required(),
    salary: joi.number().required(),
});

export default clientSchema;