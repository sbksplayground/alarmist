//var _und = require('underscore');
//Constructor
function Graph(id, min, max, color, numPoints){
    this.id = id;
    this.min = min;
    this.max = max;
    this.color = color
    this.numPoints = numPoints;
}
//Method for generating html svg
Graph.prototype.getGraphSvg = function(callback){
    var svg_start = '<svg id=graph-'+ this.id +' version="1.1" baseProfile="full" width="900" height="550" xmlns="http://www.w3.org/2000/svg" class="chart">';
    var svg_end = '</svg>';
    var axis_x = '<line id="axis-x" x1="25" y1="520" x2="870" y2="520" stroke="black" stroke-width="2" marker-end="url(#Arrow)"></line>';
    var axis_y = '<line id="axis-y" x1="30" y1="525" x2="30" y2="20" stroke="black" stroke-width="2" marker-end="url(#Arrow)"></line>';

    var init_defs = '<defs>\n\
    <marker id="Arrow" markerWidth="5" markerHeight="5" viewBox="-6 -6 12 12" refX="-2" refY="0" markerUnits="strokeWidth" orient="auto">\n\
    <polygon points="-2,0 -5,5 5,0 -5,-5" fill="black" stroke="black" stroke-width="1px"></polygon>\n\
    </marker>\n\
    </defs>';
    
    var exportObj = "";
    exportObj += svg_start + init_defs + axis_y +  axis_x;
    var lastX = 30;
    var scaleX = 840/(this.numPoints-1);
    for(var i = 0; i < this.numPoints; i++){
        var currentX = (i*scaleX)+30;
        var axis_y_points = '<line x1="25" y1="'+(520-(i*20))+'" x2="35" y2="'+(520-(i*20))+'" stroke="black" stroke-width="2"></line>';
        var axis_x_points = '<line x1="'+currentX+'" y1="515" x2="'+currentX+'" y2="525" stroke="black" stroke-width="2"></line>';

        var graph_point = '<circle cx="'+currentX+'" cy="520" r="5" fill="'+this.color+'" id="graph-point-'+i+'"></circle>';
        if(i !== 0)
            var graph_points_line = '<line x1="'+currentX+'" y1="520" x2="'+lastX+'" y2="520" stroke="'+this.color+'" stroke-width="2" id="graph-line-'+i+'"></line>';
        exportObj += axis_y_points + axis_x_points;
        exportObj += graph_point;
        exportObj += graph_points_line;
        lastX = currentX;
    }
    exportObj += svg_end;
    return callback(null, exportObj);
};

module.exports = Graph;