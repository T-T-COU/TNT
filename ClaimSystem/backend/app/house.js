
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