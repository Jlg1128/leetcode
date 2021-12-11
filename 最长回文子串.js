/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
     let len = s.length;
     let begin = 0;
     let maxlen = 1;
     for (let i = 0; i < len - 1; i++) {
         for (let  j = i + 1; j < len; j++) {
             if (j - i + 1 > maxlen && validate(s, i, j)) {
                 maxlen = j - i + 1;
                 begin = i;
             }
         }
     }
    function validate(str, left, right) {
        let i = left;
        let j = right;
        while (i < j) {
            if (str[i] !== str[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    return s.substring(begin, begin + maxlen);
};


console.log(longestPalindrome('ac'));