/**
 * staircase-spec
 */
var assert = require("assert");
var staircase = require("../../solutions/warmup/staircase.js");

describe('staircase', function(){

  describe('given the number of stairs to print', function(){

    it('should print out ', function(){

      var __input_stdin = "6";
      var stringMatch = "     #\n    ##\n   ###\n  ####\n #####\n######";

      assert.equal(staircase.buildStairs(__input_stdin),stringMatch);
    });

  })
});