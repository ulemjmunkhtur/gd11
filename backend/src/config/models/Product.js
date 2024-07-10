const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ProductCategory = require('./ProductCategory'); // Assuming ProductCategory model is defined in productCategory.js

const Product = sequelize.define('Product', {
  ProductID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  CategoryID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ProductCategory, // This links to the ProductCategory model
      key: 'CategoryID', // The column in ProductCategory that it references
    }
  },
  Name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  Volume: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Function: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  SkinBenefits: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Characteristics: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  HowToUse: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  }
}, {
  timestamps: false,
  tableName: 'Product'
});

module.exports = Product;
