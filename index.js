var express = require('express');
var app = express();
//var multer = require('multer');
var server= require('http').Server(app);
var io = require('socket.io')(server);
var points = require('./modules/graph-data');

app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('./assets'));
//app.use(multer({ dest: './uploads'}));
//app.use(multer({ dest: './uploads'}));

app.get('/', function (req, res, next) {
  points.getData(function(err, data){
    if(err) return next(err);
    res.render('index', {numbers: data, length: 40});
  });
});

app.get('/api/getdata', function (req, res, next) {
  console.log("Request on: /api/getdata");
  points.getData(function(err, data){
    if(err) return next(err);
    res.json(data);
  });
});

var interval;
io.on('connection', function(socket, interval){
    console.log('connected');
    interval = setInterval(function(){
        socket.emit(
            'data',
            points.getData(
                function(err, data){
                    if(err) return next(err);
                    return data;
                })
        );
    },500);
});
io.on('disconnect', function(socket, interval){
	console.log('disconnected');
	clearInterval(interval);
});
server.listen(8080, function () {
	var addr = this.address();
	console.log("Server listening on http://%s:%s", addr.address, addr.port);
});
