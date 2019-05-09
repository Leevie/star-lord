const cheerio = require('cheerio');
const request = require('request');

request({
    method: 'GET',
     url: 'http://www.seasky.org/astronomy/astronomy-calendar-2019.html'  //'http://localhost:8000'
}, (err, res, body) => {

    if (err) return console.error(err);

    let $ = cheerio.load(body);
    // let title = $('title');
    // const $ = cheerio.load("<ul>...</ul>")
    const dates = [];
    const titles = [];
    
 $('.date-text').each(function(i, elem) {
   dates[i] = $(this).text();
 });

 $('.title-text').each(function(i, elem) {
    titles[i] = $(this).text();
  });

//  console.log(dates)
// console.log(titles)


    // console.log(title.text());
});