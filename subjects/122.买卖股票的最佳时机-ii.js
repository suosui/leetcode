/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 *
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/
 *
 * algorithms
 * Medium (71.15%)
 * Likes:    2477
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 1.5M
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
 * 
 * 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
 * 
 * 返回 你能获得的 最大 利润 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：prices = [7,1,5,3,6,4]
 * 输出：7
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4
 * 。
 * 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
 * ⁠    总利润为 4 + 3 = 7 。
 * 
 * 示例 2：
 * 
 * 
 * 输入：prices = [1,2,3,4,5]
 * 输出：4
 * 解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4
 * 。
 * 总利润为 4 。
 * 
 * 示例 3：
 * 
 * 
 * 输入：prices = [7,6,4,3,1]
 * 输出：0
 * 解释：在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0 。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= prices.length <= 3 * 10^4
 * 0 <= prices[i] <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 *  
 *  方法一：单调栈
 *  过程：
 *      中心思想：可以画线模拟股票。应为可能有多个高峰和多个低谷，并且高峰和低谷并不重叠。所以用栈存储一段时间内的从低谷到高峰的值就是最大利润。
 *          a. 用栈存储单调递增的price
 *          b. 只要遇到prices[i] > stack[stack.length-1],就清空栈，并 maxProfitToReturn += stack[stack.length - 1] - stack[0];
 *  复杂度：
 *      时间复杂度：O(n)
 *      空间复杂度：O(n)
 *  代码：
 *      var maxProfit = function (prices) {
 *          let maxProfitToReturn = 0;
 *          if (prices.length === 1) return 0;
 *          let stack = [];
 *          for (let i = 0; i < prices.length; i++) {
 *              if (stack.length === 0) {
 *                  stack.push(prices[i]);
 *                  continue;
 *              }
 *              if (prices[i] >= stack[stack.length - 1]) {
 *                  stack.push(prices[i]);
 *                  continue;
 *              }
 *              if (prices[i] < stack[stack.length - 1]) {
 *                  if (stack.length === 1) {
 *                      stack = [prices[i]];
 *                      continue;
 *                  }
 *                  maxProfitToReturn += stack[stack.length - 1] - stack[0];
 *                  stack = [prices[i]];
 *              }
 *          }
 *          if (stack.length > 1) {
 *              maxProfitToReturn += stack[stack.length - 1] - stack[0];
 *          }
 *          return maxProfitToReturn;
 *      };
 */
var maxProfit = function (prices) {
};
// @lc code=end

