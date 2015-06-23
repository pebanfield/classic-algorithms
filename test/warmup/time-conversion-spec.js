/**
 * time-conversion
 */
var assert = require("assert");
var timeConversion = require("../../solutions/warmup/time-conversion.js");

describe('Time Conversion', function(){

  describe('given a 12 hour time format ', function(){

    it('should convert to 24 hour format', function(){

      var __input_stdin = "07:05:45PM";
      var stringMatch = "19:05:45";

      assert.equal(timeConversion.formatTime(__input_stdin),stringMatch);
    });

    it('should convert 12 AM to 00:00:00 ', function(){

      var __input_stdin = "12:00:00AM";
      var stringMatch = "00:00:00";

      assert.equal(timeConversion.formatTime(__input_stdin),stringMatch);
    });

    it('should display 12 PM as 12:00:00', function(){

      var __input_stdin = "12:00:00PM";
      var stringMatch = "12:00:00";

      assert.equal(timeConversion.formatTime(__input_stdin),stringMatch);
    });

    it('should preserve preceding zero in format string', function(){

      var __input_stdin = "09:00:00AM";
      var stringMatch = "09:00:00";

      assert.equal(timeConversion.formatTime(__input_stdin),stringMatch);
    });

  })
});