/*
 * @lc app=leetcode.cn id=827 lang=javascript
 *
 * [827] 最大人工岛
 *
 * https://leetcode.cn/problems/making-a-large-island/description/
 *
 * algorithms
 * Hard (47.25%)
 * Likes:    421
 * Dislikes: 0
 * Total Accepted:    55.5K
 * Total Submissions: 117.3K
 * Testcase Example:  '[[1,0],[0,1]]'
 *
 * 给你一个大小为 n x n 二进制矩阵 grid 。最多 只能将一格 0 变成 1 。
 * 
 * 返回执行此操作后，grid 中最大的岛屿面积是多少？
 * 
 * 岛屿 由一组上、下、左、右四个方向相连的 1 形成。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: grid = [[1, 0], [0, 1]]
 * 输出: 3
 * 解释: 将一格0变成1，最终连通两个小岛得到面积为 3 的岛屿。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: grid = [[1, 1], [1, 0]]
 * 输出: 4
 * 解释: 将一格0变成1，岛屿的面积扩大为 4。
 * 
 * 示例 3:
 * 
 * 
 * 输入: grid = [[1, 1], [1, 1]]
 * 输出: 4
 * 解释: 没有0可以让我们变成1，面积依然为 4。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == grid.length
 * n == grid[i].length
 * 1 <= n <= 500
 * grid[i][j] 为 0 或 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 * 
 *  方法：DFS
 *  思路：https://leetcode.cn/problems/making-a-large-island/solutions/2808887/jian-ji-gao-xiao-ji-suan-dao-yu-de-mian-ab4h7/
 *  代码：
 *       var largestIsland = function (grid) {
 *           var m = grid.length;
 *           var n = grid[0].length;
 *           var gridMap = {};
 *           var islands = [];
 *           var dfs = (j, i, islandIdx) => {
 *               if (!islands[islandIdx]) islands[islandIdx] = 0;
 *               islands[islandIdx]++;
 *               grid[j][i] = 2;
 *               gridMap[`j_${j}_i_${i}`] = islandIdx;
 *               if (i + 1 < n && grid[j][i + 1] !== 0 && grid[j][i + 1] !== 2) dfs(j, i + 1, islandIdx);
 *               if (i - 1 >= 0 && grid[j][i - 1] !== 0 && grid[j][i - 1] !== 2) dfs(j, i - 1, islandIdx);
 *               if (j + 1 < m && grid[j + 1][i] !== 0 && grid[j + 1][i] !== 2) dfs(j + 1, i, islandIdx);
 *               if (j - 1 >= 0 && grid[j - 1][i] !== 0 && grid[j - 1][i] !== 2) dfs(j - 1, i, islandIdx);
 *           }
 *           for (let j = 0; j < m; j++) {
 *               for (let i = 0; i < n; i++) {
 *                   if (grid[j][i] === 1) {
 *                       dfs(j, i, islands.length);
 *                   }
 *               }
 *           }
 *           let maxArea = 0;
 *           for (let area of islands) {
 *               if (area > maxArea) maxArea = area;
 *           }
 *           for (let j = 0; j < m; j++) {
 *               for (let i = 0; i < n; i++) {
 *                   if (grid[j][i] !== 0) {
 *                       continue;
 *                   }
 *                   let alreadyMap = {};
 *                   let area = 1;
 *                   if (i + 1 < n && grid[j][i + 1] === 2 && !alreadyMap[gridMap[`j_${j}_i_${i + 1}`]]) {
 *                       alreadyMap[gridMap[`j_${j}_i_${i + 1}`]] = true;
 *                       area += islands[gridMap[`j_${j}_i_${i + 1}`]];
 *                   }
 *                   if (i - 1 >= 0 && grid[j][i - 1] === 2 && !alreadyMap[gridMap[`j_${j}_i_${i - 1}`]]) {
 *                       alreadyMap[gridMap[`j_${j}_i_${i - 1}`]] = true;
 *                       area += islands[gridMap[`j_${j}_i_${i - 1}`]];
 *                   }
 *                   if (j + 1 < m && grid[j + 1][i] === 2 && !alreadyMap[gridMap[`j_${j+1}_i_${i}`]]) {
 *                       alreadyMap[gridMap[`j_${j + 1}_i_${i}`]] = true;
 *                       area += islands[gridMap[`j_${j + 1}_i_${i}`]];
 *                   }
 *                   if (j - 1 >= 0 && grid[j - 1][i] === 2 && !alreadyMap[gridMap[`j_${j-1}_i_${i}`]]) {
 *                       alreadyMap[gridMap[`j_${j - 1}_i_${i}`]] = true;
 *                       area += islands[gridMap[`j_${j - 1}_i_${i}`]];
 *                   }
 *                   if (area > maxArea) {
 *                       maxArea = area;
 *                   }
 *               }
 *           }
 *           return maxArea;
 *       };
 *     
 */
var largestIsland = function (grid) {
};
// @lc code=end

