import { Router}  from 'express';

import {
    addSupplier,
    getSuppliers
} from '../controllers/supplier.controller.js'

import { validateSupplier } from '../middlewares/validateSupplier.js';



const router = Router();

router.get('/suppliers', getSuppliers);
router.post('/newsupplier', validateSupplier, addSupplier);

export default router;