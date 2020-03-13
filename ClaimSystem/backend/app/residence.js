
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