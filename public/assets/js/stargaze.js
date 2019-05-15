

$(function() {

hideStuff()

    $(document).on("click", "#submit", function(){

hideStuff()

    var cityChoice = $("#cityChoice").val().trim()
    
    $.get("/api/stargaze/" + cityChoice, function(results) {

        if (results.length == 0){
            console.log("No good dates were found. Unfortunate for you. Must not be nice weather!")
            $("#nothing").show()
            $("#nothingFound").show()
        }
        else{
            var x = 1;

            for(i = 1; i < 6; i++){
            $("#" + i).hide()
            }

        for(i = 0; i < results.length; i++){
        console.log(results[i].from)

        $("#" + x).show()

        let weatherArray = Object.values(results[i].forecast.weather[0]);

        if(weatherArray[2] == "clear sky"){
        $("#weather-pic-" + x).attr("src", "./assets/images/clear.png")
        }

        if(weatherArray[2] == "few clouds" || weatherArray[2] == "scattered clouds"){
            $("#weather-pic-" + x).attr("src", "./assets/images/clouds.png")
            }

        if(weatherArray[2] == "light rain"){
                $("#weather-pic-" + x).attr("src", "./assets/images/rain.png")
                }

        let utcSucks = moment.tz(results[i].from, "Europe/London");
        let tzConvert = utcSucks.clone().tz("America/Chicago")
        console.log(tzConvert)

        let day = moment(tzConvert).format('dddd')
        let timeOfDay = moment(tzConvert).format("MMMM Do, h:mm:ss a")
        console.log(day)

        $("#day-"+x).text(day)
        $("#weather-"+x).text(weatherArray[2] + " on " + timeOfDay)

        x++
        }
     }

    });
    });
});

function hideStuff(){
    $(".cell").hide()
    $("#nothingFound").hide()
    $("#nothing").hide()
}