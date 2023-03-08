import express from 'express';
import SaleController from '../controllers/salesController.js';
import validateSale from '../middleware/saleMW.js';
import tokenVal from '../middleware/authorizationMW.js';

const router = express.Router();

router
  .get('/sale', tokenVal, SaleController.getAllSales)
  .get('/sale/:id', tokenVal, SaleController.getSaleById)
  .post('/admin/sale', validateSale, tokenVal, SaleController.createSale)
  .patch('/admin/sale/:id', tokenVal, SaleController.updateSale)
  .delete('/admin/sale/:id', tokenVal, SaleController.deleteSale);

export default router;
