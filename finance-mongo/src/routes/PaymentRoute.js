import express from 'express';
import PaymentCOntroller from '../controllers/PaymentController.js';

const router = express.Router();

router
  .get('/payment', PaymentCOntroller.getAllPayments)
  .get('/payment/:id', PaymentCOntroller.getPaymentById)
  .post('/admin/payment', PaymentCOntroller.createPayment)
  .patch('/admin/payment/:id', PaymentCOntroller.updatePayment)
  .delete('/admin/payment/:id', PaymentCOntroller.deletePayment);

export default router;
