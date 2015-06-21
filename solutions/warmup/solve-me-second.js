/**
 * solve-me-second
 *
 * This module is mainly included to show how I deal with the standard hackerrank
 * input format.
 *
 * STDOUT on hackerrank for JavaScript works with the process.stdout.write
 * function, but console.log seems to work as well.
 *
 * NOTE : VERY IMPORTANT - this sample has been modified to satisfy the
 * hackerrank output format. This was necessary in order to work outside of
 * the hackerrank UI. In other words, this sample returns a string that matches
 * the solution output but does not execute more than one STDOUT.
 *
 * If you haven't already, you should be sure to spend some time getting used
 * to the hackerrank problem format and IDE. This module has has been included for
 * completeness, but is already solved on hackerrank. The purpose of the problem
 * is to get you familiar with hackerrank and so you should go there for this
 * purpose.
 *
 * My personal opinion is that the overall hackerrank UX still leaves much to be
 * desired. As a professional programmer I find a modern IDE and visual debugging
 * tools indispensable and so I solve the problems in a separate setup here with
 * Webstorm and Mocha JS.
 *
 * At a fundamental level the hackerrank design si always going to be slower
 * because it requires that you constantly upload to perform compilations.
 */

var __input_stdin_array = "";
var __input_currentline = 0;

var process = {stdout: {}};
process.stdout.write = console.log;

function _processInput(input) {

  __input_stdin_array = input.split("\n");

  var res=[];
  var n = parseInt(__input_stdin_array[__input_currentline].trim(), 10);

  __input_currentline += 1;

  for (var i = 0; i<n;i++) {

    var _line = __input_stdin_array[__input_currentline].trim();
    __input_currentline += 1;
    var line = _line.split(" ");
    var _a = parseInt(line[0]);
    var _b = parseInt(line[1]);
    res.push(_a + _b);
  }

  return res[0] + "\n" + res[1];
}

module.exports = {processInput: _processInput};