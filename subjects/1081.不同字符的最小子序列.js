/*
 * @lc app=leetcode.cn id=1081 lang=javascript
 *
 * [1081] 不同字符的最小子序列
 *
 * https://leetcode.cn/problems/smallest-subsequence-of-distinct-characters/description/
 *
 * algorithms
 * Medium (58.21%)
 * Likes:    170
 * Dislikes: 0
 * Total Accepted:    23.1K
 * Total Submissions: 39.6K
 * Testcase Example:  '"bcabc"'
 *
 * 返回 s 字典序最小的子序列，该子序列包含 s 的所有不同字符，且只包含一次。
 * 
 * 注意：该题与 316 https://leetcode.com/problems/remove-duplicate-letters/ 相同
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "bcabc"
 * 输出："abc"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbacdcbc"
 * 输出："acdb"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (stack.indexOf(char) > -1) {
            continue;
        }
        let j = stack.length - 1;
        let top = stack[j];
        if (!top) {
            stack.push(char);
        } else {
            while (top > char) {
                let m = i + 1;
                let isExists = false;
                while (m < s.length) {
                    const nextChar = s[m];
                    if (nextChar === top) {
                        isExists = true;
                        break;
                    }
                    m++;
                }
                if (isExists) {
                    stack.pop();
                    j--;
                    top = stack[j];
                } else {
                    break;
                }
            }
            stack.push(char);
        }
    }
    return stack.join('');
};
// @lc code=end

