/**
 * diagonal-difference
 */
var assert = require("assert");
var diagonalDiff = require("../../solutions/warmup/diagonal-difference.js");

describe('diagonal', function(){

  describe('given a matrix of nxn', function(){

    it('should return the correct absolute diagonal difference', function(){

      var __input_stdin = "3\n11 2 4\n4 5 6\n10 8 -12";
      var inputArray = __input_stdin.split("\n");
      inputArray = inputArray.slice(1, inputArray.length);

      var multiArray = [];
      for(var i=0; i<inputArray.length; i++){
        var nums = inputArray[i].split(" ");
        multiArray.push(nums);
      }
      assert.equal(diagonalDiff.diffDiagonals(multiArray), 15);
    });

  })
});