const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Order = require('./Order');

const Payment = sequelize.define('Payment', {
  PaymentID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  PaymentMethod: {
    type: DataTypes.STRING(50),
  },
  TransactionID: {
    type: DataTypes.STRING(100),
  },
  PaymentDate: {
    type: DataTypes.DATE,
  },
}, {
  timestamps: false,
  tableName: 'Payment',
});

Payment.belongsTo(Order, { foreignKey: 'OrderID' });

module.exports = Payment;