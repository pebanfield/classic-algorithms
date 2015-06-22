/**
 * a-very-big-sum
 */
var assert = require("assert");
var aVeryBigSum = require("../../solutions/warmup/a-very-big-sum.js");

describe('hackerrank I/O', function(){

  describe('processInput', function(){

    it('should return the correct string match', function(){

      var __input_stdin = "5\n1000000001 1000000002 1000000003 1000000004 1000000005";
      var arrayOfStringNums = __input_stdin.split("\n")[1].split(" ");
      assert.equal(aVeryBigSum.sumArray(arrayOfStringNums), 5000000015);
    });

  })
});

