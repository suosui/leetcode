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
 * 方法一：单调栈
 * 思路：如何能接到雨水呢，有坑才能接到雨水，怎么才能有坑呢？两边高，中间低，这样才能接到雨水；
 *      单调栈能模拟这个过程，单调栈是指栈中的元素是单调递增或者单调递减的；
 *      本题中，我们需要找到两个高度，使得这两个高度之间的高度都比这两个高度低，这样才能接到雨水；
 *      我们从左到右遍历height。
 *      我们假设栈是递减的；所以从栈底到栈顶是模拟的坑的左边的壁。
 *      当遇到一个height大于栈顶的height时，说明我们可以模拟坑的右边的壁了，这时候我们可以计算接到的雨水量；
 * 过程：1. 用栈存储height的下标, 使得栈是递减的；即height[stack[i]] > height[stack[i+1]];
 *           a. 栈顶(即stack[stack.length-1])是最矮的height;
 *           b. 栈底(即stack[0])是最高的height;
 *      2. 当遇到一个height大于栈顶的height时，说明可以接雨水了，计算接的雨水量;
 *      3. 计算接的雨水量的方法：
 *           a. heightTop = stack[stack.length-1]; 
 *              heightLeft = stack[stack.length-2]; // 由于栈是递减的，所以heightLeft是heightTop的左边的height;
 *           b. 计算当前height和栈顶的height之间的雨水量;
 *                b.a 雨水量 += (Math.min(curr, heightLeft) - heightTop) * (i - idxLeft - 1);
 *                b.b stack.pop(); // 弹出栈顶;
 *           c. 重复b，直到heightTop >= curr;
 *           d. i 入栈;
 *  复杂度：
 *     时间复杂度：O(n), n是height的长度;
 *     空间复杂度：O(n), 栈的空间;
 *  代码：
 *     var trap = function (height) {
 *         const stack = [];
 *         let i = 0;
 *         let toReturn = 0;
 *         while (i < height.length) {
 *             let curr = height[i];
 *             if (stack.length === 0) {
 *                 if (curr === 0) {
 *                     i++;
 *                     continue;
 *                 }
 *                 stack.push(i++);
 *                 continue;
 *             }
 *             let idxTop = stack[stack.length - 1];
 *             let heightTop = height[idxTop];
 *             if (heightTop >= curr) {
 *                 stack.push(i);
 *             } else {
 *                 while (heightTop < curr) {
 *                     if (stack.length === 1) {
 *                         stack.pop();
 *                         break;
 *                     }
 *                     let idxLeft = stack[stack.length - 2];
 *                     let heightLeft = height[idxLeft];
 *                     let h = Math.min(curr, heightLeft) - heightTop;
 *                     let w = i - idxLeft - 1;
 *                     toReturn += (h * w);
 *     
 *                     stack.pop();
 *                     idxTop = stack[stack.length - 1];
 *                     heightTop = height[idxTop];
 *                 }
 *                 stack.push(i);
 *             }
 *             i++;
 *         }
 *         return toReturn;
 *     };
 */
var trap = function (height) {
};
// @lc code=end

