var colors = require('colors');

exports.success = function (msg)
{
	return ('\u2713'.green + msg);
};