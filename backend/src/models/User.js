const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  UserID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Email: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  Password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  FirstName: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  LastName: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  CreatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
  tableName: 'User'
});

module.exports = User;