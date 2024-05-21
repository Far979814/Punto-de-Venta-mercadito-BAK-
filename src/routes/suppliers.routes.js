import { Router}  from 'express';

import {
    getSuppliers
} from '../controllers/supplier.controller.js'

const router = Router();

router.get('/api/suppliers', getSuppliers);

export default router;