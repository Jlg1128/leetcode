var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) break;
      if (nums[i] === nums[i - 1]) continue;
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
          if (nums[i] + nums[left] > 0) break;
          if (nums[right] < 0) break;
          const total = nums[i] + nums[left] + nums[right];
          if (total === 0) {
              res.push([nums[i], nums[left], nums[right]])
              while (nums[left] === nums[left+1] && left <= right) {
                  left++;
              }
              while (nums[right] === nums[right-1] && right > i) {
                  right--;
              }
          } else if (total < 0) {
              left++;
          } else if (total > 0) {
              right--;
          }
      }
  }
  return res;
};

console.log(threeSum([0,0,0]));
