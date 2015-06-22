/**
 * a-very-big-sum
 *
 * https://www.hackerrank.com/challenges/a-very-big-sum
 *
 * There is a small trick with this one. The input is a string and
 * so it must be casted to a Number in order for the + operator
 * to perform arithmetic addition rather than concatenation.
 *
 */

function _sumArray(array) {

  var sum=0;
  for(var i=0; i<array.length; i++){
    var num = Number(array[i]);
    sum = sum + num;
  }
  return sum;
}

module.exports = {sumArray: _sumArray};
