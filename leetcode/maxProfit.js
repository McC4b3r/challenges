/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i += 1) {
    let current = prices[i];
    let next = prices[i + 1];
    if (next > current) {
      profit += (next - current);
    }
  }
  return profit;
};