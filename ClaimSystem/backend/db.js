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




// delete_one_user(4)
// delete_one_user(5)
// delete_one_user(6)
// create_one_user({"name":"SonsOfAntonTwo","type":"Tenant","user_level":0})
// read_all_users()

//returns a promise object
users = read_all_users()
console.log(users)
