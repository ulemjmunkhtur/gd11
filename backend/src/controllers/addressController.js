const AddressService = require('../services/addressService');

exports.createAddress = async (req, res) => {
  try {
    const addressData = req.body;
    const address = await AddressService.createAddress(addressData);
    res.status(201).json(address);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllAddresses = async (req, res) => {
  try {
    const addresses = await AddressService.getAllAddresses();
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAddressById = async (req, res) => {
  try {
    const addressId = req.params.id;
    const address = await AddressService.getAddressById(addressId);
    res.json(address);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const addressId = req.params.id;
    const addressData = req.body;
    const updatedAddress = await AddressService.updateAddress(addressId, addressData);
    res.json(updatedAddress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const addressId = req.params.id;
    await AddressService.deleteAddress(addressId);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};