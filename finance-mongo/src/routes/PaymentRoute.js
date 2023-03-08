import express from 'express';
import PaymentController from '../controllers/PaymentController.js';

const router = express.Router();

router
    .get('/payment', PaymentController.getAllPayments)
    .get('/payment/:id', PaymentController.getPaymentById)
    .post('/admin/payment', PaymentController.createPayment)
    .patch('/admin/payment/:id', PaymentController.updatePayment)
    .delete('/admin/payment/:id', PaymentController.deletePayment);

export default router;
