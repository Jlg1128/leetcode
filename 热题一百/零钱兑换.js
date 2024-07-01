/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) return 0;
  if (!coins.length) return -1;
  let nums = 0;
  let res = amount;
  coins.sort((a, b) => b - a);
  // while (res > 0) {
  //     if (parseInt(res) !== res) {
  //         return -1;
  //     }

  // }
  coins.forEach(coin => {
      nums += Number(BigInt(res) / BigInt(coin));
      console.log(nums);
      res = res % coin;
  })
  console.log(res);
  return res === 0 ? nums : -1;
};
console.log(coinChange([186,419,83,408], 6249));