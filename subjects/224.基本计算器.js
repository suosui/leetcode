/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 *
 * https://leetcode.cn/problems/basic-calculator/description/
 *
 * algorithms
 * Hard (42.27%)
 * Likes:    1044
 * Dislikes: 0
 * Total Accepted:    145.5K
 * Total Submissions: 340.9K
 * Testcase Example:  '"1 + 1"'
 *
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 * 
 * 注意:不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "1 + 1"
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = " 2-1 + 2 "
 * 输出：3
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "(1+(4+5+2)-3)+(6+8)"
 * 输出：23
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 3 * 10^5
 * s 由数字、'+'、'-'、'('、')'、和 ' ' 组成
 * s 表示一个有效的表达式
 * '+' 不能用作一元运算(例如， "+1" 和 "+(2 + 3)" 无效)
 * '-' 可以用作一元运算(即 "-1" 和 "-(2 + 3)" 是有效的)
 * 输入中不存在两个连续的操作符
 * 每个数字和运行的计算将适合于一个有符号的 32位 整数
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 
 *  方法一：栈
 *  思路：
 *     1. 用栈来保存数字和运算符，遍历字符串，遇到数字则入栈，遇到运算符则入栈，遇到右括号则计算括号内的结果，遇到空格则跳过
 *  复杂度：
 *     时间复杂度：O(n)
 *     空间复杂度：O(n)
 *  代码：
 *      var calculate = function (s) {
 *          let stack = []
 *          let i = 0;
 *          let curr = s[0];
 *          let needFull = true;
 *          while (i < s.length) {
 *              if ([' '].includes(curr)) {
 *                  curr = s[++i];
 *                  continue;
 *              } else if (['+', '-'].includes(curr)) {
 *                  stack.push(curr);
 *                  curr = s[++i];
 *              } else if (!isNaN(curr)) {
 *                  if (needFull) {
 *                      const { fullNum, end } = getFullNumber(s, i);
 *                      curr = fullNum;
 *                      i = end;
 *                  }
 *                  needFull = true;
 *                  let top = stack[stack.length - 1];
 *                  if (['+', '-'].includes(top)) {
 *                      stack.pop();
 *                      let numA = stack[stack.length - 1];
 *                      if (!isNaN(numA)) {
 *                          if (top === '+') {
 *                              stack.push(stack.pop() + Number(curr));
 *                          } else if (top === '-') {
 *                              stack.push(stack.pop() - Number(curr));
 *                          }
 *                      } else if (top === '-') {
 *                          stack.push(-Number(curr));
 *                      }
 *                  } else {
 *                      stack.push(Number(curr));
 *                  }
 *                  curr = s[++i];
 *              } else if (curr === ')') {
 *                  let top = stack.pop();
 *                  stack.pop();
 *                  curr = top;
 *                  needFull = false;
 *              } else {
 *                  stack.push(curr)
 *                  curr = s[++i];
 *              }
 *          }
 *          return stack[0];
 *      };
 *      
 *      let getFullNumber = (s, startIdx) => {
 *          let curr = '';
 *          while (startIdx < s.length) {
 *              if (!isNaN(s[startIdx])) {
 *                  curr += s[startIdx];
 *                  startIdx++;
 *              } else {
 *                  break;
 *              }
 *          }
 *          return { end: startIdx - 1, fullNum: Number(curr) }
 *      }
 */
var calculate = function (s) {

};
// @lc code=end

