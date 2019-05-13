$(document).foundation()

// const apod = require("apod-nasa");
 
// apod().then(data => {
//   console.log(data);
//     /*
//       {
//         title: 'The Summer Triangle over the Great Wall',
//         image: 'https://apod.nasa.gov/apod/image/1707/GreatWallMilkyWay_Yu_1686.jpg'
//       }
//     */
// });

$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    var userName = data.email.split("@")[0];
    $("#member-name").text(userName);
  });
});


$.get("/api/apod", function (data) {
    console.log(data);
    // for (var i = 0; i < data.length; i++) {
    // $("#events-table").append("<tr><td id='fav-title data-id="+ data[i].id + ">" + data[i].title + "</td><td id='fav-date'>" + data[i].date + "</td><td>" + '<button type="button" class="hollow button success" id="fav-btn">Select</button>' + "</td></tr>");
    var imageURL = data.url;
    var imageTitle = data.title;
    var image = $("<img>")
        .attr("src", imageURL)
        
        $("#fav-img")
          .append(image)
          .append(imageTitle);
    
  });
