/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let m = 0
  accounts.forEach((p) => {
    let z = p.reduce((a, c) => a + c)
    if (z > m) {
      m = z;
    }
  });
  return m;
};