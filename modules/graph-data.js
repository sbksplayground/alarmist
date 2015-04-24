var _und = require('underscore');

function Generator(min, max, numPoints){
    this.min = min;
    this.max= max;
    this.numPoints = numPoints;
    this.data = [];
    for(var i = 0; i < numPoints; i++)
        this.data.push(min);
}

Generator.prototype.getData = function (callback) {
  //return updateData(callback);
    this.data.shift();
    this.data.push(_und.random(this.min, this.max));
    //console.log(nums);
    //console.log("Min: "+_und.min(nums)+", Max: "+_und.max(nums));
    return callback(null,this.data);
}

//var updateData = function (callback){
//  var min = -100;
//  var max = 300;
//  nums.shift();
//  nums.push(getRandomArbitrary(min, max));
//  //console.log(nums);
//  //console.log("Min: "+_und.min(nums)+", Max: "+_und.max(nums));
//  return callback(null, nums);
//}



////return random integer between [min] and [max]
//function getRandomArbitrary(min, max) {
//    return Math.floor(Math.random() * (max - min) + min);
//}
module.exports = Generator;