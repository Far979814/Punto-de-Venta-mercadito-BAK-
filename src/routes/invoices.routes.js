import { Router } from "express";

import { getInvoices, getInvoice } from "../controllers/invoice.controller.js";

const router = Router();
router.get('/api/invoices', getInvoices);
router.get('/api/invoice/:id', getInvoice);
export default router;