/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 *
 * https://leetcode.cn/problems/happy-number/description/
 *
 * algorithms
 * Easy (63.16%)
 * Likes:    1084
 * Dislikes: 0
 * Total Accepted:    308.6K
 * Total Submissions: 488.6K
 * Testcase Example:  '19'
 *
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * 
 * 「快乐数」 定义为：
 * 
 * 
 * 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 * 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 * 如果这个过程 结果为 1，那么这个数就是快乐数。
 * 
 * 
 * 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 19
 * 输出：true
 * 解释：
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 2
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 *  
 *  方法一：使用 Set 存储历史记录
 *  思路：
 *      1. 使用 Set 存储历史记录，如果出现重复的数字，则说明进入了循环，返回 false
 *      2. 如果计算出的结果为 1，则返回 true
 *      3. 如果不是 1，继续计算
 *      4. 重复 1-3 步骤
 *  复杂度：
 *      时间复杂度：O(logn)
 *      空间复杂度：O(logn)
 *  代码：
 *      var isHappy = function (n) {
 *          const history = new Set();
 *          while (true) {
 *              n = String(n).split("").sort().join("")
 *              if (history.has(n)) {
 *                  return false;
 *              }
 *              history.add(n);
 *              let temp = 0;
 *              String(n).split("").map((eachN) => {
 *                  temp += Math.pow(Number(eachN), 2);
 *              });
 *              if(temp === 1) return true;
 *              n = temp;
 *          }
 *      };
 */
var isHappy = function (n) {
};
// @lc code=end

