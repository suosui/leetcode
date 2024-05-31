/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 *
 * https://leetcode.cn/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (44.38%)
 * Likes:    704
 * Dislikes: 0
 * Total Accepted:    304.5K
 * Total Submissions: 652.9K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且
 * abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3,1], k = 3
 * 输出：true
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,0,1,1], k = 1
 * 输出：true
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1,2,3,1,2,3], k = 2
 * 输出：false
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 0 <= k <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 
 *  方法一：哈希表
 *  思路：
 *     和 1.两数之和 类似，使用哈希表存储元素的值和索引
 *        1. 遍历数组，如果哈希表中存在当前元素，则判断当前索引和哈希表中的索引差值是否小于等于 k
 *        2. 如果小于等于 k，则返回 true
 *        3. 如果大于 k，则更新哈希表中的索引值
 *        4. 如果哈希表中不存在当前元素，则将当前元素和索引存入哈希表
 *        5. 遍历结束后，返回 false
 *  复杂度：
 *     时间复杂度：O(n) n 为数组长度
 *     空间复杂度：O(n) n 为数组长度
 *  代码：
 *     var containsNearbyDuplicate = function (nums, k) {
 *         const hash = new Map();
 *         for (let i = 0; i < nums.length; i++) {
 *             if (hash.has(nums[i])) {
 *                 if (Math.abs(i - hash.get(nums[i])) <= k) {
 *                     return true;
 *                 } else {
 *                     hash.set(nums[i], i);
 *                 }
 *             } else {
 *                 hash.set(nums[i], i);
 *             }
 *         }
 *         return false;
 *     };
 */
var containsNearbyDuplicate = function (nums, k) {

};
// @lc code=end

