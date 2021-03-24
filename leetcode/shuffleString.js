/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let result = '';
  let count = 0;
  while (count < s.length) {
    result += s[indices.indexOf(count)];
    count++
  }
  return result;
};