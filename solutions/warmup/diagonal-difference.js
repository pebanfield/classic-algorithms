/**
 * diagonal-difference
 */
function _diffDiagonals(multiArray) {

  var diaSumUp = 0;
  for(var i=0; i<multiArray.length; i++){
    diaSumUp = diaSumUp + Number(multiArray[i][i]);
  }
  var diaSumDown = 0;
  var k=0;
  for(var j=multiArray.length-1; j>=0; j--){
    diaSumDown = diaSumDown + Number(multiArray[k][j]);
    k++;
  }
  return Math.abs(diaSumUp-diaSumDown);
}

module.exports = {diffDiagonals: _diffDiagonals};