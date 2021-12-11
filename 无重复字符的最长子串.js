/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let arr = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (arr.indexOf(s[i]) !== -1) {
            arr.splice(0, arr.indexOf(s[i]) + 1);
        }
        arr.push(s[i])
        max = Math.max(arr.length, max);
    }
    return max;
};

console.log(lengthOfLongestSubstring("bbb"));