var apiKey = "ce866ab8b564a5a186bed6c157235544";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('#showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      console.log(response);
      console.log(JSON.stringify(response));
    });
  });
});
