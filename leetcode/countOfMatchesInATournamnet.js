/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let count = 0;
  const recurse = (teams) => {
    if (teams === 1 || teams === 0) {
      return count;
    }
    if (teams === 2) {
      count++
      return count;
    }
    if (teams % 2 === 0) {
      count += (teams / 2);
      teams = (teams / 2);
      recurse(teams);
    } else {
      count += ((teams - 1) / 2);
      teams = ((teams - 1) / 2) + 1;
      recurse(teams);
    }
  }
  recurse(n);
  return count;
};