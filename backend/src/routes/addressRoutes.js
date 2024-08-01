const express = require('express');
const router = express.Router();
const AddressController = require('../controllers/addressController');

router.post('/', AddressController.createAddress);
router.get('/', AddressController.getAllAddresses);
router.get('/:id', AddressController.getAddressById);
router.put('/:id', AddressController.updateAddress);
router.delete('/:id', AddressController.deleteAddress);

module.exports = router;