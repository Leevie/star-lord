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

  //Stargaze route for getting a certain city through openweather app
  app.get("/api/stargaze/:city", function(req, res) {   
    StargazingTime.getGoodTimes({
      city: req.params.city + ',us',
      apiKey: '028bfc49fd0424eb39c6628c6a864f9e'
  })
    .then(function(data) {
      res.json(data);
    });
  });

// Favorite / Unfavorite event update route
  app.put("/api/events/:id", function(req, res) {
    db.Events.update({favorited: req.body.favorited}, //was 1
      {where: {
        id: req.params.id
      }}).then(function(results) {
      res.json(results);
    });
  });

  //APOD image GET route
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

};