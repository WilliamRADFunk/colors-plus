var colors = require('colors');

module['exports'] = function()
{
	var success = function (msg)
	{
		return ('\u2713'.green + msg);
	};
};