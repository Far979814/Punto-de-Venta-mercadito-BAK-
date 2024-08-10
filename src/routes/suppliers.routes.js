import { Router}  from 'express';

import {
    addSupplier,
    getSuppliers
} from '../controllers/supplier.controller.js'

const router = Router();

router.get('/suppliers', getSuppliers);
router.post('/newsupplier', addSupplier);

export default router;