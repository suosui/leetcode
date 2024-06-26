/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 *
 * https://leetcode.cn/problems/evaluate-reverse-polish-notation/description/
 *
 * algorithms
 * Medium (53.53%)
 * Likes:    615
 * Dislikes: 0
 * Total Accepted:    226.7K
 * Total Submissions: 428.7K
 * Testcase Example:  '["2","1","+","3","*"]'
 *
 * 根据 逆波兰表示法，求表达式的值。
 * 
 * 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 * 
 * 注意 两个整数之间的除法只保留整数部分。
 * 
 * 可以保证给定的逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：tokens = ["2","1","+","3","*"]
 * 输出：9
 * 解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：tokens = ["4","13","5","/","+"]
 * 输出：6
 * 解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
 * 输出：22
 * 解释：该算式转化为常见的中缀算术表达式为：
 * ⁠ ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * = ((10 * (6 / (12 * -11))) + 17) + 5
 * = ((10 * (6 / -132)) + 17) + 5
 * = ((10 * 0) + 17) + 5
 * = (0 + 17) + 5
 * = 17 + 5
 * = 22
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= tokens.length <= 10^4
 * tokens[i] 是一个算符（"+"、"-"、"*" 或 "/"），或是在范围 [-200, 200] 内的一个整数
 * 
 * 
 * 
 * 
 * 逆波兰表达式：
 * 
 * 逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。
 * 
 * 
 * 平常使用的算式则是一种中缀表达式，如 ( 1 + 2 ) * ( 3 + 4 ) 。
 * 该算式的逆波兰表达式写法为 ( ( 1 2 + ) ( 3 4 + ) * ) 。
 * 
 * 
 * 逆波兰表达式主要有以下两个优点：
 * 
 * 
 * 去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + * 也可以依据次序计算出正确结果。
 * 适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 * 
 *  方法一：栈
 *  思路：
 *     1. 遍历数组，如果是数字则入栈，如果是运算符则取出栈顶两个数字进行计算，并将结果压入栈中
 *     2. 最后栈中只有一个元素，返回即可
 *  复杂度：
 *     时间复杂度：O(n)
 *     空间复杂度：O(n)
 *  代码：
 *     var evalRPN = function (tokens) {
 *         const stack = [];
 *         for (let token of tokens) {
 *             if (['+', '-', '*', '/'].includes(token)) {
 *                 let numB = stack.pop();
 *                 let numA = stack.pop();
 *                 let result = calculate(numA, numB, token);
 *                 stack.push(result);
 *                 continue;
 *             }
 *             stack.push(Number(token))
 *         }
 *         return stack[0]
 *     };
 *     
 *     var calculate = (numA, numB, symbol) => {
 *         const express = {
 *             '*': () => {
 *                 return numA * numB;
 *             },
 *             '+': () => {
 *                 return numA + numB;
 *             },
 *             '-': () => {
 *                 return numA - numB;
 *             },
 *             '/': () => {
 *                 return parseInt(numA / numB);
 *             }
 *         }
 *         return express[symbol]();
 *     }
 */
var evalRPN = function (tokens) {

};
// @lc code=end

