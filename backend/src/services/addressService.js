const Address = require('../models/Address'); // Assuming the Address model path

// Create a new address
async function createAddress(addressData) {
    try {
        const newAddress = await Address.create(addressData);
        console.log('Address created successfully:', newAddress.toJSON());
        return newAddress;
    } catch (error) {
        console.error('Failed to create address:', error);
    }
}

// Retrieve address by ID
async function getAddressById(addressId) {
    try {
        const address = await Address.findByPk(addressId);
        return address ? address.toJSON() : null;
    } catch (error) {
        console.error('Error retrieving address:', error);
    }
}

// Update address
async function updateAddress(addressId, updates) {
    try {
        const address = await Address.findByPk(addressId);
        if (address) {
            const updatedAddress = await address.update(updates);
            console.log('Address updated successfully:', updatedAddress.toJSON());
            return updatedAddress;
        } else {
            console.log('Address not found!');
        }
    } catch (error) {
        console.error('Failed to update address:', error);
    }
}

// Delete address
async function deleteAddress(addressId) {
    try {
        const result = await Address.destroy({
            where: { AddressID: addressId }
        });
        if (result > 0) {
            console.log('Address deleted successfully');
        } else {
            console.log('No address found to delete');
        }
    } catch (error) {
        console.error('Error deleting address:', error);
    }
}

module.exports = { createAddress, getAddressById, updateAddress, deleteAddress };
