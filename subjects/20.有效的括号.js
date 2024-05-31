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
 * 
 *  方法一：栈
 *  思路：
 *     1. 遍历字符串，遇到左括号入栈，遇到右括号出栈
 *     2. 如果出栈的左括号和当前右括号不匹配，返回false
 *     3. 遍历结束后，如果栈不为空，返回false
 *     4. 否则返回true
 *  复杂度：
 *     时间复杂度：O(n)
 *     空间复杂度：O(n)
 *  代码：
 *     var isValid = function (s) {
 *         let symbolMap = {
 *             ')': '(', '}': '{', ']': '['
 *         };
 *         let stack = [];
 *         for (let symbol of s) {
 *             if (['(', '{', '['].includes(symbol)) {// 左括号
 *                 stack.push(symbol); // 入栈
 *             } else {
 *                 const top = stack.pop(); // 出栈
 *                 if (symbolMap[symbol] !== top) { // 不匹配
 *                     return false;
 *                 }
 *             }
 *         }
 *         if (stack.length) {
 *             return false;
 *         }
 *         return true;
 *     };
 */
var isValid = function (s) {
};
// @lc code=end

