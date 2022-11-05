/*
 * @lc app=leetcode.cn id=866 lang=typescript
 *
 * [866] 回文素数
 */

// @lc code=start
const primePalindrome = (n: number): number => {
    if (n === 1) return 2;
    let cusor = n;
    while (cusor < 2 * Math.pow(10, 8)) {
        const len = cusor.toString().length;
        if (len % 2 == 0 && cusor != 10 && cusor != 11) {
            cusor = Math.pow(10, len);
        }
        if (isPalindromePrime(cusor) && isPrime(cusor)) {
            return cusor;
        }
        cusor++;
    }
};

const isPrime = (n: number): boolean => {
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


const isPalindromePrime = (n: number): boolean => {
    return Number(String(n).split("").reverse().join("")).valueOf() === n.valueOf();
}
// @lc code=end

