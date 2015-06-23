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
      var matchStr=
        fractions.positivePercentage + "\n" +
        fractions.negativePercentage + "\n" +
        fractions.zeroPercentage;

      assert.equal(matchStr, "0.500000\n0.333333\n0.166667");
    });

    it('should account for no occurences', function(){

      var __input_stdin = "6\n-4 3 -9 1 4 1";
      var inputArray = __input_stdin.split("\n");
      inputArray = inputArray[1].split(" ");

      var fractions = plusMinus.calcFractions(inputArray);
      var matchStr=
        fractions.positivePercentage + "\n" +
        fractions.negativePercentage + "\n" +
        fractions.zeroPercentage;

      assert.equal(matchStr, "0.666667\n0.333333\n0.00000");
    });

    it('should account for all the same', function(){

      var __input_stdin = "6\n2 2 2";
      var inputArray = __input_stdin.split("\n");
      inputArray = inputArray[1].split(" ");

      var fractions = plusMinus.calcFractions(inputArray);
      var matchStr=
        fractions.positivePercentage + "\n" +
        fractions.negativePercentage + "\n" +
        fractions.zeroPercentage;

      assert.equal(matchStr, "1.00000\n0.00000\n0.00000");
    });

  })
});