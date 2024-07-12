/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (heights.length === 0) return 0;
  if (heights.length === 1) return heights[0];
  let stack = [];
  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const curHeight = heights[stack.pop()];
      while (stack.length && heights[stack[stack.length - 1]] === curHeight) {
        stack.pop();
      }
      let curWidth;
      if (stack.length) {
        curWidth = (i - stack[stack.length - 1] - 1);
      } else {
        curWidth = i;
      }
      res = Math.max(res, curHeight * curWidth);
    }
    stack.push(i)
  }

  while (stack.length) {
    const curHeight = heights[stack.pop()];
    while (stack.length && heights[stack[stack.length - 1]] === curHeight) {
      stack.pop();
    }
    let curWidth;
    if (stack.length === 0) {
      curWidth = heights.length;
    } else {
      curWidth = heights.length - stack[stack.length - 1] - 1;
    }
    res = Math.max(res, curWidth * curHeight);
  }
  return res;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));