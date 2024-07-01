var trap = function(height) {
  let res = 0;
  const leftCache = new Map();
  const rightCache = new Map();
  for (let i = 0; i < height.length - 1; i++) {
      let left = i - 1;
      let right = i + 1;
      let leftMax;
      let rightMax;
      if (!leftCache.has(left)) {
        leftMax = getMax(height.slice(0, i));
        leftCache.set(left, leftMax);
      } else {
        leftMax = leftCache.get(left);
      }
    if (!rightCache.has(right)) {
        rightMax = getMax(height.slice(i + 1));
        rightCache.set(right, rightMax);
      } else {
        rightMax = rightCache.get(right);
      }
      const h = Math.min(leftMax, rightMax);
      const cur = h - height[i];
      if (cur > 0) {
          res += cur;
      }
  }
  return res;
};
function getMax(nums) {
  return nums.sort((a, b) => b - a)[0];
}

console.log(trap([4,2,0,3,2,5]));