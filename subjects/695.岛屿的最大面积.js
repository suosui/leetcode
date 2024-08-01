/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 *
 * https://leetcode.cn/problems/max-area-of-island/description/
 *
 * algorithms
 * Medium (68.10%)
 * Likes:    1078
 * Dislikes: 0
 * Total Accepted:    340.8K
 * Total Submissions: 500K
 * Testcase Example:  '[[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]'
 *
 * 给你一个大小为 m x n 的二进制矩阵 grid 。
 * 
 * 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid
 * 的四个边缘都被 0（代表水）包围着。
 * 
 * 岛屿的面积是岛上值为 1 的单元格的数目。
 * 
 * 计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid =
 * [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
 * 输出：6
 * 解释：答案不应该是 11 ，因为岛屿只能包含水平或垂直这四个方向上的 1 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [[0,0,0,0,0,0,0,0]]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 50
 * grid[i][j] 为 0 或 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 * 
 *  方法：深度优先搜索
 *  思路：
 *     https://leetcode.cn/problems/number-of-islands/solutions/211211/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/?envType=study-plan-v2&envId=top-interview-150
 *  代码：
 *     var maxAreaOfIsland = function (grid) {
 *         let maxArea = 0;
 *         var m = grid.length;
 *         var n = grid[0].length;
 *         var calArea = (j, i) => {
 *             let area = 0;
 *             var dfs = (j, i) => {
 *                 area += 1;
 *                 grid[j][i] = 2;
 *                 if (i + 1 < n && grid[j][i + 1] !== 2 && grid[j][i + 1] !== 0) dfs(j, i + 1);
 *                 if (i - 1 >= 0 && grid[j][i - 1] !== 2 && grid[j][i - 1] !== 0) dfs(j, i - 1);
 *                 if (j + 1 < m && grid[j + 1][i] !== 2 && grid[j + 1][i] !== 0) dfs(j + 1, i);
 *                 if (j - 1 >= 0 && grid[j - 1][i] !== 2 && grid[j - 1][i] !== 0) dfs(j - 1, i);
 *             }
 *             dfs(j, i);
 *             return area;
 *         }
 *         for (let j = 0; j < m; j++) {
 *             for (let i = 0; i < n; i++) {
 *                 if (grid[j][i] === 1) {
 *                     let area = calArea(j, i);
 *                     if (area > maxArea) {
 *                         maxArea = area;
 *                     }
 *                 }
 *             }
 *         }
 *         return maxArea;
 *     };
 */
var maxAreaOfIsland = function (grid) {
};
// @lc code=end

