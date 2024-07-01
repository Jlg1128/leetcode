/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const total = n * 2;
  const res = [];
  function traceback(arr, open, close) {
      if (arr.length === total) {
          res.push(arr.join(''))
          return;
      }

      if (open < n) {
        arr.push('(');
        traceback(arr, open + 1, close);
        arr.pop();
      }

      if (close < open) {
        arr.push(')');
        traceback(arr, open, close + 1);
        arr.pop();
      }
  }
  traceback([], 0, 0);
  return res;
};

console.log(generateParenthesis(3));