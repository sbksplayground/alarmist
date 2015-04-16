var express = require('express');
var multer = require('multer');
var dataGenerator = require('./dataGenerator');

var app = express()
app.set('view engine', 'jade');
app.set('views', './views');
app.use('/stylesheets', express.static(__dirname + '/static'));
app.use(multer({ dest: './uploads'}));
app.get('/', function (req, res, next) {
	res.render('index');
	next();
});

var data = new Array(15);
app.post('/', function (req, res) {
	dataGenerator(data, function(err, data){
		if (err) {
			res.render('index');
			return console.error(err);
		}
		this.data = data;
		console.log("Numbers: "+data);
		res.json(data);
	});
	
});

app.listen(8080, function () {
	var addr = this.address();
	console.log("Server listening on http://%s:%s", addr.address, addr.port);
});
