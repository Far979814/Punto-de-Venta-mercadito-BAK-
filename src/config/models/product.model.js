import { DataTypes } from "sequelize";

import { supplierModel } from './supplier.model.js'

import db from "../db.js";

export const productModel = db.define('product', {
    code: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: supplierModel,
            key: 'rtn'
                     }
    },
    date_of_sale: {
        type: DataTypes.DATE,
        allowNull:false,
    },
    
    description: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull:true,
    }
},
{
    tableName: 'product',
});
