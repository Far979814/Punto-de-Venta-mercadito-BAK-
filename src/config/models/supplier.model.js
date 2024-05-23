import { DataTypes } from "sequelize";
import db from "../db.js";

export const supplierModel = db.define('supplier', {
    rtn: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    route_code: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    supplier_name: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    direction: {
        type: DataTypes.STRING,
        allowNull:true,
    },
},
{
    tableName: 'supplier',
});
