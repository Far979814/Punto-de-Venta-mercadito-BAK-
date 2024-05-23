import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const departmentModel = db.define('department', {
    type: {
        type: DataTypes.STRING
    },
    name:{
        type: DataTypes.STRING
    },
    first_manager_id: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TINYINT
    },
},
{
    tableName: 'department',
});