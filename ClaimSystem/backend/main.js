const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('postgres', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
   pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



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



// Note: using `force: true` will drop the table if it already exists
House.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  return House.create({
    name: 'Anton',
    address: 'Englishland'
  });
});




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



// Note: using `force: true` will drop the table if it already exists
User.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  return User.create({
    name: 'SonOfAnton',
    type: 'staff',
    user_level: 1, //1 for admin, 0 for normal
  });
});



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

  amount: {
    type: Sequelize.FLOAT,
    allowNull: false
    // allowNull defaults to true
  },
  image: {
    type: Sequelize.BLOB,
    allowNull: true
    // allowNull defaults to true
  },
  houseID: {
    type: Sequelize.INTEGER,
    allowNull: true
    // allowNull defaults to true
  },
  approver_userID: {
    type: Sequelize.INTEGER,
    allowNull: true
    // allowNull defaults to true
  },

  status_: {
  	defaultValue: 'Pending',
    type: Sequelize.STRING,
    allowNull: false
    // allowNull defaults to true
  },


  time_updated: {
    type: Sequelize.DATE,
    allowNull: true
    // allowNull defaults to true
  },


}, {
  // options
});



// Note: using `force: true` will drop the table if it already exists
Claim.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  // return House.create({
  //   name: 'Anton',
  //   address: 'Englishland'
  // });
});






