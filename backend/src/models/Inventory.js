const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./Product');

const Inventory = sequelize.define('Inventory', {
  InventoryID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Quantity: {
    type: DataTypes.INTEGER,
  },
}, {
  timestamps: false,
  tableName: 'Inventory',
});

Inventory.belongsTo(Product, { foreignKey: 'ProductID' });

module.exports = Inventory;