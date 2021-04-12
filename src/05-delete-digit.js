/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString(10).split('').map((int) => parseInt(int, 10));
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
  }
  arr.splice(arr.indexOf(min), 1);
  return Number(arr.join(''));
}

module.exports = deleteDigit;
