/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x === 0) {
    return true;
  }
  if (x <= 0) {
    return false;
  }
  let arr = [];
  while (x > 0) {
    let small = x % 10;
    x = Math.floor(x / 10);
    arr.unshift(small);
  }
  if (arr.length <= 1) {
    return true;
  }
  let i = 0,
   j = arr.length - 1;
   while (i <= j) {
     let left = arr[i],
      right = arr[j];
      i++;
      j--;
      if (left !== right) return false;
   }
  return true;
};

console.log(isPalindrome(121));
