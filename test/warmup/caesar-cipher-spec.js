/**
 * caesar-cipher-spec-spec
 *
 * https://www.hackerrank.com/challenges/caesar-cipher-1
 *
 */
var assert = require("assert");
var sut = require("../../solutions/warmup/caesar-cipher.js");

describe('caesar-cipher', function () {

  describe('encrypt', function () {

    it('should encrypt a basic string with the cipher', function () {

      var __input_stdin = "11\nmiddle-Outz\n2";
      var inputArray = __input_stdin.split("\n");

      var stringMatch = "okffng-Qwvb";
      assert.equal(sut.encrypt(inputArray[1], Number(inputArray[2])), stringMatch);
    });

    it('should flip the rotate forward where rotate is more than alphabet length', function () {

      var __input_stdin = "1\nz\n5";
      var inputArray = __input_stdin.split("\n");

      var stringMatch = "e";
      assert.equal(sut.encrypt(inputArray[1], Number(inputArray[2])), stringMatch);
    });

    it('should flip the rotate backward where rotate is less than 0', function () {

      var __input_stdin = "1\na\n-2";
      var inputArray = __input_stdin.split("\n");

      var stringMatch = "y";
      assert.equal(sut.encrypt(inputArray[1], Number(inputArray[2])), stringMatch);
    });

    it('should work with more than one rotate forward flip', function () {

      var __input_stdin = "1\nz\n55";
      var inputArray = __input_stdin.split("\n");

      var stringMatch = "c";
      assert.equal(sut.encrypt(inputArray[1], Number(inputArray[2])), stringMatch);
    });

    it('should work with more than one rotate back flip', function () {

      var __input_stdin = "1\na\n-55";
      var inputArray = __input_stdin.split("\n");

      var stringMatch = "x";
      assert.equal(sut.encrypt(inputArray[1], Number(inputArray[2])), stringMatch);
    });


  })
});
