/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 *
 * https://leetcode.cn/problems/remove-duplicate-letters/description/
 *
 * algorithms
 * Medium (47.97%)
 * Likes:    828
 * Dislikes: 0
 * Total Accepted:    103.3K
 * Total Submissions: 215.2K
 * Testcase Example:  '"bcabc"'
 *
 * 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
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
 * 1 <= s.length <= 10^4
 * s 由小写英文字母组成
 * 
 * 
 * 
 * 
 * 注意：该题与 1081
 * https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters
 * 相同
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
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

