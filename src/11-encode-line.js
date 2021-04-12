/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const s = str.split('');
  let res = '';
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
      s.splice(i, 1);
      i--;
    } else {
      if (count > 1) res += count;
      res += s[i];
      count = 1;
    }
  }
  return res;
}

module.exports = encodeLine;
