var colors = require('colors');

exports["success"] = function(msg)
{
	return ('\u2713'.green + "\t" + msg);
};
exports["failure"] = function(msg)
{
	return ('\u2717'.red + "\t" + msg);
};
exports["warning"] = function(msg)
{
	return ('\u25B2'.yellow + "\t" + msg);
};