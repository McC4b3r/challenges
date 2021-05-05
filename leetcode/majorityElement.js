/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let result;
  const desiredLength = (nums.length / 2);
  const numObj = {};
  nums.forEach((num) => {
    if (numObj[num] === undefined) {
      numObj[num] = 1;
    } else {
      numObj[num] += 1;
    }
  });
  for (let key in numObj) {
    if (numObj[key] > desiredLength) {
      result = key;
    }
  }
  return result;
};