const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Product = require('./Product');

const Review = sequelize.define('Review', {
  ReviewID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Rating: {
    type: DataTypes.INTEGER,
  },
  Comment: {
    type: DataTypes.TEXT,
  },
  CreatedAt: {
    type: DataTypes.DATE,
  },
}, {
  timestamps: false,
  tableName: 'Review',
});

Review.belongsTo(User, { foreignKey: 'UserID' });
Review.belongsTo(Product, { foreignKey: 'ProductID' });

module.exports = Review;