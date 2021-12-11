/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
     let arr = s.split(' ')
     k = k > arr.length ? arr.length - 1 : k;
     return arr.slice(0, k).join(' ');
};


console.log(truncateSentence('chopper is not a tanuki', 10));
