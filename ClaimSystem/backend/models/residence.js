module.exports = (sequelize, DataTypes) => {
const Residence = sequelize.define('residence', {
  // attributes
  residenceID: {
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
  startDate: {
   	type: Sequelize.DATE, 
    allowNull: true

  },
  endDate: {
   	type: Sequelize.DATE, 
    allowNull: true

  },
  rent_amount: {
    type: Sequelize.FLOAT,
    allowNull: true
    // allowNull defaults to true
  },
  
}, {
  // options
});

}