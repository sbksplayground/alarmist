var _und = require('underscore');
var exports = module.exports = {};

exports.graphId;

exports.getGraphSvg = function(graphId, color, min, max, numPoints, callback){
    exports.graphId = graphId;
    if(!numPoints) numPoints = 40;
    var svg_start = '<svg id=graph-'+ graphId +' version="1.1" baseProfile="full" width="900" height="550" xmlns="http://www.w3.org/2000/svg" class="chart">';
    var svg_end = '</svg>';
    var axis_y = '<line id="axis-y" x1="20" y1="500" x2="20" y2="20" stroke="black" stroke-width="2" marker-end="url(#Arrow)"></line>';
    var axis_x = '<line id="axis-x" x1="20" y1="500" x2="860" y2="500" stroke="black" stroke-width="2" marker-end="url(#Arrow)"></line>';
    
    var init_defs = '<defs>\n\
    <marker id="Arrow" markerWidth="5" markerHeight="5" viewBox="-6 -6 12 12" refX="-2" refY="0" markerUnits="strokeWidth" orient="auto">\n\
    <polygon points="-2,0 -5,5 5,0 -5,-5" fill="black" stroke="black" stroke-width="1px"></polygon>\n\
    </marker>\n\
    </defs>';
    
    var exportObj = "";
    exportObj += svg_start + init_defs + axis_y +  axis_x;
    var lastX;
    var difference = 840/numPoints;
    for(var i = 0; i < numPoints; i++){
        var currentX = ((i*difference)+40);
        var axis_y_points = '<line x1="15" y1="'+(480-(i*difference))+'" x2="25" y2="'+(480-(i*difference))+'" stroke="black" stroke-width="2"></line>';
        var axis_x_points = '<line x1="'+currentX+'" y1="495" x2="'+currentX+'" y2="505" stroke="black" stroke-width="2"></line>';
        
        var graph_point = '<circle cx="'+currentX+'" cy="'+max+'" r="5" fill="'+color+'" id="graph-point-'+i+'"></circle>';
        if(i !== 0)
            var graph_points_line = '<line x1="'+currentX+'" y1="'+max+'" x2="'+lastX+'" y2="'+max+'" stroke="'+color+'" stroke-width="2" id="graph-line-'+i+'"></line>';
        
        exportObj += axis_y_points + axis_x_points;
        exportObj += graph_point;
        exportObj += graph_points_line;
        lastX = currentX;
    }
    exportObj += svg_end;
    return callback(null, exportObj);
};