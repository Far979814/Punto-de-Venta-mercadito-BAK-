import {departmentModel} from '../config/models/department.model.js';

export const getDepartments = async(req, res) => {
    try {
        const departments = await departmentModel.findAll();
        res.json(departments);
    } catch (error) {
        res.status(500).json({
            Error: error.message
        });
    }

}

export const addDepartment = async(req, res) =>{
    try {
        const department = new departmentModel(req.body);
        await department.save();
        res.status(200).json({message:`Department ${department.type} saved successfully`});
    }
    catch (error) {
        return res.status(500).json({message:error.message, ErrorDescription:error.parent.sqlMessage});
    } 
} 