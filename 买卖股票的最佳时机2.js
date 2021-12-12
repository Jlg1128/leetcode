/**
 * @param {number[]} prices
 * @return {number}
 */
//  var maxProfit = function(prices) {
//    // 动态规划
//    if (prices.length < 0) {
//      return 0;
//    }
//    let n = prices.length;
//    const dp = new Array(n).fill(0).map(v => new Array(2).fill(0));
//    dp[0][0] = 0;
//    dp[0][1] = -prices[0]
//    for (let i = 1; i < n; i++) {
//      dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
//      dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
//    }
//    return dp[n - 1][0];
// };

/**
 * @param {number[]} prices
 * @return {number}
 */
 function maxProfit(prices) {
  // 贪心算法
  if (prices.length < 2) {
    return 0;
  }
  let len = prices.length;
  let max = 0;
  for (let i = 1; i < len; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      max += prices[i] - prices[i - 1];
    }
  }
  return max;
}
