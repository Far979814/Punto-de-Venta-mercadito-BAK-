import { supplierModel } from "../config/models/supplier.model.js"

export const getSuppliers = async(req, res) => {
    try{
        const suppliers = await supplierModel.findAll();
        res.json(supplier);
    }catch (error){
        res.status(500).json({
            Error: error.message,
        });
    }
}

export const addSupplier = async (req, res) => {
    try {
        const newSupplier = new supplierModel(req.body);
        await newSupplier.save();
        res.status(200).json({message:`Supplier ${newSupplier.supplier_name} saved successfully`});
    } catch (error) {
    

        res.status(500).json({message:error.message, errorDescription: error.parent.sqlMessage});
    }
}