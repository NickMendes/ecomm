import express from 'express';
import PaymentController from '../controllers/PaymentController.js';

const router = express.Router();

router
  .get('/payments', PaymentController.getAllPayments)
  .get('/payments/:id', PaymentController.getPaymentById)
  .post('/admin/payments', PaymentController.createPayment)
  .patch('/admin/payments/:id', PaymentController.updatePayment)
  .delete('/admin/payments/:id', PaymentController.deletePayment);

export default router;
