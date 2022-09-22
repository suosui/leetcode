/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode.cn/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (61.00%)
 * Likes:    3776
 * Dislikes: 0
 * Total Accepted:    835.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 返回容器可以储存的最大水量。
 * 
 * 说明：你不能倾斜容器。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49 
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * 
 * 示例 2：
 * 
 * 
 * 输入：height = [1,1]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    let pointerX = 0;
    let pointerY = height.length - 1;
    while (pointerX < pointerY) {
        const area = calArea(height[pointerX], height[pointerY], pointerX, pointerY);
        if (area > max) {
            max = area;
        }
        if (height[pointerX] >= height[pointerY]) {
            pointerY--;
        } else {
            pointerX++;
        }
    }
    return max
};

var calArea = (x, y, idxX, idxY) => {
    if (x < y) {
        return Math.abs(idxX - idxY) * x
    } else if (x > y) {
        return Math.abs(idxX - idxY) * y
    }
    return Math.abs(idxX - idxY) * y
}


// @lc code=end

