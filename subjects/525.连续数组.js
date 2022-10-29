/*
 * @lc app=leetcode.cn id=525 lang=javascript
 *
 * [525] 连续数组
 *
 * https://leetcode.cn/problems/contiguous-array/description/
 *
 * algorithms
 * Medium (54.57%)
 * Likes:    594
 * Dislikes: 0
 * Total Accepted:    62.2K
 * Total Submissions: 114.1K
 * Testcase Example:  '[0,1]'
 *
 * 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [0,1]
 * 输出: 2
 * 说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums = [0,1,0]
 * 输出: 2
 * 说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * nums[i] 不是 0 就是 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let sum = 0;
    let map = new Map();
    let ans = 0;
    map.set(0, -1);
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i] === 0 ? -1 : nums[i];
        sum += num;
        if (map.has(sum)) {
            const l = map.get(sum);
            if (i - l > ans) {
                ans = i - l;
            }
        } else {
            map.set(sum, i);
        }
    }
    return ans;
};
// @lc code=end

