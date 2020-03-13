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


function populate_sample_data(){

	// Note: using `force: true` will drop the table if it already exists
	House.sync({ force: true }).then(() => {
	  // Now the `users` table in the database corresponds to the model definition
	  return House.create({
	    name: 'Anton',
	    address: 'Englishland'
	  });
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



	// Note: using `force: true` will drop the table if it already exists
	Claim.sync({ force: true }).then(() => {
	  // Now the `users` table in the database corresponds to the model definition
	  // return House.create({
	  //   name: 'Anton',
	  //   address: 'Englishland'
	  // });
	});

}



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


//House has many claims, users
//users have many claims
//houses have many residences
//residneces have many users



 // Author.associate = (models) => {
 //    Author.hasMany(models.post);
 //  };

 //  return Author;




sequelize.sync()


//USER CRUD
function read_all_users(){

	return User.findAll().then(users => {
		res = JSON.stringify(users, null, 4)
	  // console.log("All users:", res);

	  return res
	});
}

function create_one_user(vars){

	return User.create(vars).then(created => {
  console.log(vars.name + " auto-generated ID:", created.userID);
});

}
function delete_one_user(vars){

	return User.destroy({
	  where: {
	    userID: vars.userID
	  }
	}).then(() => {
	  console.log("Done");
	});
}


function update_one_user(vars, new_vars){
	return User.update({ new_vars }, {
	  where: {
	    userID: vars.userID
	  }
	}).then(() => {
	  console.log("Done");
	  return true
	});	
}


//HOUSE CRUD

function read_all_houses(){

	return House.findAll().then(houses => {
		res = JSON.stringify(houses, null, 4)
	  console.log("All houses:", res);

	  return res
	});
}

function create_one_house(vars){

	return House.create(vars).then(created => {
  console.log(vars.name + " auto-generated ID:", created.houseID);
});

}
function delete_one_house(vars){

	return House.destroy({
	  where: {
	    houseID: vars.houseID
	  }
	}).then(() => {
	  console.log("Done");
	});
}


function update_one_house(vars, new_vars){
	return House.update({ new_vars }, {
	  where: {
	    houseID: vars.houseID
	  }
	}).then(() => {
	  console.log("Done");
	  return true
	});	
}



//RESIDENCE CRUD
function read_all_residences(){

	return Residence.findAll().then(r => {
		res = JSON.stringify(r, null, 4)
	  console.log("All Residence:", res);

	  return res
	});
}



function create_one_residence(vars){

	return Residence.create(vars).then(created => {
  console.log(vars.name + " auto-generated ID:", created.residenceID);
});

}
function delete_one_residence(vars){

	return Residence.destroy({
	  where: {
	    residenceID: vars.residenceID
	  }
	}).then(() => {
	  console.log("Done");
	});
}


function update_one_residence(vars, new_vars){
	return Residence.update({ new_vars }, {
	  where: {
	    residenceID: vars.residenceID
	  }
	}).then(() => {
	  console.log("Done");
	  return true
	});	
}


//CLAIM CRUD
function read_all_claims(){

	return Claim.findAll().then(c => {
		res = JSON.stringify(c, null, 4)
	  // console.log("All Claim:", res);

	  return res
	});
}


//claims submitted/belonging to a userID
function read_all_belonging_to_user(vars){
	return Claim.findAll({
		where: {
	    userID: vars.userID
	  }


	}).then(c => {
		res = JSON.stringify(c, null, 4)
	  console.log("All Claim:", res);

	  return res
	});
}


//claims submitted/belonging to a userID
function read_all_belonging_to_house(vars){
	return Claim.findAll({
		where: {
	    houseID: vars.houseID
	  }



	}).then(c => {
		res = JSON.stringify(c, null, 4)
	  console.log("All Claim:", res);

	  return res
	});
}

function create_one_claim(vars){

	return Claim.create(vars).then(created => {
  console.log(vars.name + " auto-generated ID:", created.claimID);
});

}
function delete_one_claim(vars){

	return Claim.destroy({
	  where: {
	    claimID: vars.claimID
	  }
	}).then(() => {
	  console.log("Done");
	});
}


function update_one_house(vars, new_vars){
	return Claim.update({ new_vars }, {
	  where: {
	    claimID: vars.claimID
	  }
	}).then(() => {
	  console.log("Done");
	  return true
	});	
}


// delete_one_user(4)
// delete_one_user(5)
// delete_one_user(6)
// create_one_user({"name":"SonsOfAntonTwo","type":"Tenant","user_level":0})
// read_all_users()

//returns a promise object
users = read_all_users()
console.log(users)
