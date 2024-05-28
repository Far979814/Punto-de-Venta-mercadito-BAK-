import { Router } from "express";

import { getInvoices, getInvoice, extInvoice } from "../controllers/invoice.controller.js";

const router = Router();
router.get('/invoices', getInvoices);
router.get('/invoice/:id', getInvoice);
router.post('/extinvoice',extInvoice);
export default router;