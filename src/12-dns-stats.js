/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};

  function counter(arr) {
    let str = '';
    for (let i = arr.length - 1; i >= 0; i--) {
      str = `${str}.${arr[i]}`;
      if (res[str]) res[str]++;
      else {
        res[str] = 1;
      }
    }
  }
  for (let i = 0; i < domains.length; i++) {
    counter(domains[i].split('.'));
  }
  return res;
}
module.exports = getDNSStats;
