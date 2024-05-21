/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode.cn/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (62.03%)
 * Likes:    3861
 * Dislikes: 0
 * Total Accepted:    586.5K
 * Total Submissions: 944.2K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    var stack = [];
    let i = 0;
    let toReturn = 0;
    while (i < height.length) {
        var cur = height[i];
        if (stack.length === 0) {
            stack.push(i);
        }
        var idxTop = stack[stack.length - 1];
        var heightTop = height[idxTop];
        var heightRight = height[stack[0]];
        if (heightTop >= height[i]) {
            stack.push(i);
        } else {
            while (heightTop < height[i]) {
                Math.min(heightRight,height[i]) - 0;
            }
        }
    }
};
trap([0,1,0,2,1,0,1,3,2,1,2,1]);
// @lc code=end

