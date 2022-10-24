/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode.cn/problems/add-binary/description/
 *
 * algorithms
 * Easy (53.59%)
 * Likes:    904
 * Dislikes: 0
 * Total Accepted:    284.7K
 * Total Submissions: 532.3K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入:a = "11", b = "1"
 * 输出："100"
 * 
 * 示例 2：
 * 
 * 
 * 输入：a = "1010", b = "1011"
 * 输出："10101"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= a.length, b.length <= 10^4
 * a 和 b 仅由字符 '0' 或 '1' 组成
 * 字符串如果不是 "0" ，就不含前导零
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const lA = a.length;
    const lB = b.length;
    const diff = Math.abs(lA - lB);
    const length = lA > lB ? lA : lB;
    let i = length - 1;
    let ans = [];
    while (i > -1) {
        let sum = 0;
        if (lA >= lB) {
            if (i - diff < 0) {
                sum = Number(a[i]);
            } else {
                sum = Number(a[i]) + Number(b[i - diff]);
            }
        } else if (lA < lB) {
            if (i - diff < 0) {
                sum = Number(b[i]);
            } else {
                sum = Number(b[i]) + Number(a[i - diff]);
            }
        }
        ans[i] = sum;
        i--;
    }
    for (let i = ans.length - 1; i >= 0; i--) {
        if (i - 1 > -1) {
            if (ans[i] >= 2) {
                ans[i - 1] += 1;
                ans[i] = ans[i] % 2;
            }
        }
    }
    if (ans[0] >= 2) {
        ans[0] = ans[0] % 2;
        ans.unshift(1);
    }
    return ans.join('')
};
// @lc code=end

