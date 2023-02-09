const express = require('express');
const cupomController = require('../controllers/CupomController');

const router = express.Router();

router.route('/')
  .get(cupomController.getAll)
  .post(cupomController.add);

router.route('/:id')
  .get(cupomController.getById)
  .put(cupomController.update)
  .delete(cupomController.destroy);

module.exports = router;
