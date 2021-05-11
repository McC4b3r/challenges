/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numObj = {};
  nums.forEach((num) => {
    if (numObj[num] === undefined) {
      numObj[num] = 1;
    } else {
      numObj[num] += 1;
    }
  });
  for (let key in numObj) {
    if (numObj[key] > 1) {
      return true;
    }
  }
  return false;
};