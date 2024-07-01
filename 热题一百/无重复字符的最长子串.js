/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) return s.length;
  let left = 0;
  let right = 1;
  let res = '';
  let cur = '';
  while (left < right && right < s.length) {
      if (!cur) cur = s[left];
      if (cur.includes(s[right])) {
          res = cur.length > res.length ? cur : res;
          left = left + cur.indexOf(s[right]) + 1;
          if (left === right) right = left + 1;
          cur = cur.slice(left, right + 1);
      } else {
          cur += s[right++];
          if (right === s.length) res = cur.length > res.length ? cur : res;
      }
  }
  return res.length;
};

console.log(lengthOfLongestSubstring("bbtablud"));