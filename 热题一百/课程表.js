/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const ad = new Map();
  prerequisites.forEach((item) => {
    const values = ad.get(item[1]) || [];
    values.push(item[0]);
    ad.set(item[1], values);
  })
  const flags = [];
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(numCourses, ad, flags, i)) {
      return false;
    }
  }
  return true;
};

// 1正在访问 -1访问过了
function dfs(numCourses, ad, flags, i) {
  if (flags[i] === 1) {
    return false;
  }
  if (flags[i] === -1) {
    return true;
  }
  flags[i] = 1;
  const values = ad.get(i) || [];
  for (let index = 0 ; index < values.length; index++) {
    if (!dfs(numCourses, ad, flags, values[index])) return false;
  }
  flags[i] = -1;
  return true;
}

console.log(canFinish(2, [[1,0]]));