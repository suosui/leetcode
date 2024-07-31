/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 *
 * https://leetcode.cn/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (60.66%)
 * Likes:    2543
 * Dislikes: 0
 * Total Accepted:    878.2K
 * Total Submissions: 1.4M
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [
 * ⁠ ["1","1","1","1","0"],
 * ⁠ ["1","1","0","1","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","0","0","0"]
 * ]
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","1","0","0"],
 * ⁠ ["0","0","0","1","1"]
 * ]
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 
 * grid[i][j] 的值为 '0' 或 '1'
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 * 
 *  方法：深度遍历
 *  思路：
 *      https://leetcode.cn/problems/number-of-islands/solutions/211211/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/?envType=study-plan-v2&envId=top-interview-150
 *  代码：
 *      var numIslands = function (grid) {
 *          let toReturn = 0;
 *          let m = grid.length;
 *          let n = grid[0].length;
 *          var dfs = (i, j) => {
 *              grid[j][i] = '2';
 *              if (i + 1 < n && grid[j][i + 1] !== '2' && grid[j][i + 1] !== '0') dfs(i + 1, j);
 *              if (i - 1 >= 0 && grid[j][i - 1] !== '2' && grid[j][i - 1] !== '0') dfs(i - 1, j);
 *              if (j + 1 < m && grid[j + 1][i] !== '2' && grid[j + 1][i] !== '0') dfs(i, j + 1);
 *              if (j - 1 >= 0 && grid[j - 1][i] !== '2' && grid[j - 1][i] !== '0') dfs(i, j - 1);
 *          }
 *          for (let j = 0; j < m; j++) {
 *              for (let i = 0; i < n; i++) {
 *                  if (grid[j][i] === '2' || grid[j][i] === '0') continue;
 *                  toReturn++;
 *                  dfs(i, j);
 *              }
 *          }
 *          return toReturn;
 *      };
 */
var numIslands = function (grid) {
};
// @lc code=end

