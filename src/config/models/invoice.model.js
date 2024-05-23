import { DataTypes } from "sequelize";

import { clientModel } from "./client.model.js";
import {employeeModel} from './employee.model.js';
import {productModel} from './product.model.js';

import db from "../db.js";

export const invoiceModel = db.define('invoice', {
    client_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: clientModel,
            key: 'dni'
                     }
    },
    client_rtn: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
            model: clientModel,
            key: 'rtn'
                     }
    },
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: employeeModel,
            key: 'id'
                     }
    },
    discount:{
        type: DataTypes.DOUBLE,
        allowNull:true
    },
    product_code: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: productModel,
            key: 'code'
                     }
    },
    subtotal: {
        type: DataTypes.DOUBLE,
        allowNull:false,
    },
    total: {
        type: DataTypes.DOUBLE,
        allowNull:false,
    },
},
{
    tableName: 'invoice',
});
