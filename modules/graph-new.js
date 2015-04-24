var _und = require('underscore');
var exports = module.exports = {};
var graph_start = '<svg '
var graph = ' version="1.1" baseProfile="full" width="900" height="550" xmlns="http://www.w3.org/2000/svg" class="chart">\n\
<defs>\n\
<marker id="Arrow" markerWidth="5" markerHeight="5" viewBox="-6 -6 12 12" refX="-2" refY="0" markerUnits="strokeWidth" orient="auto">\n\
<polygon points="-2,0 -5,5 5,0 -5,-5" fill="black" stroke="black" stroke-width="1px"></polygon>\n\
</marker>\n\
</defs>\n\
<line id="axis-y" x1="20" y1="500" x2="20" y2="20" stroke="black" stroke-width="2" marker-end="url(#Arrow)"></line>\n\
<line x1="15" y1="480" x2="25" y2="480" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="460" x2="25" y2="460" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="440" x2="25" y2="440" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="420" x2="25" y2="420" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="400" x2="25" y2="400" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="380" x2="25" y2="380" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="360" x2="25" y2="360" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="340" x2="25" y2="340" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="320" x2="25" y2="320" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="300" x2="25" y2="300" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="280" x2="25" y2="280" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="260" x2="25" y2="260" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="240" x2="25" y2="240" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="220" x2="25" y2="220" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="200" x2="25" y2="200" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="180" x2="25" y2="180" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="160" x2="25" y2="160" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="140" x2="25" y2="140" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="120" x2="25" y2="120" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="100" x2="25" y2="100" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="80" x2="25" y2="80" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="60" x2="25" y2="60" stroke="black" stroke-width="2"></line>\n\
<line x1="15" y1="40" x2="25" y2="40" stroke="black" stroke-width="2"></line>\n\
<line id="axis-x" x1="20" y1="500" x2="840" y2="500" stroke="black" stroke-width="2" marker-end="url(#Arrow)"></line>\n\
<line x1="40" y1="495" x2="40" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="60" y1="495" x2="60" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="80" y1="495" x2="80" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="100" y1="495" x2="100" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="120" y1="495" x2="120" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="140" y1="495" x2="140" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="160" y1="495" x2="160" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="180" y1="495" x2="180" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="200" y1="495" x2="200" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="220" y1="495" x2="220" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="240" y1="495" x2="240" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="260" y1="495" x2="260" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="280" y1="495" x2="280" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="300" y1="495" x2="300" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="320" y1="495" x2="320" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="340" y1="495" x2="340" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="360" y1="495" x2="360" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="380" y1="495" x2="380" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="400" y1="495" x2="400" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="420" y1="495" x2="420" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="440" y1="495" x2="440" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="460" y1="495" x2="460" y2="505" stroke="black" stroke-width="2"></line\n\
<line x1="480" y1="495" x2="480" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="500" y1="495" x2="500" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="520" y1="495" x2="520" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="540" y1="495" x2="540" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="560" y1="495" x2="560" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="580" y1="495" x2="580" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="600" y1="495" x2="600" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="620" y1="495" x2="620" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="640" y1="495" x2="640" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="660" y1="495" x2="660" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="680" y1="495" x2="680" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="700" y1="495" x2="700" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="720" y1="495" x2="720" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="740" y1="495" x2="740" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="760" y1="495" x2="760" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="780" y1="495" x2="780" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="800" y1="495" x2="800" y2="505" stroke="black" stroke-width="2"></line>\n\
<line x1="820" y1="495" x2="820" y2="505" stroke="black" stroke-width="2"></line>\n\
<circle cx="40" cy="250" r="5" fill="black" id="graph-point-0"></circle>\n\
<circle cx="60" cy="250" r="5" fill="black" id="graph-point-1"></circle>\n\
<line x1="60" y1="250" x2="40" y2="250" stroke="black" stroke-width="2" id="graph-line-1"></line>\n\
<circle cx="80" cy="250" r="5" fill="black" id="graph-point-2"></circle>\n\
<line x1="80" y1="250" x2="60" y2="250" stroke="black" stroke-width="2" id="graph-line-2"></line>\n\
<circle cx="100" cy="250" r="5" fill="black" id="graph-point-3"></circle>\n\
<line x1="100" y1="250" x2="80" y2="250" stroke="black" stroke-width="2" id="graph-line-3"></line>\n\
<circle cx="120" cy="250" r="5" fill="black" id="graph-point-4"></circle>\n\
<line x1="120" y1="250" x2="100" y2="250" stroke="black" stroke-width="2" id="graph-line-4"></line>\n\
<circle cx="140" cy="250" r="5" fill="black" id="graph-point-5"></circle>\n\
<line x1="140" y1="250" x2="120" y2="250" stroke="black" stroke-width="2" id="graph-line-5"></line>\n\
<circle cx="160" cy="250" r="5" fill="black" id="graph-point-6"></circle>\n\
<line x1="160" y1="250" x2="140" y2="250" stroke="black" stroke-width="2" id="graph-line-6"></line>\n\
<circle cx="180" cy="250" r="5" fill="black" id="graph-point-7"></circle>\n\
<line x1="180" y1="250" x2="160" y2="250" stroke="black" stroke-width="2" id="graph-line-7"></line>\n\
<circle cx="200" cy="250" r="5" fill="black" id="graph-point-8"></circle>\n\
<line x1="200" y1="250" x2="180" y2="250" stroke="black" stroke-width="2" id="graph-line-8"></line>\n\
<circle cx="220" cy="250" r="5" fill="black" id="graph-point-9"></circle>\n\
<line x1="220" y1="250" x2="200" y2="250" stroke="black" stroke-width="2" id="graph-line-9"></line>\n\
<circle cx="240" cy="250" r="5" fill="black" id="graph-point-10"></circle>\n\
<line x1="240" y1="250" x2="220" y2="250" stroke="black" stroke-width="2" id="graph-line-10"></line>\n\
<circle cx="260" cy="250" r="5" fill="black" id="graph-point-11"></circle>\n\
<line x1="260" y1="250" x2="240" y2="250" stroke="black" stroke-width="2" id="graph-line-11"></line>\n\
<circle cx="280" cy="250" r="5" fill="black" id="graph-point-12"></circle>\n\
<line x1="280" y1="250" x2="260" y2="250" stroke="black" stroke-width="2" id="graph-line-12"></line>\n\
<circle cx="300" cy="250" r="5" fill="black" id="graph-point-13"></circle>\n\
<line x1="300" y1="250" x2="280" y2="250" stroke="black" stroke-width="2" id="graph-line-13"></line>\n\
<circle cx="320" cy="250" r="5" fill="black" id="graph-point-14"></circle>\n\
<line x1="320" y1="250" x2="300" y2="250" stroke="black" stroke-width="2" id="graph-line-14"></line>\n\
<circle cx="340" cy="250" r="5" fill="black" id="graph-point-15"></circle>\n\
<line x1="340" y1="250" x2="320" y2="250" stroke="black" stroke-width="2" id="graph-line-15"></line>\n\
<circle cx="360" cy="250" r="5" fill="black" id="graph-point-16"></circle>\n\
<line x1="360" y1="250" x2="340" y2="250" stroke="black" stroke-width="2" id="graph-line-16"></line>\n\
<circle cx="380" cy="250" r="5" fill="black" id="graph-point-17"></circle>\n\
<line x1="380" y1="250" x2="360" y2="250" stroke="black" stroke-width="2" id="graph-line-17"></line>\n\
<circle cx="400" cy="250" r="5" fill="black" id="graph-point-18"></circle>\n\
<line x1="400" y1="250" x2="380" y2="250" stroke="black" stroke-width="2" id="graph-line-18"></line>\n\
<circle cx="420" cy="250" r="5" fill="black" id="graph-point-19"></circle>\n\
<line x1="420" y1="250" x2="400" y2="250" stroke="black" stroke-width="2" id="graph-line-19"></line>\n\
<circle cx="440" cy="250" r="5" fill="black" id="graph-point-20"></circle>\n\
<line x1="440" y1="250" x2="420" y2="250" stroke="black" stroke-width="2" id="graph-line-20"></line>\n\
<circle cx="460" cy="250" r="5" fill="black" id="graph-point-21"></circle>\n\
<line x1="460" y1="250" x2="440" y2="250" stroke="black" stroke-width="2" id="graph-line-21"></line>\n\
<circle cx="480" cy="250" r="5" fill="black" id="graph-point-22"></circle>\n\
<line x1="480" y1="250" x2="460" y2="250" stroke="black" stroke-width="2" id="graph-line-22"></line>\n\
<circle cx="500" cy="250" r="5" fill="black" id="graph-point-23"></circle>\n\
<line x1="500" y1="250" x2="480" y2="250" stroke="black" stroke-width="2" id="graph-line-23"></line>\n\
<circle cx="520" cy="250" r="5" fill="black" id="graph-point-24"></circle>\n\
<line x1="520" y1="250" x2="500" y2="250" stroke="black" stroke-width="2" id="graph-line-24"></line>\n\
<circle cx="540" cy="250" r="5" fill="black" id="graph-point-25"></circle>\n\
<line x1="540" y1="250" x2="520" y2="250" stroke="black" stroke-width="2" id="graph-line-25"></line>\n\
<circle cx="560" cy="250" r="5" fill="black" id="graph-point-26"></circle>\n\
<line x1="560" y1="250" x2="540" y2="250" stroke="black" stroke-width="2" id="graph-line-26"></line>\n\
<circle cx="580" cy="250" r="5" fill="black" id="graph-point-27"></circle>\n\
<line x1="580" y1="250" x2="560" y2="250" stroke="black" stroke-width="2" id="graph-line-27"></line>\n\
<circle cx="600" cy="250" r="5" fill="black" id="graph-point-28"></circle>\n\
<line x1="600" y1="250" x2="580" y2="250" stroke="black" stroke-width="2" id="graph-line-28"></line>\n\
<circle cx="620" cy="250" r="5" fill="black" id="graph-point-29"></circle>\n\
<line x1="620" y1="250" x2="600" y2="250" stroke="black" stroke-width="2" id="graph-line-29"></line>\n\
<circle cx="640" cy="250" r="5" fill="black" id="graph-point-30"></circle>\n\
<line x1="640" y1="250" x2="620" y2="250" stroke="black" stroke-width="2" id="graph-line-30"></line>\n\
<circle cx="660" cy="250" r="5" fill="black" id="graph-point-31"></circle>\n\
<line x1="660" y1="250" x2="640" y2="250" stroke="black" stroke-width="2" id="graph-line-31"></line>\n\
<circle cx="680" cy="250" r="5" fill="black" id="graph-point-32"></circle>\n\
<line x1="680" y1="250" x2="660" y2="250" stroke="black" stroke-width="2" id="graph-line-32"></line>\n\
<circle cx="700" cy="250" r="5" fill="black" id="graph-point-33"></circle>\n\
<line x1="700" y1="250" x2="680" y2="250" stroke="black" stroke-width="2" id="graph-line-33"></line>\n\
<circle cx="720" cy="250" r="5" fill="black" id="graph-point-34"></circle>\n\
<line x1="720" y1="250" x2="700" y2="250" stroke="black" stroke-width="2" id="graph-line-34"></line>\n\
<circle cx="740" cy="250" r="5" fill="black" id="graph-point-35"></circle>\n\
<line x1="740" y1="250" x2="720" y2="250" stroke="black" stroke-width="2" id="graph-line-35"></line>\n\
<circle cx="760" cy="250" r="5" fill="black" id="graph-point-36"></circle>\n\
<line x1="760" y1="250" x2="740" y2="250" stroke="black" stroke-width="2" id="graph-line-36"></line>\n\
<circle cx="780" cy="250" r="5" fill="black" id="graph-point-37"></circle>\n\
<line x1="780" y1="250" x2="760" y2="250" stroke="black" stroke-width="2" id="graph-line-37"></line>\n\
<circle cx="800" cy="250" r="5" fill="black" id="graph-point-38"></circle>\n\
<line x1="800" y1="250" x2="780" y2="250" stroke="black" stroke-width="2" id="graph-line-38"></line>\n\
<circle cx="820" cy="250" r="5" fill="black" id="graph-point-39"></circle>\n\
<line x1="820" y1="250" x2="800" y2="250" stroke="black" stroke-width="2" id="graph-line-39"></line>\n\
</svg>';

