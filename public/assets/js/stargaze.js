

$(function() {

hideStuff() //Hides cards and "nothing" results

    $(document).on("click", "#submit", function(){ //Submit button functionality

hideStuff()

    var cityChoice = $("#cityChoice").val().trim() //Taking user city input
    
    $.get("/api/stargaze/" + cityChoice, function(results) { //Call to API route using stargazing-time / OpenWeather for city

        if (results.length == 0){
            console.log("No good dates were found. Unfortunate for you. Must not be nice weather!")
            $("#nothing").show() //Showing "nothing" results in HTML
            $("#nothingFound").show()
        }
        else{
            var x = 1; //Hiding all cells before deciding to show them

            for(i = 1; i < 6; i++){
            $("#" + i).hide()
            }

        for(i = 0; i < results.length; i++){ //Shows cards if there is result data for them
        console.log(results[i].from)

        $("#" + x).show()

        let weatherArray = Object.values(results[i].forecast.weather[0]);

        if(weatherArray[2] == "clear sky"){ //Decides what weather image to display based on results
        $("#weather-pic-" + x).attr("src", "./assets/images/clear.png")
        }

        if(weatherArray[2] == "few clouds" || weatherArray[2] == "scattered clouds"){
        $("#weather-pic-" + x).attr("src", "./assets/images/clouds.png")
        }

        if(weatherArray[2] == "light rain"){
        $("#weather-pic-" + x).attr("src", "./assets/images/rain.png")
        }

        let utcSucks = moment.tz(results[i].from, "Europe/London"); //Converts UTC data pulled back in CDT timezone
        let tzConvert = utcSucks.clone().tz("America/Chicago")
        console.log(tzConvert)

        let day = moment(tzConvert).format('dddd') //Pulls day of the week back from time
        let timeOfDay = moment(tzConvert).format("MMMM Do, h:mm:ss a")
        console.log(day)

        $("#day-"+x).text(day) //Filling in card fields with data
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