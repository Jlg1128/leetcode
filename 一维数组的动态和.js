/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
	let i = 1;
	while (i < nums.length) {
		nums[i] += nums[i - 1];
		i++;
	}
	return nums;
};

console.log(runningSum([1, 2, 3, 4]));