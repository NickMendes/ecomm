import express from 'express';
import ProductController from '../controllers/ProductController.js';

const router = express.Router();

router
  .get('/product', ProductController.getAllProducts)
  .get('/product/:id', ProductController.getProductById)
  .post('/admin/product', ProductController.createProduct)
  .put('/admin/product/:id', ProductController.updateProduct)
  .delete('/admin/product/:id', ProductController.deleteProduct)

export default router;
