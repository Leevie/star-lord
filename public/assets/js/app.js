$(document).foundation()



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

    var imageURL = data.url;
    var imageTitle = data.title;
    var image = $("<img>")
        .attr("src", imageURL)
        
        $("#fav-img")
          .append(image)
          .append(imageTitle);
    
  });
