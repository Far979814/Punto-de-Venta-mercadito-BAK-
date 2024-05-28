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
        type: DataTypes.BOOLEAN
    },
});