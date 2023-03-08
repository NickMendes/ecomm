const express = require('express');
const addressController = require('../controllers/AddressController');

const router = express.Router();

router.route('/')
    .get(addressController.getAll)
    .post(addressController.add);

router.route('/:id')
    .get(addressController.getById)
    .put(addressController.update)
    .delete(addressController.destroy);

module.exports = router;
