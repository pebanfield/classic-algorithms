/**
 * library-fine
 *
 * https://www.hackerrank.com/challenges/library-fine
 *
 */

function _processReturnedBook(datesStr){

  var datesArray = datesStr.split('\n');
  var returnDate = datesArray[0].split(' ');
  var deadlineDate = datesArray[1].split(' ');

  var fineAmount = 0;
  var isFineable = true;
  //year
  if(Number(returnDate[2]) > Number(deadlineDate[2])){
    fineAmount = 10000;
    isFineable = false;
  } else if(Number(returnDate[2]) < Number(deadlineDate[2])){
    isFineable = false;
  }

  //month
  if(isFineable && Number(returnDate[1]) > Number(deadlineDate[1])){

    var lateMonths = Number(returnDate[1]) - Number(deadlineDate[1]);
    fineAmount = lateMonths * 500;
    isFineable = false;
  } else if(Number(returnDate[1]) < Number(deadlineDate[1])){
    isFineable = false;
  }

  //day
  if(isFineable && Number(returnDate[0]) > Number(deadlineDate[0])){
    var lateDays = Number(returnDate[0]) - Number(deadlineDate[0]);
    fineAmount = lateDays * 15;
  }
  return fineAmount;
}

module.exports = {processReturnedBook: _processReturnedBook};
