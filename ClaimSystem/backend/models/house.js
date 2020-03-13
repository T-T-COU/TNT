module.exports = (sequelize, DataTypes) => {
//Constructing objects
const House = sequelize.define('house', {
  // attributes
  houseID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // options
});
}

