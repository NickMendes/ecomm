import express from 'express';
import SaleController from '../controllers/salesController.js';

const router = express.Router();

router
  .get('/sale', SaleController.getAllSales)
  .get('/sale/:id', SaleController.getSaleById)
  .post('/admin/sale', SaleController.createSale)
  .patch('/admin/sale/:id', SaleController.updateSale)
  .delete('/admin/sale/:id', SaleController.deleteSale);

export default router;
