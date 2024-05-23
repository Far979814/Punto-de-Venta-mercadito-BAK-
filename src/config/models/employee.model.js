import { DataTypes } from "sequelize";
import db from "../db.js";

import {departmentModel} from './department.model.js'

export const employeeModel = db.define('employee', {

    dni:{
        type: DataTypes.STRING,
        unique:true 
     },
    first_name: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull:true,
    },
    department: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: departmentModel,
            key: 'id'
                     }
    },
    salary: {
        type: DataTypes.DOUBLE,
        allowNull:false,
    }
},
{
    tableName: 'employee',
});
