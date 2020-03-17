module.exports = (sequelize, DataTypes) => {
//Constructing objects
const Claim = sequelize.define('claims', {
  // attributes
  claimID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  userID: {
    type: DataTypes.INTEGER,
    foreignKey: 'userID',
    allowNull: false
    
  },
  date_submitted: {
   	type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW,
    allowNull: false
  },

  product_name : {
    type: DataTypes.STRING,
    allowNull: false
    
  },

  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
    
  },
  image: {
    type: DataTypes.BLOB,
    allowNull: true
    
  },
  houseID: {
    type: DataTypes.INTEGER,
    allowNull: true
    
  },
  approver_userID: {
    type: DataTypes.INTEGER,
    allowNull: true
    
  },

  status_: {
  	defaultValue: 'Pending',
    type: DataTypes.STRING,
    allowNull: false
    
  },

  time_updated: {
    type: DataTypes.DATE,
    allowNull: true
  },


}, {
  // options
});
return Claim
}