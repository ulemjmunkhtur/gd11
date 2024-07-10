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
      isEmail: true, // Validates the email format
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
    allowNull: true, // Allowing null based on typical use-case; adjust as necessary.
  },
  Phone: {
    type: DataTypes.STRING(20),
    allowNull: false, // Allowing null based on typical use-case; adjust as necessary.
  },
  CreatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW, // Default value to automatically set the date and time of creation
  },
}, {
  timestamps: false, // Explicitly telling Sequelize not to handle timestamps
  tableName: 'User'
});

module.exports = User;
