$(function() {
  // Function for creating a new list row for Events
  $(document).on("click", ".foundationSuxx", function(){
  let id = $(this).data("id");
console.log(id)
  let newFavoriteState = {
    favorited: 1
  };

  // Send the PUT request.
  $.ajax("/api/events/" + id, {
    type: "PUT",
    data: newFavoriteState
  }).then(
    function() {
      console.log("changed event status to favorited");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

$(document).on("click", ".unFav", function(){
    let id = $(this).data("id");
  console.log(id)
    let newFavoriteState = {
      favorited: 0
    };
  
    // Send the PUT request.
    $.ajax("/api/events/" + id, {
      type: "PUT",
      data: newFavoriteState
    }).then(
      function() {
        console.log("changed event status to unfavorited");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $.get("/api/events", function(data) {
    for(var i = 0; i < data.length; i++) {
    let x = i+1
    let newTr = $("<tr>");
    newTr.append("<td>" + data[i].title + "</td>");
    newTr.append("<td>" + data[i].date + "</td>")
    $(".foundationSuxx").addClass("success button")
    $(".unFav").addClass("alert button")

   if(data[i].favorited == 0){
    newTr.append("<td>" + "<button type = " + "button " + "data-id = " + x + " class = " + "foundationSuxx" + ">" + "Favorite" + "</button>" + "</td>")
    $("#events").append(newTr)
   }
    else{
    newTr.append("<td>" + "<button type = " + "button " + "data-id = " + x + " class = " + "unFav" + ">" + "Unfavorite" + "</button>" + "</td>")
    $("#favorited-events").append(newTr)
    }
}

    console.log(data)
  });



});