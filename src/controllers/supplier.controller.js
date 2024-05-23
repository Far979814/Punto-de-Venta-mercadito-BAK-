import { supplierModel } from "../config/models/supplier.model.js"

export const getSuppliers = async(req, res) => {
    try{
        const supplier = await supplierModel.findAll();
        res.json(supplier);
    }catch (error){
        res.status(500).json({
            Error: error.message,
        });
    }
}