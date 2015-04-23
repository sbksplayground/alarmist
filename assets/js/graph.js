var lastGraphId = 1;
function getNewGraph(){
  var xhr = new XMLHttpRequest();
  xhr.onload = reqListener;
  xhr.onerror = reqError;
  var color = document.getElementById('form-color').value;
  var min = document.getElementById('form-min').value;
  var max = document.getElementById('form-max').value;
  console.log(color, min, max);
  xhr.open("POST", "/api/add-new-graph", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var data_to_send = "color="+color+"&min="+min+"&max="+max+"&lastGraphId="+lastGraphId;
  xhr.send(data_to_send);
}

var reqListener = function() {
  var graphsetup = JSON.parse( this.response );
  var lastGraph = document.getElementById('graph-'+lastGraphId++);
  var newGraphPlace = document.createElement("div");
  if (lastGraph.nextSibling) {
    lastGraph.parentNode.insertBefore(newGraphPlace, lastGraph.nextSibling);
  }
  else {
    lastGraph.parentNode.appendChild(newGraphPlace);
  }
  newGraphPlace.innerHTML = graphsetup.graph;
  setupGraph(lastGraphId, graphsetup.color, graphsetup.min, graphsetup.max);
}
var reqError = function(){
  console.log("Request error ... stoping interval!");
}


var socket = io();
socket.on('data', function (data, graphid) {
    updateGraph(data, graphid);
});

var setupGraph = function(graphid, color, min, max){
    var graph = document.getElementById('graph-'+graphid);
    console.log("For graph: ",graph,"setup: color: "+color+" min: "+min+" max: "+max);
}

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
    if(data[i]==max || data[i]==min){
      point.setAttribute("fill", "red");  
    }else {
      point.setAttribute("fill", "black")
    }
    if(i!=0){
      line = graph.getElementById('graph-line-'+i);
      line.setAttribute("y1", cy);
      line.setAttribute("y2", before_cy);
    }
    before_cy = cy;
  }
};
