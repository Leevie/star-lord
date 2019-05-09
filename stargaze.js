const StargazingTime = require('stargazing-time');

StargazingTime.getGoodTimes({
        city: 'Eagan,us',
        apiKey: '028bfc49fd0424eb39c6628c6a864f9e'
    })
    .then(function(results) {
        console.log(results[0].from)
        console.log(results[0].to)

        var weatherArray = Object.values(results[0].forecast.weather[0]);

        console.log(weatherArray[2])
        // console.log(results[0].forecast.weather[0])

        var dateTest = new Date(results[0].from)
        console.log((dateTest.getUTCHours() - 6))       //-6 converts UTC to central time (our time) 0 would be midnight

    });