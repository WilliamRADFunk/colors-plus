# colors-plus

A simplistic extension of functionality to the npm package 'colors'

For custom reporting on tests, I needed the green check for passing, red X for failing to pass, and the yellow triangle as warning.

The colors library by Marak is the powerhouse here. This library incorporates that, adding some additional shapes.

##Example
---------------------------------------------

var colors = require('colors-plus');
var messageToFormat = "Test 1 failed";

console.log(colors.failure(messageToFormat));

---------------------------------------------

> X		Test 1 failed
