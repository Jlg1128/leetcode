/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
     let left = 0;
     let right = height.length - 1;
     let max = 0;
     if (height < 2) {
         return 0;
     }
     while (left < right) {
         let hl = height[left];
         let hr = height[right];
         if ( hl < hr) {
         max = Math.max(hl * (right - left), max);
             left++;
         } else {
         max = Math.max(hr * (right - left), max);

             right--;
         }
     }
     return max;
};

console.log(maxArea([1,2,1]));