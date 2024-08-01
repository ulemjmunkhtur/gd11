const User = require('./User');
const Address = require('./Address');

User.hasMany(Address, { foreignKey: 'UserID', onDelete: 'CASCADE' });
Address.belongsTo(User, { foreignKey: 'UserID' });