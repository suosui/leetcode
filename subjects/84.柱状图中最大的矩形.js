/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 *
 * https://leetcode.cn/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (44.69%)
 * Likes:    2199
 * Dislikes: 0
 * Total Accepted:    297.7K
 * Total Submissions: 665.2K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 
 * 
 * 输入：heights = [2,1,5,6,2,3]
 * 输出：10
 * 解释：最大的矩形为图中红色区域，面积为 10
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入： heights = [2,4]
 * 输出： 4
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
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let n = heights.length;
    let RightBorder = new Array(n).fill(n);
    let LeftBorder = [];
    let stk = [];
    let res = 0;
    for (let i = 0; i < n; i++)//寻找每个柱子的右边界
    {
        while (stk.length && heights[i] < heights[stk[stk.length - 1]])
            RightBorder[stk.pop()] = i;
        stk.push(i);
    }
    while (stk.length) stk.pop();//清空栈

    for (let i = 0; i < n; i++)//寻找每个柱子的左边界
    {
        while (stk.length && heights[i] < heights[stk[stk.length - 1]])
            stk.pop();
        LeftBorder[i] = (stk.length === 0 ? -1 : stk[stk.length - 1]);
        stk.push(i);
    }

    for (let i = 0; i < n; i++)//枚举每个柱子，作为上边界
        res = Math.max(res, heights[i] * (RightBorder[i] - LeftBorder[i] - 1));
    return res;
};
// @lc code=end

