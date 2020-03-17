module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
  // attributes
  userID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  date_created: {
   	type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW,
    allowNull: false

  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
    
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
    
  },
  user_level: {
    type: DataTypes.INTEGER,
    allowNull: false
    
  }
}, {
  // options
});
  return User
}