import { Router } from "express";
import { pool } from "../config/db.js";

const router = Router();

router.get('/ping', async(req, res)=>{
    const [rows] = await pool.execute('SELECT 1 + 1 as result');
    console.log(rows);
    res.json('DATABASE IS WORKING');
});

export default router;