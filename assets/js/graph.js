//function graphPoints(){
//  var xhr = new XMLHttpRequest();
//  xhr.onload = reqListener;
//  xhr.onerror = reqError;
//  xhr.open("get", "/api/getdata", true);
//  xhr.send();
//}
//var reqListener = function() {
//  var points = JSON.parse(this.response);
//  updateGraph(points);
//  document.getElementById('data').innerHTML = points;
//  console.log(points);
//}
//var reqError = function(){
//  console.log("Request error ... stoping interval!");
//  clearInterval(idInterval);
//}


var socket = io();
socket.on('data', function (data) {
    document.getElementById('data').innerHTML = data;
    updateGraph(data);
});


var updateGraph = function(data){
  var before_cy, line, point;
  var max = Math.max.apply(null, data);
  var min = Math.min.apply(null, data);
  console.log("Points max is "+max+" and min is "+min);
  for (var i=0; i < data.length; i++){
    var cy = 250+data[i]*2.5;
    point = document.getElementById('graph-point-'+i);
    point.setAttribute("cy", cy);
    if(data[i]==max || data[i]==min){
      point.setAttribute("fill", "red");  
    }else {
      point.setAttribute("fill", "black")
    }
    if(i!=0){
      line = document.getElementById('graph-line-'+i);
      line.setAttribute("y1", cy);
      line.setAttribute("y2", before_cy);
    }
    before_cy = cy;
  }
};
