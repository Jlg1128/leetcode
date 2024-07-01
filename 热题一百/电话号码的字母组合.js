const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}
/**
 * @param {string} digits '23'
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return [];
  const res = [];
  function backtrace(arr, columnIndex) {
    if (arr.length === digits.length) return res.push(arr.join(''));
    const num = digits[columnIndex];
    for (let i = 0; i < map[num].length; i++) {
      arr.push(map[num][i]);
      backtrace(arr, columnIndex + 1);
      arr.pop();
    }
  }
  backtrace([], 0);
  return res;
};

console.log(letterCombinations('23'));

