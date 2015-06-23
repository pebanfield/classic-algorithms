/**
 * staircase
 */

function _buildStairs(numStairs) {

  numStairs = Number(numStairs);
  var stairs='';
  for(var i=0; i<numStairs; i++){
    var stair='';
    var spaces = numStairs-(i+1);
    for(var j=0; j<spaces; j++){
      stair = stair + ' ';
    }
    stair = stair + '#';
    for(var k=0; k<i; k++){
      stair = stair + '#';
    }
    if(i!=numStairs-1){
      stair=stair+'\n';
    }
    stairs = stairs + stair;
  }
  return stairs;
}

module.exports = {buildStairs: _buildStairs};