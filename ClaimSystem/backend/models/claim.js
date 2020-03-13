module.exports = (sequelize, DataTypes) => {
//Constructing objects
const Claim = sequelize.define('claim', {
  // attributes
  claimID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  userID: {
    type: Sequelize.INTEGER,
    foreignKey: 'userID',
    allowNull: false
    
  },
  date_submitted: {
   	type: Sequelize.DATE, 
    defaultValue: Sequelize.NOW,
    allowNull: false
  },

  product_name : {
    type: Sequelize.STRING,
    allowNull: false
    
  },

  amount: {
    type: Sequelize.FLOAT,
    allowNull: false
    
  },
  image: {
    type: Sequelize.BLOB,
    allowNull: true
    
  },
  houseID: {
    type: Sequelize.INTEGER,
    allowNull: true
    
  },
  approver_userID: {
    type: Sequelize.INTEGER,
    allowNull: true
    
  },

  status_: {
  	defaultValue: 'Pending',
    type: Sequelize.STRING,
    allowNull: false
    
  },

  time_updated: {
    type: Sequelize.DATE,
    allowNull: true
  },


}, {
  // options
});

}