import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const clientModel = db.define('client', {
    rtn: {
        type: DataTypes.STRING
    },
    dni:{
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    type_account: {
        type: DataTypes.TINYINT
    },
},
{
    tableName: 'client',
});