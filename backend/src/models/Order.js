const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');
const Address = require('./Address');

const Order = sequelize.define('Order', {
  OrderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  OrderDate: {
    type: DataTypes.DATE,
  },
  TotalAmount: {
    type: DataTypes.DECIMAL(10, 2),
  },
}, {
  timestamps: false,
  tableName: 'Order',
});

Order.belongsTo(User, { foreignKey: 'UserID' });
Order.belongsTo(Address, { foreignKey: 'AddressID' });

module.exports = Order;