/**
 * time-conversion-spec
 *
 * https://www.hackerrank.com/challenges/time-conversion
 *
 */

function _formatTime(timeStr){

  var ampm = timeStr.slice(timeStr.length-2, timeStr.length);
  timeStr = timeStr.slice(0, timeStr.length-2);

  var timeArray = timeStr.split(':');

  if(ampm == 'PM'){
    if(Number(timeArray[0]) == 12){
      timeArray[0] = 12;
    } else {
      timeArray[0] = Number(timeArray[0]) + 12;
    }
  } else {
    if(Number(timeArray[0]) == 12){
      timeArray[0] = '00';
    }
  }
  return timeArray[0] + ':' + timeArray[1] + ':' + timeArray[2];
}
module.exports = {formatTime: _formatTime};
