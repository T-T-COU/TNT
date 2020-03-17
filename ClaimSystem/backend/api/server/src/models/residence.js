module.exports = (sequelize, DataTypes) => {
const Residences = sequelize.define('residences', {
  // attributes
  residenceID: {
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
  startDate: {
    type: DataTypes.DATE, 
    allowNull: true

  },
  endDate: {
    type: DataTypes.DATE, 
    allowNull: true

  },
  rent_amount: {
    type: DataTypes.FLOAT,
    allowNull: true
    // allowNull defaults to true
  },
  
}, {
  // options
});

  return Residences

}