exports.getGraphSvg = function(graphId, color, min, max, callback){
    var axis_x = '<line id="axis-y" x1="20" y1="500" x2="20" y2="20" stroke="black" stroke-width="2" marker-end="url(#Arrow)"></line>';
    var axis_y = '<line id="axis-x" x1="20" y1="500" x2="840" y2="500" stroke="black" stroke-width="2" marker-end="url(#Arrow)"></line>';


    var init_defs = '<defs>\n\
    <marker id="Arrow" markerWidth="5" markerHeight="5" viewBox="-6 -6 12 12" refX="-2" refY="0" markerUnits="strokeWidth" orient="auto">\n\
    <polygon points="-2,0 -5,5 5,0 -5,-5" fill="black" stroke="black" stroke-width="1px"></polygon>\n\
    </marker>\n\
    </defs>';

    var svg_start = '<svg id=graph-'+ graphId +' version="1.1" baseProfile="full" width="900" height="550" xmlns="http://www.w3.org/2000/svg" class="chart">';
    var svg_end = '</svg>';
    
    var exportObj = "";
    exportObj += svg_start + init_defs + axis_x +  axis_y;
    var lastX;
    for(var i = 0; i < 40; i++){
        var currentX = ((i*20)+40);
        var axis_x_points = '<line x1="15" y1="'+(480-(i*20))+'" x2="25" y2="'+(480-(i*20))+'" stroke="black" stroke-width="2"></line>';
        var axis_y_points = '<line x1="'+currentX+'" y1="495" x2="'+currentX+'" y2="505" stroke="black" stroke-width="2"></line>';
        var graph_point = '<circle cx="'+currentX+'" cy="250" r="5" fill="'+color+'" id="graph-point-'+i+'"></circle>';
        if(i !== 0)
            var graph_points_line = '<line x1="'+currentX+'" y1="250" x2="'+lastX+'" y2="250" stroke="'+color+'" stroke-width="2" id="graph-line-'+i+'"></line>';
        exportObj += axis_x_points + axis_y_points;
        exportObj += graph_point;
        exportObj += graph_points_line;
        lastX = currentX;
    }
    return callback(null, exportObj);
}