import express from 'express';
import ProductController from '../controllers/ProductController.js';

const router = express.Router();

router
  .get('/products', ProductController.getAllProducts)
  .get('/products/:id', ProductController.getProductById)
  .post('/admin/products', ProductController.createProduct)
  .put('/admin/products/:id', ProductController.updateProduct)
  .delete('/admin/products/:id', ProductController.deleteProduct)

export default router;
