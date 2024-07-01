/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let ptr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      swap(nums, i, ptr);
      ptr++;
    }
  }
  for (let j = ptr; j < nums.length; j++) {
    if (nums[j] === 1) {
      swap(nums, j, ptr);
      ptr++;
    }
  }
  return nums;
};

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

console.log(sortColors([1, 0, 2, 1, 2, 1, 0]));