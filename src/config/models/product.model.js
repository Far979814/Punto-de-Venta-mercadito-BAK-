import { DataTypes } from "sequelize";

import { supplierModel } from './supplier.model.js'

import db from "../db.js";

export const productModel = db.define('product', {
    code: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false,
    },
    supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: supplierModel,
            key: 'id'
                     }
    },
    date_of_sale: {
        type: DataTypes.DATE,
        allowNull:true,
    },
    
    description: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull:false,
    }
},
{
    tableName: 'product',
});
