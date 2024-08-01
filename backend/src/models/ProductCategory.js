const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProductCategory = sequelize.define('ProductCategory', {
  CategoryID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  }
}, {
  timestamps: false,
  tableName: 'ProductCategory'
});

module.exports = ProductCategory;
