const express = require('express');
const paymentController = require('../controllers/PaymentController');

const router = express.Router();

router.route('/')
  .get(paymentController.getAll);

module.exports = router;
