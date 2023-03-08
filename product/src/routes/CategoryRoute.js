import express from 'express';
import CategoryController from '../controllers/CategoryController.js';
import validateCategory from '../middleware/categoryMW.js';
import tokenVal from '../middleware/authorizationMW.js';

const router = express.Router();

router
  .get('/categories', CategoryController.getAllCategories)
  .get('/categories/:id', CategoryController.getCategoryById)
  .post('/admin/categories', tokenVal, validateCategory, CategoryController.createCategory)
  .patch('/admin/categories/:id', tokenVal, CategoryController.updateCategoryStatus)
  .put('/admin/categories/:id', tokenVal, validateCategory, CategoryController.updateCategory)
  .delete('/admin/categories/:id', tokenVal, CategoryController.deleteCategory)

export default router;
