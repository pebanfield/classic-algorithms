/**
 * a-very-big-sum
 */
var assert = require("assert");
var aVeryBigSum = require("../../solutions/warmup/a-very-big-sum.js");

describe('a very big sum', function(){

  describe('sum and cast String to Number', function(){

    it('should return the correct sum of elements', function(){

      var __input_stdin = "5\n1000000001 1000000002 1000000003 1000000004 1000000005";
      var arrayOfStringNums = __input_stdin.split("\n")[1].split(" ");
      assert.equal(aVeryBigSum.sumArray(arrayOfStringNums), 5000000015);
    });

  })
});

