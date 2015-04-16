var nIntervId;
function reqListener(){
	drawGraph(JSON.parse(this.response));
	}
var response = function(){
	var req = new XMLHttpRequest();
	req.onload = reqListener;
	req.open("POST","/",true);
	req.send();
}
var svgNS = "http://www.w3.org/2000/svg";
var svg = document.createElementNS(svgNS, "svg");
nIntervId = setInterval(response, 3000);
var drawGraph = function(data){
	console.log(data);
	var len = data.length;
	if(len>1){
		while(svg.firstChild){
			svg.removeChild(svg.firstChild);
		}
		var min = Math.min.apply(Math, data);
		if(min>0){
			min = 0;
		}
		console.log(min);
		var scaleY = 280/(Math.max.apply(Math, data)+Math.abs(min));
		var scaleX = 580/(len-1);
		svg.setAttribute('style','border: 1px solid black');
		svg.setAttribute('width', '600');
		svg.setAttribute('height', '300');
		svg.setAttribute('fill', 'transparent');
		var drowLine = function(x1, y1, x2, y2, width){
			var line = document.createElementNS(svgNS, "line");
			line.setAttribute('x1', x1);
			line.setAttribute('x2', x2);
			line.setAttribute('y1', y1);
			line.setAttribute('y2', y2);
			line.setAttribute('stroke', 'black');
			line.setAttribute('stroke-width', width);
			line.setAttribute('fill', 'transparent');
			svg.appendChild(line);
		}
		drowLine(10, 10, 10, 290, 2);		
		drowLine(10, 290, 590, 290, 2);
		var currentX = 10;
		for(var i = 0; i < len-1; i++){
			if(data[i] !==null){
			drowLine(currentX, 140-data[i]*scaleY, currentX+scaleX, 140-data[i+1]*scaleY, 1);		
			currentX = currentX+scaleX;
			}
		}	
	}
}
document.body.appendChild(svg);
