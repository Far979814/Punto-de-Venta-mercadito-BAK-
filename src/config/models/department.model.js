import { DataTypes } from "sequelize";
import db from "../db.js";

export const departmentModel = db.define('department', {
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    first_manager_id: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull:true,
    },
},
{
    tableName: 'department',
});