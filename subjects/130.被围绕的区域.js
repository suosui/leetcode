/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 *
 * https://leetcode.cn/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (46.51%)
 * Likes:    1138
 * Dislikes: 0
 * Total Accepted:    292.9K
 * Total Submissions: 628.4K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' 组成，捕获 所有 被围绕的区域：
 * 
 * 
 * 连接：一个单元格与水平或垂直方向上相邻的单元格连接。
 * 区域：连接所有 'O' 的单元格来形成一个区域。
 * 围绕：如果您可以用 'X' 单元格 连接这个区域，并且区域中没有任何单元格位于 board 边缘，则该区域被 'X' 单元格围绕。
 * 
 * 
 * 通过将输入矩阵 board 中的所有 'O' 替换为 'X' 来 捕获被围绕的区域。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：board =
 * [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
 * 
 * 
 * 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
 * 
 * 解释：
 * 
 * 在上图中，底部的区域没有被捕获，因为它在 board 的边缘并且不能被围绕。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：board = [["X"]]
 * 
 * 输出：[["X"]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == board.length
 * n == board[i].length
 * 1 <= m, n <= 200
 * board[i][j] 为 'X' 或 'O'
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 
 * 
 */
var solve = function (board) {
    var m = board.length;
    var n = board[0].length;
    let edgeMap = {};
    var genEdgeMap = (j, i) => {
        edgeMap[`j_${j}_i_${i}`] = true;
        if (i + 1 < n && board[j][i + 1] === 'O' && !edgeMap[`j_${j}_i_${i + 1}`]) {
            edgeMap[`j_${j}_i_${i + 1}`] = true;
            genEdgeMap(j, i + 1);
        }
        if (i - 1 > -0 && board[j][i - 1] === 'O' && !edgeMap[`j_${j}_i_${i - 1}`]) {
            edgeMap[`j_${j}_i_${i - 1}`] = true;
            genEdgeMap(j, i - 1);
        }
        if (j + 1 < m && board[j + 1][i] === 'O' && !edgeMap[`j_${j + 1}_i_${i}`]) {
            edgeMap[`j_${j + 1}_i_${i}`] = true;
            genEdgeMap(j + 1, i);
        }
        if (j - 1 > -1 && board[j - 1][i] === 'O' && !edgeMap[`j_${j - 1}_i_${i}`]) {
            edgeMap[`j_${j - 1}_i_${i}`] = true;
            genEdgeMap(j - 1, i);
        }
    }
    for (let j = 0; j < m; j++) {
        for (let i = 0; i < n; i++) {
            if (board[j][i] === 'O') {
                if (j === m - 1 || j === 0 || i === n - 1 || i === 0) {
                    if (edgeMap[`j_${j}_i_${i}`]) continue;
                    edgeMap[`j_${j}_i_${i}`] = true;
                    if (i + 1 < n && board[j][i+1] === 'O') genEdgeMap(j, i + 1);
                    if (i - 1 >= 0 && board[j][i-1] === 'O') genEdgeMap(j, i - 1);
                    if (j + 1 < m && board[j+1][i] === 'O') genEdgeMap(j + 1, i);
                    if (j - 1 >= 0 && board[j-1][i] === 'O') genEdgeMap(j - 1, i);
                }
            }
        }
    }
    for (let j = 0; j < m; j++) {
        for (let i = 0; i < n; i++) {
            if (j === m - 1 || j === 0 || i === n - 1 || i === 0) {
                continue;
            }
            if (board[j][i] === 'O' && !edgeMap[`j_${j}_i_${i}`]) {
                board[j][i] = 'X';
            }
        }
    }
};
// @lc code=end

