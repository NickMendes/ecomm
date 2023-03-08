import express from 'express';
import ProductController from '../controllers/ProductController.js';
import validadeProduct from '../middleware/productMW.js';
import tokenVal from '../middleware/authorizationMW.js';

const router = express.Router();

router
  .get('/product', ProductController.getAllProducts)
  .get('/product/:id', ProductController.getProductById)
  .post('/admin/product', tokenVal, validadeProduct, ProductController.createProduct)
  .put('/admin/product/:id', tokenVal, ProductController.updateProduct)
  .delete('/admin/product/:id', tokenVal, ProductController.deleteProduct)

export default router;
