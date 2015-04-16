var underscore = require('underscore');
module.exports = function (oldData, cb){
	var data = oldData;
	data.push(underscore.random(-100,100));
	if(data.length > 15){
		data.shift();
	}
	return cb(null, data);
}
