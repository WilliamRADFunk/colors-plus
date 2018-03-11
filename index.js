var colors = require('colors');

exports["success"] = function(msg)
{
	return ('\u2713'.green + "   " + msg.green);
};
exports["failure"] = function(msg)
{
	return ('\u2717'.red + "   " + msg.red);
};
exports["warning"] = function(msg)
{
	return ('\u25B2'.yellow + "   " + msg.yellow);
};