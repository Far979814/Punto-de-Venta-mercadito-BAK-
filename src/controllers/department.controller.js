import {departmentModel} from '../models/department.model.js';

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