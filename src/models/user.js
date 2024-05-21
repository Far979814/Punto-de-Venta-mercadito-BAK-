import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const userModel = db.define('user', {
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    isactive: {
        type: DataTypes.BOOLEAN
    },
});
