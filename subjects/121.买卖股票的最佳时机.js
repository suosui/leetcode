/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (58.14%)
 * Likes:    3484
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 2.5M
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：[7,1,5,3,6,4]
 * 输出：5
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：prices = [7,6,4,3,1]
 * 输出：0
 * 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 *  
 *  方法一:一次遍历
 *  过程: 
 *      中心思想，找一个最小数和最大数并且满足最小数的下标小于最大数的下标。
 *      a. 遍历prices，price[i] < minPrice 则 minPrice = prices[i], 然后往后找最大数。
 *      b. 如果 price[i] - minPrice > maxProfitToReturn, 就证明找到了最大数。
 *      c. 按 a,b 往后类推。
 *  代码: 
 *      var maxProfit = function (prices) {
 *          let minPrice = prices[0];
 *          let maxProfitToReturn = 0;
 *          for (let price of prices) {
 *              if (price - minPrice > maxProfitToReturn) {
 *                  maxProfitToReturn = price - minPrice;
 *              }
 *              if (minPrice > price) {
 *                  minPrice = price;
 *              }
 *          }
 *          return maxProfitToReturn;
 *      };
 */
var maxProfit = function (prices) {
};
// @lc code=end

