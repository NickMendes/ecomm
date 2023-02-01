import express from 'express';
import CategoryController from '../controllers/CategoryController.js';

const router = express.Router();

router
  .get('/categories', CategoryController.getAllCategories)
  .get('/categories/:id', CategoryController.getCategoryById)
  .post('/categories', CategoryController.createCategory)
  .patch('/categories/:id', CategoryController.updateCategoryStatus)
  .put('/categories/:id', CategoryController.updateCategory)
  .delete('/categories/:id', CategoryController.deleteCategory)

export default router;
