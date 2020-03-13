module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
  // attributes
  userID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  date_created: {
   	type: Sequelize.DATE, 
    defaultValue: Sequelize.NOW,
    allowNull: false

  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
    
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
    
  },
  user_level: {
    type: Sequelize.INTEGER,
    allowNull: false
    
  }
}, {
  // options
});
}