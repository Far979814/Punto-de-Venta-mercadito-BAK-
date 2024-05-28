import { DataTypes } from "sequelize";
import db from "../db.js";

export const supplierModel = db.define('supplier', {
    rtn: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    route_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    supplier_name: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    direction: {
        type: DataTypes.STRING,
        allowNull:true,
    },
},
{
    tableName: 'supplier',
});
