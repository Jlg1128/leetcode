/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let res = [];
  let left = 0;
  let right = 1;
  let set = new Set();
  if (p.length === 1) return s.split('').reduce((all, cur, index) => cur === p ? all.concat(index) : all,[])
  set.add(s[0])
  p = sortStr(p);
  while (right < s.length) {
    console.log(right);
      if (sortStr(s[left] + s.slice(left + 1, left + p.length)) === p) {
          res.push(left);
      }
      left++;
      right++;
  }
  return res;
};

function sortStr(str) {
  return str.split('').sort().join('');
}
console.log(findAnagrams('beeaaedcbc', 'c'));