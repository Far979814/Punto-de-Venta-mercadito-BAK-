import { invoiceModel } from "../config/models/invoice.model.js";

export const getInvoices = async(req, res) =>{
    try {
        const invoices = await invoiceModel.findAll();

        console.log(invoices);
        if(!invoices) return res.status(400).json({message:"Invoices not found"});
        res.json(invoices);    
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

export const getInvoice = async(req, res) =>{
    try {
        const invoice = await invoiceModel.findByPk(req.params.id);
        if(!invoice) return res.status(400).json({message:"Invoices not found"});
        res.json(invoice);    
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

export const extInvoice = async(req, res) => {
    try {
        const invoice = new invoiceModel(req.body);

        console.log(invoice.dataValues);
        if(!invoice) return res.status(400).json({message:'Error creating invoice'});
        await invoice.save();
        res.status(200).json({message: 'Invoice Saved Succesfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}