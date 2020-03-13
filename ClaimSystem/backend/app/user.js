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


// module.exports = (app, db) => {

//     app.post("/post", (req, res) => 
//     db.post.create({
//       title: req.body.title,
//       content: req.body.content
//     }).then( (result) => res.json(result) )
//   );
   


//   app.get( "/posts", (req, res) =>
//     db.post.findAll().then( (result) => res.json(result) )
//   );



// app.put( "/post/:id", (req, res) =>
//     db.post.update({
//       title: req.body.title,
//       content: req.body.content
//     },
//     {
//       where: {
//         id: req.params.id
//       }
//     }).then( (result) => res.json(result) )
//   );


//   app.delete( "/post/:id", (req, res) =>
//     db.post.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then( (result) => res.json(result) )
//   );


// }