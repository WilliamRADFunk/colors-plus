# colors-plus

A simplistic extension of functionality to the npm package 'colors'

For custom reporting on tests, I needed the green check for passing, red X for failing to pass, and the yellow triangle as warning.

The colors library by Marak is the powerhouse here. This library incorporates that, adding some additional shapes.

##Example

var colors = require('colors-plus');<br/>
var failedMessageToFormat = "Test 1 failed";
var successMessageToFormat = "Test 2 passed";
var warningMessageToFormat = "Test warning";

console.log(colors.failure(failedMessageToFormat));
console.log(colors.success(successMessageToFormat));
console.log(colors.warning(warningMessageToFormat));

---------------------------------------------

$> ✓		Test 1 failed

$> ✗		Test 2 passed

$> ▲		Test warning
