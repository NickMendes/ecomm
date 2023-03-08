import express from 'express';
import PaymentController from '../controllers/PaymentController.js';
import validatePayment from '../middleware/paymentMW.js';
import tokenVal from '../middleware/authorizationMW.js';

const router = express.Router();

router
  .get('/payment', tokenVal, PaymentController.getAllPayments)
  .get('/payment/:id', tokenVal, PaymentController.getPaymentById)
  .post('/admin/payment', validatePayment, tokenVal, PaymentController.createPayment)
  .patch('/admin/payment/:id', tokenVal, PaymentController.updatePayment)
  .delete('/admin/payment/:id', tokenVal, PaymentController.deletePayment);

export default router;
