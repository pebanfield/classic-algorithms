/**
 * library-fine-spec
 *
 * https://www.hackerrank.com/challenges/library-fine
 *
 */
var assert = require("assert");
var libraryFine = require("../../solutions/warmup/library-fine.js");

describe('Library Fine', function(){

  describe('given two dates - return date and date', function(){

    it('should return no fine if returned on or before the return date', function(){

      var __input_stdin = '9 6 2015\n6 6 2015';
      assert.equal(libraryFine.processReturnedBook(__input_stdin), '45');
    });

    it('should return correct 15x fine is the book is late within same month of return date', function(){

      var __input_stdin = '9 6 2015\n6 6 2015';
      assert.equal(libraryFine.processReturnedBook(__input_stdin), '45');
    });

    it('should return correct 500x fine is the book is late within same year of return date', function(){

      var __input_stdin = '6 5 2015\n9 2 2015';
      assert.equal(libraryFine.processReturnedBook(__input_stdin), '1500');
    });

    it('should return correct 10000 fine is the book is late more than a year', function(){

      var __input_stdin = '9 6 2015\n6 6 2014';
      assert.equal(libraryFine.processReturnedBook(__input_stdin), '10000');
    });

    it('should return no fine for returning years in advance', function(){

      var __input_stdin = '2 7 1014\n1 1 1015';
      assert.equal(libraryFine.processReturnedBook(__input_stdin), '0');
    });

    it('should return no fine for returning months in advance', function(){

      var __input_stdin = '28 2 2015\n15 4 2015';
      assert.equal(libraryFine.processReturnedBook(__input_stdin), '0');
    });


  })
});