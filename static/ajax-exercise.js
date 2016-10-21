"use strict";


// PART 1: SHOW A FORTUNE
function replaceFortune(results) {
    var fortune = results;
    $('#fortune-text').html(fortune);
    // console.log('Finished replaceFortune');

}

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', replaceFortune);
//     console.log('Finished sending ajax')
// }

$('#get-fortune-button').on('click', showFortune);


}


// PART 2: SHOW WEATHER
function replaceWeather(url){
    var weather = $('#weather-form').serialize();
    // var weather = results;
    $('#weather-form').html(weather);
    console.log('Finished replaceWeather')
}

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    $.get('/weather.json', {url}, replaceWeather);
    console.log('Finished sending ajax')
    // TODO: request weather with that URL and show the forecast in #weather-info
}

 $("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

// function orderMelons(evt) {
//     evt.preventDefault();

//     // TODO: show the result message after your form
//     // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
// }

// $("#order-form").on('submit', orderMelons);


