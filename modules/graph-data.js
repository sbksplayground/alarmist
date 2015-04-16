var _und = require('underscore');
var exports = module.exports = {};
var nums = [-100, 100, -100, 100, -100, 100, 50, 50, 50, 50, -100, 100, -100, 100, -100, 100, 50, 50, 50, 50, -100, 100, -100, 100, -100, 100, 50, 50, 50, 50, -100, 100, -100, 100, -100, 100, 50, 50, 50, 50];

exports.getData = function (callback) {
  return updateData(callback);
}

var updateData = function (callback){
  nums.shift();
  nums.push(getRandomArbitrary(-100,100));
  //console.log(nums);
  //console.log("Min: "+_und.min(nums)+", Max: "+_und.max(nums));
  return callback(null, nums);	
}



//return random integer between [min] and [max]
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}