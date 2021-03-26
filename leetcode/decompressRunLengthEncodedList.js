/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let result = [];
  let outer = [];
  for (let i = 0; i < nums.length; i += 2) {
    let inner = [];
    inner.push(nums[i], nums[i + 1]);
    outer.push(inner);
  }
  for (let i = 0; i < outer.length; i++) {
    let tuple = outer[i];
    for (let k = 0; k < tuple[0]; k++) {
      result.push(tuple[1]);
    }
  }
  return result;
};