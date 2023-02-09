const express = require('express');
const paymentController = require('../controllers/PaymentController');
const middlewares = require('../middleware/statusChangeValidation');

const router = express.Router();

router.route('/')
  .get(paymentController.getAll)
  .post(paymentController.add);

router.route('/:id')
  .get(paymentController.getById)
  .patch(middlewares.validateStatus, paymentController.updateStatus)
  .delete(paymentController.destroy);

module.exports = router;
