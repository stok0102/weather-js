var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('#showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
  });
  $("#cityId").click(function() {
    var cityId = $('#city').val();
    $('#city').val("");
    $.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=' + cityId + '&cnt=5' + '&appid=' + apiKey, function(forecast) {
      $('#moWeather').text("The high tomorrow in " + forecast.city.name + " is " + ((forecast.list[1].temp.max) - 273.15) + " degrees Celsius.");
      console.log(forecast);
    });
  });
});
