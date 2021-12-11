/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
     let arr = [];
     let positiveArr = ['{', '(', '['];
     let nagativeArr = ['}', ')', ']'];
     if (!s.length) {
         return true;
     }
     while (s.length) {
         let ch = s[0];
         s = s.slice(1);
         if (positiveArr.includes(ch)) {
             arr.push(ch)
         } else if ((arr.length && arr[arr.length - 1] !== positiveArr[nagativeArr.indexOf(ch)]) || !arr.length) {
            return false;
         } else {
             arr.pop()
         }
     }
     if (arr.length !== 0) {
         return false;
     }
     
     return true;
};

console.log(isValid('['));