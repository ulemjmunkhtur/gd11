const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./Product'); // Make sure the product model is correctly imported

const Picture = sequelize.define('Picture', {
  PictureID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ProductID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'ProductID',
    }
  },
  URL: {
    type: DataTypes.STRING(255),
    allowNull: false,
  }
}, {
  timestamps: false,
  tableName: 'Picture'
});

// Assuming Product and Picture models are imported

// A Product can have many Pictures
Product.hasMany(Picture, {
  foreignKey: 'ProductID',
  as: 'pictures'  // This alias is useful when including pictures in product queries
});

// A Picture belongs to one Product
Picture.belongsTo(Product, {
  foreignKey: 'ProductID',
  as: 'product'
});


module.exports = Picture;
