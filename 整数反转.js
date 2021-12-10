/**
 * @param {number} x
 * @return {number}
 */
// -2147483648;
// 2147483647;
var reverse = function (x) {
  let res = 0;
  while (x !== 0) {
    let tmp = x%10;
    if (res > 214748364 || (res == 214748364 && tmp > 7)) {
      return 0;
    }
    //判断是否 小于 最小32位整数
    if (res < -214748364 || (res == -214748364 && tmp < -8)) {
      return 0;
    }
    res = 10 * res + tmp;
    x = parseInt(x / 10)
  }
  return res;
};

// console.log(reverse(-900000));
let viewRole = 2
let userCurrentRole = 1
userCurrentRole |= viewRole
console.log(userCurrentRole) 