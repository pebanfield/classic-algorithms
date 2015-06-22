/**
 * plus-minus-spec
 */
var assert = require("assert");
var plusMinus = require("../../solutions/warmup/plus-minus.js");

describe('plus, minus, 0 fractions', function(){

  describe('given an array of numbers calcFractions', function(){

    it('should return the correct array of fractions', function(){

      var __input_stdin = "6\n-4 3 -9 0 4 1";
      var inputArray = __input_stdin.split("\n");
      inputArray = inputArray[1].split(" ");

      var fractions = plusMinus.calcFractions(inputArray);
      var matchStr= fractions[0] + "\n" + fractions[1] + "\n" +fractions[2];

      assert.equal(matchStr, "0.500\n0.333\n0.167");
    });

  })
});