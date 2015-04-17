var express = require('express');
//var multer = require('multer');
var points = require('./modules/graph-data');

var app = express()
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('./assets'));
//app.use(multer({ dest: './uploads'}));

app.get('/', function (req, res, next) {
  points.getData(function(err, data){
    if(err) return next(err);
    res.render('index', {numbers: data, length: 40});
  });
});

app.get('/api/getdata', function (req, res, next) {
  points.getData(function(err, data){
    if(err) return next(err);
    res.json(data);
  });
});

app.listen(8080, function () {
	var addr = this.address();
	console.log("Server listening on http://%s:%s", addr.address, addr.port);
});
