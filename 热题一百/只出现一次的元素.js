// 通过位运算异或
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (!nums.length) return -1;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res = nums[i] ^ res;
  }
  return res;
};

console.log(singleNumber([4,1,2,1,2]));