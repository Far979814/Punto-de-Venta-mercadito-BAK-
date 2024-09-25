import { Router}  from 'express';

import {
    addProduct,
    getProduct,
    getProducts,
    restoreProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/product.controller.js'

import { validateProducts } from '../middlewares/validateProducts.js';

const router = Router();

router.get('/products',getProducts);
router.get('/product',getProduct);
router.get('/restoreproduct',restoreProduct);
router.post('/addproduct',validateProducts, addProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;