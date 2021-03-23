/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;

  const iterator = (n) => {
    // base case
    if (n === 0) {
      return;
    }

    // recursive cases
    if (n % 2 !== 0) {
      n--;
      count++
      iterator(n);
    } else {
      n = n / 2;
      count++
      iterator(n);
    }
  }
  iterator(num);

  return count;
};