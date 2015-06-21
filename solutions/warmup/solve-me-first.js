/**
 * solve-me-first
 *
 * This solution has been included for completeness, but it is already solved
 * on hackerrank.
 *
 * https://www.hackerrank.com/challenges/solve-me-first
 *
 * However, there is an important JavaScript specific concept relating to
 * variable scoping that should be understood. I have included it in the test
 * suite coverage as it is a core aspect of the language.
 *
 * See test/warmup/solve-me-first-spec.js
 *
 * Any serious JavaScript developer should understand this concept as it is
 * explained here -
 *
 * http://www.w3schools.com/js/js_function_closures.asp
 *
 */

function _sum(a, b) {
  return a+b;
}

module.exports = {sum: _sum};

