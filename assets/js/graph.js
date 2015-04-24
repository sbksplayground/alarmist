var socket = io();
    socket.on('data', function(data){
	var points = data.points;
        var graphId = data.graphId;
	console.log(points, graphId);
	updateGraph(points, graphId);
    });

function getNewGraph(){
  var color = document.getElementById('form-color').value;
  var min = document.getElementById('form-min').value;
  var max = document.getElementById('form-max').value;
  socket.emit('newGraph', {color: color, min: min, max: max});
}

//pošle SVG s grafem
socket.on('newGraph', function(data){
    var graphsetup = data.graph;
    var graphId = data.graphId;
    var lastGraph = document.getElementById('graph-'+(graphId-1));
    var newGraphPlace = document.createElement("div");
    if (lastGraph.nextSibling) {
      lastGraph.parentNode.insertBefore(newGraphPlace, lastGraph.nextSibling);
    }
    else {
      lastGraph.parentNode.appendChild(newGraphPlace);
    }
    newGraphPlace.innerHTML = graphsetup;
});

var updateGraph = function(data, graphid, min, max){
  min = -100; max = 300;
  console.log(graphid, data);
  var graph = document.getElementById('graph-'+graphid);
  var before_cy, line, point;
  var scaleY = 480/(max-min);
  
  for (var i=0; i < data.length; i++){
//    var cy = 250+data[i]*2.5;
    var cy = (500-data[i]*scaleY)+(scaleY*min);
    point = graph.getElementById('graph-point-'+i);
    point.setAttribute("cy", cy);

    if(i!=0){
      line = graph.getElementById('graph-line-'+i);
      line.setAttribute("y1", cy);
      line.setAttribute("y2", before_cy);
    }
    before_cy = cy;
  }
}