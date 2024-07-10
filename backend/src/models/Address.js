const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('../models/User'); // Assuming User model is defined in users.js

const Address = sequelize.define('Address', {
  AddressID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User, // This is the model reference
      key: 'UserID', // The column that it references in User model
    }
  },
  AddressLine1: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  District: {
    type: DataTypes.STRING(100),
    allowNull: true, // Allowing null based on typical use-case; adjust as necessary.
  },
  City: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Country: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  timestamps: false, // No automatic timestamp fields
  tableName: 'Address'
});

module.exports = Address;
