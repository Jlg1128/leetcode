/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const results = [];
  const dfs = (target, idx, combine) => {
    if (idx === candidates.length) return;
    if (target === 0) {
      results.push(combine);
      return;
    }
    dfs(target, idx + 1, combine);
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], idx, [...combine, candidates[idx]])
    }
  }
  dfs(target, 0, []);
  return results;
};

console.log(combinationSum([2,3,6,7], 7));