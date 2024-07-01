/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length <= 1) return nums;
  let left = 0;
  let right = 1;
  let min = -1, max = -1;
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  let j = nums.length - 1;
  if (i >= 0) {
    while (nums[i] >= nums[j]) {
      j--; 
    }
  }

  if (i < 0) i=0;
  swap(nums, i, j);
  const needSortArr = nums.slice(i + 1);
  nums.splice(i + 1, needSortArr.length, ...needSortArr.sort((a, b) => a - b));
  return nums;
};

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

console.log(nextPermutation([4,5,2,6,3,1]));
