import { createPool } from 'mysql2/promise'
import dotenv from 'dotenv';
dotenv.config();

export const pool = createPool(
    {
        host : process.env.HOSTNAME,
        port : process.env.DATABASE_PORT,
        user : process.env.USER,
        password : process.env.PASSWORD,
        database : process.env.DATABASE,
    } 
);