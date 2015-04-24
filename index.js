var express = require('express');
var app = express();
//var multer = require('multer');
var server= require('http').Server(app);
var io = require('socket.io')(server);
var Generator = require('./modules/graph-data');
var Graph = require('./modules/graph-new');
//var bodyParser = require('body-parser');

app.set('view engine', 'jade');
app.set('views', './views');
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./assets'));
//app.use(multer({ dest: './uploads'}));
//app.use(multer({ dest: './uploads'}));

app.get('/', function (req, res, next) {	
 // points.getInitData(function(err, data){
   // if(err) return next(err);
    res.render('index' );//{numbers: data, length: 40});
  //});
});


//app.get('/api/getdata', function (req, res, next) {
//  console.log("Request on: /api/getdata");
//  points.getData(function(err, data){
//    if(err) return next(err);
//    res.json(data);
//  });
//});

//app.post('/api/add-new-graph', function (req, res, next) {
//  var initdata;  
//  points.getInitData(function(err, data){
//    if(err) return next(err);
//    initdata = data;
//  });
//  graphs.getGraphSvg(parseInt(req.body.lastGraphId)+1, function(err, graph){
//    if(err) return next(err);
//    res.json({numbers: initdata, length: 40, graph: graph, color: req.body.color, min: req.body.min, max: req.body.max});
//  });
//});


io.on('connection', function(socket){
    console.log('connected');
    var graphs = [];
    var generators = [];
    var intervals = [];
    //graphs.push(new Graph(1, 0, 200, 'black', 40));
    //generators.push(new Generator(0,200,40));
    //var interval = setInterval(function(){
    //    for(var i = 0; i < graphs.length; i++){
    //        socket.emit('update',{
    //            points : generators[i].getData(
    //                function(err, data){
    //                    if(err) return next(err);
    //                    return data;
    //                }),
    //            graphId: graphs[i].id}
    //        );
    //    }
    //},5000);
    
    socket.on('newGraph', function(data){
        console.log('newGraph', data.color, data.min, data.max);
        var newGraph = new Graph((graphs.length),data.min, data.max, data.color, 40);
        graphs.push(newGraph);
        generators.push(new Generator(data.min, data.max, 40));
        newGraph.getGraphSvg(function(err, graph){
            if(err) return next(err);
            socket.emit('newGraph', {graphSvg: graph, min: newGraph.min, max: newGraph.max, graphId: newGraph.id});
            intervals.push(setInterval(function(){
                //for(var i = 0; i < graphs.length; i++){
                    socket.emit('update',{
                            points : generators[newGraph.id].getData(
                                function(err, data){
                                    if(err) return next(err);
                                    return data;
                                }),
                            graphId: newGraph.id}
                    );
                }
            , Math.floor(Math.random()*500+500)));
        });
    })
    
    socket.on('disconnect', function(){
        console.log('disconnected');
        for(var i = 0; i < intervals.length; i++){
            clearInterval(intervals[i]);
        }
    });

});
server.listen(8080, function () {
	var addr = this.address();
	console.log("Server listening on http://%s:%s", addr.address, addr.port);
});
