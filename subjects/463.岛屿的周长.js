/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 *
 * https://leetcode.cn/problems/island-perimeter/description/
 *
 * algorithms
 * Easy (70.30%)
 * Likes:    760
 * Dislikes: 0
 * Total Accepted:    164.9K
 * Total Submissions: 234.2K
 * Testcase Example:  '[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]'
 *
 * 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。
 * 
 * 网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
 * 
 * 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100
 * 。计算这个岛屿的周长。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
 * 输出：16
 * 解释：它的周长是上面图片中的 16 个黄色的边
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [[1]]
 * 输出：4
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：grid = [[1,0]]
 * 输出：4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * row == grid.length
 * col == grid[i].length
 * 1 
 * grid[i][j] 为 0 或 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 *  
 *  方法: 深度优先遍历
 *  思路:
 *       参考题解: https://leetcode.cn/problems/number-of-islands/solutions/211211/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/?envType=study-plan-v2&envId=top-interview-150
 *  代码：
 *       var islandPerimeter = function (grid) {
 *           let toReturn = 0;
 *           let m = grid.length;
 *           let n = grid[0].length;
 *           var dfs = (j, i) => {
 *               toReturn += 4;
 *               grid[j][i] = 2;
 *               if (i - 1 >= 0 && grid[j][i - 1] !== 0) {
 *                   toReturn -= 1;
 *                   if (grid[j][i - 1] !== 2) dfs(j, i - 1);
 *               }
 *               if (i + 1 < n && grid[j][i + 1] !== 0) {
 *                   toReturn -= 1;
 *                   if (grid[j][i + 1] !== 2) dfs(j, i + 1);
 *               }
 *               if (j + 1 < m && grid[j + 1][i] !== 0) {
 *                   toReturn -= 1;
 *                   if (grid[j + 1][i] !== 2) dfs(j + 1, i);
 *               }
 *               if (j - 1 >= 0 && grid[j - 1][i] !== 0) {
 *                   toReturn -= 1;
 *                   if (grid[j - 1][i] !== 2) dfs(j - 1, i);
 *               }
 *           }
 *           for (let j = 0; j < m; j++) {
 *               for (let i = 0; i < n; i++) {
 *                   if (grid[j][i] === 1) {
 *                       dfs(j, i);
 *                       break;
 *                   }
 *               }
 *           }
 *           return toReturn;
 *       };
 */ 
var islandPerimeter = function (grid) {
};
// @lc code=end

