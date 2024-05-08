/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 *
 * https://leetcode.cn/problems/majority-element/description/
 *
 * algorithms
 * Easy (66.91%)
 * Likes:    1600
 * Dislikes: 0
 * Total Accepted:    608.5K
 * Total Submissions: 909.5K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [3,2,3]
 * 输出：3
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,2,1,1,1,2,2]
 * 输出：2
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 * 
 * 
 * 
 * 
 * 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 方法一: Map
 * 过程:
 *     用map记录下nums元素出现的次数；如果map[num]>nums.length/2；返回num。
 * 复杂度:
 *     空间复杂度: O(n)。
 *     时间复杂度: O(n)。
 * 代码:
 *     var majorityElement = function (nums) {
 *         let half = nums.length / 2;
 *         let map = {};
 *         for (let num of nums) {
 *             if (!map[num]) {
 *                 map[num] = 0;
 *             }
 *             map[num]++;
 *             if (map[num] > half) {
 *                 return num;
 *             }
 *         }
 *     };
 * 方法二: 消除法（参照他人的答案，很巧妙）
 * 过程:
 *     因为多数的元素的占比 > nums.length/2。
 *     就是说 多数的元素 比其他所有元素的合都多。
 *     所以 多数元素 和 其他所有元素消除之后剩下的肯定是多数元素。
 * 复杂度:
 *     时间复杂度: O(n)
 *     空间复杂度: O(1)
 * 代码:
 *     var majorityElement = function (nums) {
 *         let winner = nums[0];
 *         let cnt = 0;
 *         for (let num of nums) {
 *             if (winner === num) {
 *                 cnt++;
 *                 continue;
 *             }
 *             cnt--;
 *             if (cnt < 0) {
 *                 winner = num;
 *                 cnt++;
 *             }
 *         }
 *         return winner;
 *     };
 */
var majorityElement = function (nums) {
    
};
// @lc code=end

