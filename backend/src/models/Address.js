const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Address = sequelize.define('Address', {
  AddressID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  AddressLine1: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  district: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Country: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'Address'
});

module.exports = Address;