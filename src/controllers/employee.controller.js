import { employeeModel } from '../models/employee.model.js'

export const getEmployees = async(req, res) =>{
    try {
        const employees = await employeeModel.findAll();
        if(employees.length === 0) res.status(401).json({message:"Empleados no encontrados."});
        res.json(employees);
    } catch (error) {
        console.log(error.message);
    }
}

export const addEmployee = async(req, res) => {
    try {
      const employee = new employeeModel(req.body);
      await employee.save();
      res.status(400).json({message:'Employeer saved Successfully', 
           id: employee.id,
           name: `${employee.first_name} ${employee.last_name}`,
           department: `${employee.department}`
      });
    } catch (error) {
        let sqlMessage = 'Unknown error';
        if (error.parent) {
            sqlMessage = error.parent.sqlMessage;
        }
        res.status(500).json({
            Error: 'Error',
            SqlMessage: sqlMessage
        });
    }
}
