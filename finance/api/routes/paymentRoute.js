const express = require('express');
const paymentController = require('../controllers/PaymentController');

const router = express.Router();

router.route('/')
  .get(paymentController.getAll)
  .post(paymentController.add);

router.route('/:id')
  .get(paymentController.getById);

module.exports = router;
