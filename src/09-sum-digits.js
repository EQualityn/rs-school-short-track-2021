/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let a = n;
  let sum = 0;
  while (a) {
    sum += Math.floor(a % 10);
    a = Math.floor(a / 10);
  }
  let am = 0;
  while (sum) {
    am += Math.floor(sum % 10);
    sum = Math.floor(sum / 10);
  }
  return am;
}

module.exports = getSumOfDigits;
