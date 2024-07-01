var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1); // 初始化前缀和为0的次数为1
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, map.has(sum - k) ? map.get(sum - k) + 1 : 1);
    }
    return count;
};

console.log(subarraySum([1,-1,0], 0));