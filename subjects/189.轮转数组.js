/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 *
 * https://leetcode.cn/problems/rotate-array/description/
 *
 * algorithms
 * Medium (44.34%)
 * Likes:    2154
 * Dislikes: 0
 * Total Accepted:    876.4K
 * Total Submissions: 2M
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右轮转 1 步: [7,1,2,3,4,5,6]
 * 向右轮转 2 步: [6,7,1,2,3,4,5]
 * 向右轮转 3 步: [5,6,7,1,2,3,4]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入：nums = [-1,-100,3,99], k = 2
 * 输出：[3,99,-1,-100]
 * 解释: 
 * 向右轮转 1 步: [99,-1,-100,3]
 * 向右轮转 2 步: [3,99,-1,-100]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 * 0 <= k <= 10^5
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 尽可能想出更多的解决方案，至少有 三种 不同的方法可以解决这个问题。
 * 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * 方法一: 环状替换+使用额外map
 * 过程: 
 *     a. 记录本地的索引和目标索引。
 *     b. 用map记录已经遍历过的索引。
 * 复杂度:
 *      时间复杂度: O(n)
 *      空间复杂度: O(n)  
 * 代码:
 *     var rotate = function (nums, k) {
 *       if (nums.length === 1) return;
 *       let finishedCnt = 0;
 *       let currIndex = 0;
 *       let currNum = nums[currIndex];
 *       let targetIndex = currIndex + k;
 *       targetIndex = targetIndex % nums.length;
 *       let targetNum = nums[targetIndex];
 *       let alreadyMap = {};
 *       while (finishedCnt < nums.length) {
 *           if (!alreadyMap[currIndex]) {
 *               alreadyMap[currIndex] = true;
 *           } else {
 *               currIndex++;
 *               currNum = nums[currIndex];
 *               targetIndex = currIndex + k;
 *               targetIndex = targetIndex % nums.length;
 *               targetNum = nums[targetIndex];
 *               alreadyMap[currIndex] = true;
 *           }
 *           let tmp = nums[targetIndex];
 *           nums[targetIndex] = currNum;
 *           currNum = tmp
 *           currIndex = targetIndex;
 *           targetIndex = currIndex + k;
 *           targetIndex = targetIndex % nums.length;
 *           targetNum = nums[targetIndex];
 *    
 *           finishedCnt++;
 *       }
 *    };
 */
var rotate = function (nums, k) {
};
// @lc code=end

