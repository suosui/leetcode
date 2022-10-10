/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode.cn/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (44.61%)
 * Likes:    3537
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.8M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "()"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "()[]{}"
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "(]"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 仅由括号 '()[]{}' 组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const dismissMap = {
        "(": ")",
        ")": "(",
        "{": "}",
        "}": "{",
        "[": "]",
        "]": "["
    }
    const stack = [];
    if([')','}',']'].includes(s[0])){
        return false;
    }
    if(['(','{','['].includes(s[s.length-1])){
        return false;
    }
    for (let char of s) {
        if (dismissMap[char] === stack[stack.length - 1]) {
            stack.pop();
            continue;
        }
        if([')','}',']'].includes(char)){
            return false;
        }
        stack.push(char);
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};
// @lc code=end

