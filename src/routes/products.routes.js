import { Router}  from 'express';

import {
    addProduct,
    getProducts
} from '../controllers/product.controller.js'

import { validateProducts } from '../middlewares/validateProducts.js';

const router = Router();

router.get('/products',getProducts);
router.post('/addproduct', validateProducts, addProduct);

export default router;