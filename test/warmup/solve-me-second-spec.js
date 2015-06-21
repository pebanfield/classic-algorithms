/**
 * solve-me-second-spec
 */
var assert = require("assert");
var solveMeSecond = require("../../solutions/warmup/solve-me-second.js");

describe('hackerrank I/O', function(){

  describe('processInput', function(){

    it('should return the correct string match', function(){

      var __input_stdin = "2\n2 3\n3 7";
      var stringMatch = "5\n10";
      assert.equal(solveMeSecond.processInput(__input_stdin),stringMatch);
    });

  })
});
