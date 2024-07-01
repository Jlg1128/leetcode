// 56. 合并区间
// 中等
// 相关标签
// 相关企业
// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

 

// 示例 1：

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2：

// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const res = [];
  function process(intervals, index) {
    if (index === intervals.length - 1) {
      res.push(intervals[index]);
      return;
    }
    if (intersect(intervals[index], intervals[index+1])) {
      const a = intervals[index];
      const b = intervals[index + 1];
      intervals[index + 1] = [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
      process(intervals, index + 1)
    } else {
      res.push(intervals[index])
      process(intervals, index + 1)
    }
  }
  process(intervals, 0, false);
  return res;
};

function intersect(a, b) {
  return !(a[1] < b[0] || a[0] > b[1])
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[0,4]]));
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]));