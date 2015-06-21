var assert = require("assert");
var solveMeFirst = require("../../solutions/warmup/solve-me-first.js");

describe('Super Basic function return', function(){
  describe('sum', function(){

    it('should return the sum of two Number arguments', function(){

      assert.equal(solveMeFirst.sum(2, 3),5);
    });

    it('should return the sum of externally scoped arguments', function(){

      var a=2;
      var b=3;
      assert.equal(solveMeFirst.sum(a, b),5);
    });

    it('should increment values in externally scoped arguments', function(){

      var c = 0;
      var a = function(){
        c++;
        return c;
      };
      var b = 3;

      assert.equal(solveMeFirst.sum(a(), b),4);
      assert.equal(solveMeFirst.sum(a(), b),5);
    });
  })
});
