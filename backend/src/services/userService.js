const User = require('../models/User'); // Assuming the User model path
require('../models/associations');


// Create a new user
async function createUser(userData) {
    try {
        const newUser = await User.create(userData);
        console.log('User created successfully:', newUser.toJSON());
        return newUser;
    } catch (error) {
        console.error('Failed to create user:', error);
    }
}

// Retrieve user by ID
async function getUserById(userId) {
    try {
        const user = await User.findByPk(userId);
        return user ? user.toJSON() : null;
    } catch (error) {
        console.error('Error retrieving user:', error);
    }
}

async function getAllUsers() {
    try {
        const users = await User.findAll();
        console.log(users);
        return users.map(user => user.toJSON());
    } catch (error) {
        console.error('Error retrieving all users:', error);
        return [];
    }
}

// Update user
async function updateUser(userId, updates) {
    try {
        const user = await User.findByPk(userId);
        if (user) {
            const updatedUser = await user.update(updates);
            console.log('User updated successfully:', updatedUser.toJSON());
            return updatedUser;
        } else {
            console.log('User not found!');
        }
    } catch (error) {
        console.error('Failed to update user:', error);
    }
}

// Delete user
async function deleteUser(userId) {
    try {
        const result = await User.destroy({
            where: { UserID: userId }
        });
        if (result > 0) {
            console.log('User deleted successfully');
        } else {
            console.log('No user found to delete');
        }
    } catch (error) {
        console.error('Error deleting user:', error);
    }
}

module.exports = { createUser, getUserById, updateUser, deleteUser, getAllUsers };
