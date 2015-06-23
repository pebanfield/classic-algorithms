/**
 * plus-minus
 *
 * https://www.hackerrank.com/challenges/plus-minus
 *
 *
 */
function _calcFractions(array) {

  var zero=0;
  var negative=0;
  var positive = 0;

  for(var i=0; i<array.length; i++){
    var num = Number(array[i]);
    if(num == 0){
      zero++;
    } else if(num < 0){
      negative++;
    } else {
      positive++;
    }
  }

  var percentages = {};
  percentages.zeroPercentage = (zero/array.length).toPrecision(6);
  percentages.negativePercentage = (negative/array.length).toPrecision(6);
  percentages.positivePercentage = (positive/array.length).toPrecision(6);

  return percentages;
}

module.exports = {calcFractions: _calcFractions};