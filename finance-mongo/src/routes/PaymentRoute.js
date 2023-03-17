import express from 'express';
import PaymentController from '../controllers/PaymentController.js';
import validatePayment from '../middleware/paymentMW.js';
import tokenVal from '../middleware/authorizationMW.js';

const router = express.Router();

router
    .get('/payment', tokenVal, PaymentController.getAllPayments)
    .get('/payment/:id', tokenVal, PaymentController.getPaymentById)
    .post('/payment', tokenVal, validatePayment, PaymentController.createPayment)
    .patch('/payment/:id', tokenVal, PaymentController.updatePayment)
    .delete('/payment/:id', tokenVal, PaymentController.deletePayment);

export default router;
