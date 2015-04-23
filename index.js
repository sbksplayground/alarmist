var express = require('express');
var app = express();
//var multer = require('multer');
var server= require('http').Server(app);
var io = require('socket.io')(server);
var points = require('./modules/graph-data');
var graphs = require('./modules/graph-new');
var bodyParser = require('body-parser');

app.set('view engine', 'jade');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./assets'));
//app.use(multer({ dest: './uploads'}));
//app.use(multer({ dest: './uploads'}));

app.get('/', function (req, res, next) {
  points.getInitData(function(err, data){
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

app.post('/api/add-new-graph', function (req, res, next) {
  var initdata;  
  points.getInitData(function(err, data){
    if(err) return next(err);
    initdata = data;
  });
  graphs.getGraphSvg(parseInt(req.body.lastGraphId)+1, function(err, graph){
    if(err) return next(err);
    res.json({numbers: initdata, length: 40, graph: graph, color: req.body.color, min: req.body.min, max: req.body.max});
  });
});

var interval;
var graphid = 1;
io.on('connection', function(socket, interval){
    console.log('connected');
    interval = setInterval(function(){
        socket.emit(
            'data',
            points.getData(
                function(err, data){
                    if(err) return next(err);
                    return data;
                }),
            graphid
        );
    },5000);
});
io.on('disconnect', function(socket, interval){
	console.log('disconnected');
	clearInterval(interval);
});
server.listen(8080, function () {
	var addr = this.address();
	console.log("Server listening on http://%s:%s", addr.address, addr.port);
});
