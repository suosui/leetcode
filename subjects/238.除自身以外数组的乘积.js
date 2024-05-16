/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 *
 * https://leetcode.cn/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (74.15%)
 * Likes:    1775
 * Dislikes: 0
 * Total Accepted:    444.5K
 * Total Submissions: 588.3K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 * 
 * 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
 * 
 * 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [1,2,3,4]
 * 输出: [24,12,8,6]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums = [-1,1,0,-3,3]
 * 输出: [0,0,9,0,0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= nums.length <= 10^5
 * -30 <= nums[i] <= 30
 * 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内
 * 
 * 
 * 
 * 
 * 进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组 不被视为 额外空间。）
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 *  
 *  方法一：左右乘积
 *  过程：
 *      引用官方解答：
 *      1 初始化两个空数组 L 和 R。对于给定索引 i，L[i] 代表的是 i 左侧所有数字的乘积，R[i] 代表的是 i 右侧所有数字的乘积。
 *      2 我们需要用两个循环来填充 L 和 R 数组的值。对于数组 L，L[0] 应该是 1，因为第一个元素的左边没有元素。对于其他元素：L[i] = L[i-1] * nums[i-1]。
 *      3 同理，对于数组 R，R[length-1] 应为 1。length 指的是输入数组的大小。其他元素：R[i] = R[i+1] * nums[i+1]。
 *      4 当 R 和 L 数组填充完成，我们只需要在输入数组上迭代，且索引 i 处的值为：L[i] * R[i]。
 *      
 *      作者：力扣官方题解
 *      链接：https://leetcode.cn/problems/product-of-array-except-self/solutions/272369/chu-zi-shen-yi-wai-shu-zu-de-cheng-ji-by-leetcode-/
 *      来源：力扣（LeetCode）
 *      著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 *  复杂度：
 *      时间复杂度：O(3n)
 *      空间复杂度：O(3n)
 *  代码：
 *      var productExceptSelf = function (nums) {
 *          let L = [];
 *          let R = [];
 *          let toReturn = [];
 *          for (let i = 0; i < nums.length; i++) {
 *              if (i === 0) {
 *                  L[i] = undefined;
 *              } else if (L[i - 1] !== undefined) {
 *                  L[i] = nums[i - 1] * L[i - 1];
 *              } else {
 *                  L[i] = nums[i - 1];
 *              }
 *          }
 *          for (let i = nums.length - 1; i >= 0; i--) {
 *              if (i === nums.length - 1) {
 *                  R[i] = undefined;
 *              } else if (R[i + 1] !== undefined) {
 *                  R[i] = nums[i + 1] * R[i + 1];
 *              } else {
 *                  R[i] = nums[i + 1];
 *              }
 *          }
 *          for (let i = 0; i < nums.length; i++) {
 *              if (L[i] === undefined) {
 *                  toReturn[i] = R[i];
 *              } else if (R[i] === undefined) {
 *                  toReturn[i] = L[i];
 *              } else {
 *                  toReturn[i] = L[i] * R[i];
 *              }
 *          }
 *          return toReturn;
 *      };
 */
var productExceptSelf = function (nums) {
};
// @lc code=end

