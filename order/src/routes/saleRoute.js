import express from 'express';
import SaleController from '../controllers/salesController.js';

const router = express.Router();

router
  .get('/sale', SaleController.getAllSales);

export default router;
