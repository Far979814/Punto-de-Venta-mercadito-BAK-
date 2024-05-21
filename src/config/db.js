// import { createPool } from 'mysql2/promise'
import dotenv from 'dotenv';
dotenv.config();

// export const pool = createPool(
//     {
//         host : process.env.HOSTNAME,
//         port : process.env.DATABASE_PORT,
//         user : process.env.USER,
//         password : process.env.PASSWORD,
//         database : process.env.DATABASE,
//     } 
// );

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