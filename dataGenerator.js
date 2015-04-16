module.exports = function (oldData, cb){
	var data = oldData;
	data.push(Math.random()*100);
	if(data.length > 15){
		data.shift();
	}
	return cb(null, data);
}
