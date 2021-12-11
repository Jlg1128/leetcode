/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let c1 = new Array(26).fill(0);
  let aAscii = 'a'.charCodeAt();
  let c2 = new Array(26).fill(0);
  let m = s.length;
  let n = p.length;
  let res = [];
  for (let key of p) {
    c2[key.charCodeAt() - aAscii]++;
  }
  for (let l = 0, r = 0; r < m; r++) {
    c1[s[r].charCodeAt() - aAscii]++;
    if (r - l>= n) c1[s[l++].charCodeAt() - aAscii]--;
    if (check(c1, c2)) res.push(l);
  }
  function check(ch1, ch2) {
    for (let i=0; i < 26;i++) {
      if (ch1[i] !== ch2[i]) return false
    }
    return true;
  }
  return res;
};

console.log(findAnagrams('abab', 'ab'));