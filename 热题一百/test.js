/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  nums = Array.from(new Set(nums));
    function quickSelect(nums, k) {
        if (nums.length === 1) {
            return nums[0];
        }
        let randomNum = nums[Math.floor(Math.random() * nums.length)];
        let small = [];
        let big = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= randomNum) {
                small.push(nums[i])
            } else {
                big.push(nums[i])
            }
        }
        if (k <= big.length) {
            return quickSelect(big, k);
        }
        return quickSelect(small, k - big.length)
    }
    return quickSelect(nums, k);
  };

  console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));