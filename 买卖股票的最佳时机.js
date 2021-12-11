/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) return 0;
  let min = 1000000000;
  let maxpro = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > maxpro) {
      maxpro = prices[i] - min;
    }
  }
  return maxpro;
};

console.log(maxProfit([2,4,1,11,7]));