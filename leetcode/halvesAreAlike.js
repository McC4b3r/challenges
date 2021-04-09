/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let aCount = 0;
  let bCount = 0;
  const a = s.slice(0, (s.length / 2));
  const b = s.slice(-(s.length / 2));
  for (let i = 0; i < a.length; i++) {
    if (vowels.includes(a[i].toLowerCase())) {
      aCount++;
    }
    if (vowels.includes(b[i].toLowerCase())) {
      bCount++;
    }
  }
  return aCount === bCount;
};