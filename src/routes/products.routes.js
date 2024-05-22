import { Router}  from 'express';

import {
    addProduct,
    getProducts
} from '../controllers/product.controller.js'

import { validateProducts } from '../middlewares/validateProducts.js';

const router = Router();

router.get('/api/products',getProducts);
router.post('/api/addproduct', validateProducts, addProduct);

export default router;