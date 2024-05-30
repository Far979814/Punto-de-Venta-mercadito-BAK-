import { DataTypes } from "sequelize";
import db from "../db.js";

export const userModel = db.define('user', {
    username: {
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    isactive: {
        type: DataTypes.BOOLEAN,
        allowNull:true
    },
    role: {
        type: DataTypes.STRING,
        allowNull:false
    },
    employee_dni: {
        type: DataTypes.STRING,
        allowNull:false
    },
});
