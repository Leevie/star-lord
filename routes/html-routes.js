// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
const cheerio = require('cheerio');
const request = require('request');
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // root route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // test route loads test.html
  app.get("/test", function(req, res) {
    request({
        method: 'GET',
         url: 'http://www.seasky.org/astronomy/astronomy-calendar-2019.html'  //'http://localhost:8000'
    }, (err, res, body) => {
    
        if (err) return console.error(err);
    
        let $ = cheerio.load(body);

        const dates = [];
        const titles = [];
        
     $('.date-text').each(function(i, elem) {
       dates[i] = $(this).text();
     });
    
     $('.title-text').each(function(i, elem) {
        titles[i] = $(this).text();
      });
    
    console.log(dates)
    console.log(titles)

    for(i = 0; i < titles.length; i++){
    db.Events.create({ title: titles[i], date: dates[i], description: "waiting on this" }).then(event => {
        console.log("Event auto-generated ID:", event.id);
      });
    }
    
    })
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // authors route loads author-manager.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });

};