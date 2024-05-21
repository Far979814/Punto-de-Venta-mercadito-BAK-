import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const db = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOSTNAME,
        dialect: 'mysql',   
    }
    
);

export const dbConnection = async () => {
    try {
        await db.authenticate();
    } catch (error) {
        throw new Error(error);
    }
}

export default db;