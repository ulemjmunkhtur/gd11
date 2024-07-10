const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Product = require('./Product');

const Wishlist = sequelize.define('Wishlist', {
  WishlistID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  timestamps: false,
  tableName: 'Wishlist',
});

Wishlist.belongsTo(User, { foreignKey: 'UserID' });
Wishlist.belongsTo(Product, { foreignKey: 'ProductID' });

module.exports = Wishlist;