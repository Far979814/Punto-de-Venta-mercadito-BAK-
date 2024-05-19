import { pool } from "../config/db.js";

export const getClients = async(req, res) =>{ //Obtener los clientes de la base.
    try{
        const [result] = await pool.query("SELECT * FROM clients")
        res.json(result);
    }catch (error){
        return res.status(500).json({message: error.message});
    }
}
