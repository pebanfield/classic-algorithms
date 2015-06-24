/**
 * caesar-cipher
 *
 * https://www.hackerrank.com/challenges/caesar-cipher-1
 *
 */


var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


function _encrypt(str, offset) {

  var encryptedStr = '';
  for(var i=0; i<str.length; i++){
    if(str[i].match(/^[A-Za-z]+$/)){
      var isUpperCase = false;
      if(str[i].match(/^[A-Z]+$/)){
        isUpperCase=true;
      }
      var lower = str[i].toLowerCase();
      var index = _findIndexOfLetter(lower);
      var cipherIndex = index+offset;
      if(cipherIndex > alphabet.length-1){
        cipherIndex = cipherIndex % alphabet.length;
      }
      else if(cipherIndex < 0){
        var backwardIndex = Math.abs(cipherIndex) % alphabet.length;
        cipherIndex = alphabet.length - backwardIndex;
      }
      var encryptedChar;
      if(isUpperCase){
        encryptedChar = alphabet[cipherIndex].toUpperCase();
      } else {
        encryptedChar = alphabet[cipherIndex];
      }
      encryptedStr = encryptedStr + encryptedChar;
    } else {
      encryptedStr = encryptedStr + str[i];
    }

  }
  return encryptedStr;
}

function _findIndexOfLetter(letter){

  for(var i=0; i<alphabet.length; i++){
    if(letter == alphabet[i]){
      return i;
    }
  }
}


module.exports =

{encrypt: _encrypt};