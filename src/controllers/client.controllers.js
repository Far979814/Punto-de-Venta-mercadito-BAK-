import { pool } from "../config/db.js";

export const getClients = async(req, res) =>{ //Obtener los clientes de la base.
    try{
        const [result] = await pool.query("SELECT * FROM clients")
        res.json(result);
    }catch (error){
        return res.status(500).json({message: error.message});
    }

    // Para "employee":
export const getEmployees = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM employee");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Para "product":
export const getProducts = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM product");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Para "supplier":
export const getSuppliers = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM supplier");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Para "user":
export const getUsers = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM user");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Para "invoice":
export const getInvoices = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM invoice");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Para "department":
export const getDepartments = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM department");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

    
}
