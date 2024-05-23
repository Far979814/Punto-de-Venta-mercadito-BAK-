import { invoiceModel } from "../models/invoice.model.js";

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