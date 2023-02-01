import express from 'express';
import ProductController from '../controllers/ProductController.js';

const router = express.Router();

router
  .get('/products', ProductController.getAllProducts)
  .get('/products/:id', ProductController.getProductById)
  .post('/products', ProductController.createProduct)
  .put('/products/:id', ProductController.updateProduct)
  .delete('/products/:id', ProductController.deleteProduct)

export default router;
