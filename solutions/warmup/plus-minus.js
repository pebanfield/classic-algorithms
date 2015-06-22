/**
 * plus-minus
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

  var percentages = [];
  percentages.push(Math.round(zero/array.length * 1000));
  percentages.push(Math.round(negative/array.length * 1000));
  percentages.push(Math.round(positive/array.length * 1000));

  function sortDescending(a,b) {
    return b-a;
  }

  percentages.sort(sortDescending);

  for(var p=0; p<percentages.length; p++){
    percentages[p] = "0."+percentages[p]
  }

  return percentages;
}

module.exports = {calcFractions: _calcFractions};