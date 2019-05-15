// Requiring our models
var db = require("../models");
const request = require('request');
const StargazingTime = require('stargazing-time');

// Routes
// =============================================================
module.exports = function(app) {

//   GET route for getting all of the events
  app.get("/api/events", function(req, res) {   
    db.Events.findAll().then(function(eventData) {
      res.json(eventData);
    });
  });

  app.get("/api/stargaze/:city", function(req, res) {   
    StargazingTime.getGoodTimes({
      city: req.params.city + ',us',
      apiKey: '028bfc49fd0424eb39c6628c6a864f9e'
  })
    .then(function(data) {
      res.json(data);
    });
  });


  app.put("/api/events/:id", function(req, res) {
    db.Events.update({favorited: req.body.favorited}, //was 1
      {where: {
        id: req.params.id
      }}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/apod", function(req, res) {

    var apodData;
    var image;

    //Start Request to APOD API
    request(
      {
        method: "GET",
        url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
      },
      (err, response) => {
        if (err) {
          console.log(err);
        } else {
 
          console.log("--------APOD RES BODY: ",response.body);
          apodData  = JSON.parse(response.body);

          image = apodData.url;
          console.log("--------APOD RES BODY IMG o Day: ",image);


          res.send(apodData);
        }//end ELSE stmnt
      }//end Request callback fct
    );//End Request to APOD API
  });




//   // Get route for retrieving a single post
//   app.get("/api/posts/:id", function(req, res) {
//     // 2. Add a join here to include the Author who wrote the Post
//     db.Post.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Author]
//     }).then(function(dbPost) {
//       console.log(dbPost);
//       res.json(dbPost);
//     });
//   });

//   // POST route for saving a new post
//   app.post("/api/posts", function(req, res) {
//     db.Post.create(req.body).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

//   // DELETE route for deleting posts
//   app.delete("/api/posts/:id", function(req, res) {
//     db.Post.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

//   // PUT route for updating posts
//   app.put("/api/posts", function(req, res) {
//     db.Post.update(
//       req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });
};