import express from 'express';
import CategoryController from '../controllers/CategoryController.js';

const router = express.Router();

router
  .get('/categories', CategoryController.getAllCategories)
  .get('/categories/:id', CategoryController.getCategoryById)
  .post('/categories', CategoryController.postCategory)
  .patch('/categories/:id', CategoryController.patchCategory)
  .put('/categories/:id', CategoryController.putCategory)
  .delete('/categories/:id', CategoryController.deleteCategory)

export default router;
