import express from 'express';
import CategoryController from '../controllers/CategoryController.js';

const router = express.Router();

router
    .get('/categories', CategoryController.getAllCategories)
    .get('/categories/:id', CategoryController.getCategoryById)
    .post('/admin/categories', CategoryController.createCategory)
    .patch('/admin/categories/:id', CategoryController.updateCategoryStatus)
    .put('/admin/categories/:id', CategoryController.updateCategory)
    .delete('/admin/categories/:id', CategoryController.deleteCategory);

export default router;
