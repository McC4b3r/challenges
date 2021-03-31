/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let numOfEvenItems = 0;
  for (let i = 0; i < nums.length; i++) {
    let singleNum = nums[i];
    let stringNum = singleNum.toString();
    if (stringNum.length % 2 === 0) {
      numOfEvenItems++
    }
  }
  return numOfEvenItems;
};