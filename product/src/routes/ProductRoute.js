import express from 'express';
import ProductController from '../controllers/ProductController.js';
import validadeProduct from '../middleware/productMW.js';
import tokenVal from '../middleware/authorizationMW.js';

const router = express.Router();

router
    .get('/product', ProductController.getAllProducts)
    .get('/product/:id', ProductController.getProductById)
    .post('/product', tokenVal, validadeProduct, ProductController.createProduct)
    .put('/product/:id', tokenVal, ProductController.updateProduct)
    .delete('/product/:id', tokenVal, ProductController.deleteProduct);

export default router;
