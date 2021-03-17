/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let booleans = [];
  let largest = candies[0];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > largest) {
      largest = candies[i];
    }
  }
  for (let i = 0; i < candies.length; i++) {
    let truthTest = (candies[i] + extraCandies) >= largest;
    booleans.push(truthTest);
  }
  return booleans
};