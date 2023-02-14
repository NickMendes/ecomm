const express = require('express');
const saleController = require('../controllers/SaleController');

const router = express.Router();

router.route('/')
  .get(saleController.getAll)
  .post(saleController.add);

router.route('/:id')
  .get(saleController.getById)
  .put(saleController.update)
  .delete(saleController.destroy);

module.exports = router;
