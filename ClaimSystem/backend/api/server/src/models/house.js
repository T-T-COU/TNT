module.exports = (sequelize, DataTypes) => {
//Constructing objects
const House = sequelize.define('houses', {
  // attributes
  houseID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // options
});

return House
}