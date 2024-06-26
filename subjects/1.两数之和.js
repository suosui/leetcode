/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (52.28%)
 * Likes:    13317
 * Dislikes: 0
 * Total Accepted:    2.9M
 * Total Submissions: 5.6M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 
 * 你可以按任意顺序返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 
 * -10^9 
 * -10^9 
 * 只会存在一个有效答案
 * 
 * 
 * 进阶：你可以想出一个时间复杂度小于 O(n^2) 的算法吗？
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 *  方法一：HashMap
 *  思路：
 *     利用哈希表存储数组元素的值和索引，遍历数组，对于每个元素 nums[i]，查找 target - nums[i] 是否在哈希表中，如果在哈希表中，返回两个元素的索引。
 *  复杂度：
 *     时间复杂度：O(n)，其中 n 是数组中的元素数量。对于每一个元素 x，我们可以 O(1) 地寻找 target - x。
 *     空间复杂度：O(n)，其中 n 是数组中的元素数量。主要为哈希表的开销。
 *  代码：
 *     let twoSum = (nums, target) => {
 *         let targetMap = new Map();
 *         let len = nums.length;
 *         for (let i = 0; i < len; i++) {
 *             const key = target - nums[i];
 *             if (targetMap.has(key)) {
 *                 return [targetMap.get(key), i];
 *             }
 *             targetMap.set(nums[i], i);
 *         }
 *     }
 */
let twoSum = (nums, target) => {
}
// @lc code=end

