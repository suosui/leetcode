/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 *
 * https://leetcode.cn/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (40.09%)
 * Likes:    548
 * Dislikes: 0
 * Total Accepted:    122.5K
 * Total Submissions: 306K
 * Testcase Example:  '"aba"'
 *
 * 给你一个字符串 s，最多 可以从中删除一个字符。
 * 
 * 请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "aba"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "abca"
 * 输出：true
 * 解释：你可以删除字符 'c' 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "abc"
 * 输出：false
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^5
 * s 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    if (s.length === 1) return true;
    let l = 0;
    let r = s.length - 1;
    let deleted = false;
    s = s.split('');
    while (l <= r) {
        if (s[l] !== s[r]) {
            console.log(l, r);
            if (!deleted) {
                const dist = r - (l + 1);
                const diff = Math.floor(dist / 2);
                let isEven = false;
                let sL = s[l + 1 + diff];
                let sR = s[r - diff];
                if (dist % 2 === 0) {
                    isEven = true;
                    sL = s[l + diff];
                    sR = s[r - diff + 1];
                }
                if (sL === sR && s[l + 1] === s[r]) {
                    l++;
                } else {
                    r--;
                }
                deleted = true
            } else {
                return false;
            }
        } else {
            l++;
            r--;
        }
    }
    return true;
};
// @lc code=end

