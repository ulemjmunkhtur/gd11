const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Order = require('./Order');
const Product = require('./Product');

const OrderItem = sequelize.define('OrderItem', {
  OrderItemID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Quantity: {
    type: DataTypes.INTEGER,
  },
  Price: {
    type: DataTypes.DECIMAL(10, 2),
  },
}, {
  timestamps: false,
  tableName: 'OrderItem',
});

OrderItem.belongsTo(Order, { foreignKey: 'OrderID' });
OrderItem.belongsTo(Product, { foreignKey: 'ProductID' });

module.exports = OrderItem;