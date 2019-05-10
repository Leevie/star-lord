$(function() {
  // Function for creating a new list row for Events
  $(document).on("click", ".foundationSuxx", function(){
  var id = $(this).data("id");
console.log(id)
  var newFavoriteState = {
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

  $.get("/api/events", function(data) {
    for(var i = 0; i < data.length; i++) {
    let x = i+1
    let newTr = $("<tr>");
    newTr.append("<td>" + data[i].title + "</td>");
    newTr.append("<td>" + data[i].date + "</td>")

   if(data[i].favorited == 0){
    newTr.append("<td>" + "<button type = " + "button " + "data-id = " + x + " class = " + "foundationSuxx" + ">" + "Favorite" + "</button>" + "</td>")
    $(".foundationSuxx").addClass("hollow button success")
    $("#events").append(newTr)
   }
    else{
    newTr.append("<td>" + "<button type = " + "button " + "data-id = " + x + " class = " + "foundationSuxx" + ">" + "Unfavorite" + "</button>" + "</td>")
    $("#favorited-events").append(newTr)
    }
}

    console.log(data)
  });



});