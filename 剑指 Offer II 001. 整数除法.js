/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 const MAX_VALUE = 2 ** 31 - 1, MIN_VALUE = -(2 ** 31);
 var divide = function (a, b) {
   // 考虑被除数为最小值的情况
   if (a === MIN_VALUE) {
     if (b === 1) {
       return MIN_VALUE;
     }
     if (b === -1) {
       return MAX_VALUE;
     }
   }
   // 考虑除数为最小值的情况
   if (b === MIN_VALUE) {
     return a === MIN_VALUE ? 1 : 0;
   }
 
   if (a === 0) return 0;
   let isNagative = false;
   if (a < 0 && b < 0) {
     a = -a;
     b = -b;
   } else if (a < 0 && b > 0) {
     isNagative = true;
     a = -a;
   } else if (a > 0 && b < 0) {
     isNagative = true;
     b = -b;
   }
   if (a < b) return 0;
   if (b === 1) {
     return isNagative ? -a: a;
   }
   let i = 1;
   let latestB = b;
   let sum = b;
   let latestSum = i;
   while (a > sum) {
     latestB = sum;
     sum += sum;
     latestSum = i;
     i += i;
   }
   if (b - (a - latestB) > 0) return isNagative ? -latestSum : latestSum;
   return isNagative ? -(latestSum + divide(a - latestB, b)) : (latestSum + divide(a - latestB, b));
 }; 