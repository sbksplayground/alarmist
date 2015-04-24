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

var updateGraph = function(data, graphid){
  console.log(graphid, data);
  var graph = document.getElementById('graph-'+graphid);
  var before_cy, line, point;
  var max = Math.max.apply(null, data);
  var min = Math.min.apply(null, data);
  console.log("Points max is "+max+" and min is "+min);
  for (var i=0; i < data.length; i++){
    var cy = 250+data[i]*2.5;
    point = graph.getElementById('graph-point-'+i);
    point.setAttribute("cy", cy);
//    if(data[i]==max || data[i]==min){
//      point.setAttribute("fill", "red");  
//    }else {
//      point.setAttribute("fill", "black")
//    }
    if(i!=0){
      line = graph.getElementById('graph-line-'+i);
      line.setAttribute("y1", cy);
      line.setAttribute("y2", before_cy);
    }
    before_cy = cy;
  }
}