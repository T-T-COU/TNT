
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