(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "ce866ab8b564a5a186bed6c157235544";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}]},{},[2]);
