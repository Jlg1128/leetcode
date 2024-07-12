/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let x = nums[0];
  let vote = 1;
  for (let i = 1; i < nums.length; i++) {
    vote += x === nums[i] ? 1 : -1;
    if (vote < 0) {
      x = nums[i];
      vote = 0;
    }
  }
  return x;
};

console.log(majorityElement([10,9,9,9,10]));