var apiKey = "ce866ab8b564a5a186bed6c157235544";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    
    var city = $('#location').val();
    $('#location').val("");
    $('#showWeather').text("The city you have chosen is " + city ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      console.log(response);
    });
  });
});
