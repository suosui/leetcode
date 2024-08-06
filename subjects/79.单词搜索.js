/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode.cn/problems/word-search/description/
 *
 * algorithms
 * Medium (46.45%)
 * Likes:    1811
 * Dislikes: 0
 * Total Accepted:    523.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false
 * 。
 * 
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCCED"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "SEE"
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCB"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == board.length
 * n = board[i].length
 * 1 
 * 1 
 * board 和 word 仅由大小写英文字母组成
 * 
 * 
 * 
 * 
 * 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 *  方法一: 回溯+分治
 *  过程:
 *      a. for遍历board.
 *      b. 遍历到某个节点时，判断该节 board[x][y] === word[indexOfWord] 
 *          b.a 是：判断board[x][y]的上下左右是否符合 board[x+或-1][y+或-1] === word[indexOfWord+1] && paths.includes(y+或-1x+或-1)
 *              b.a.a 是：递归调用handle
 *          b.b 否：判断是否符合 indexOfWord === word.length
 *              b.b.a. 是：true
 *              b.b.b. 否：false
 *  复杂度：
 *      时间复杂度：O(n2)
 *      空间复杂度：O(n)
 *  代码：
 *      var exist = function (board, word) {
 *          var handle = function (x, y, indexOfWord, paths) {
 *              var originPath = [...paths];
 *              var char = word[indexOfWord];
 *              let isExist = false;
 *              if (x + 1 < board[0].length && !paths.includes(`y${y}x${x + 1}`) && board[y][x + 1] === char) {
 *                  if (indexOfWord == word.length - 1) {
 *                      return true;
 *                  }
 *                  paths.push(`y${y}x${x + 1}`);
 *                  isExist = handle(x + 1, y, indexOfWord + 1, paths);
 *                  if (isExist) {
 *                      return isExist;
 *                  }
 *                  paths = [...originPath];
 *              }
 *              if (x - 1 >= 0 && !paths.includes(`y${y}x${x - 1}`) && board[y][x - 1] === char) {
 *                  if (indexOfWord == word.length - 1) {
 *                      return true;
 *                  }
 *                  paths.push(`y${y}x${x - 1}`);
 *                  isExist = handle(x - 1, y, indexOfWord + 1, paths);
 *                  if (isExist) {
 *                      return isExist;
 *                  }
 *                  paths = [...originPath];
 *              }
 *              if (y + 1 < board.length && !paths.includes(`y${y + 1}x${x}`) && board[y + 1][x] === char) {
 *                  if (indexOfWord == word.length - 1) {
 *                      return true;
 *                  }
 *                  paths.push(`y${y + 1}x${x}`);
 *                  isExist = handle(x, y + 1, indexOfWord + 1, paths);
 *                  if (isExist) {
 *                      return isExist;
 *                  }
 *                  paths = [...originPath];
 *              }
 *              if (y - 1 >= 0 && !paths.includes(`y${y - 1}x${x}`) && board[y - 1][x] === char) {
 *                  if (indexOfWord == word.length - 1) {
 *                      return true;
 *                  }
 *                  paths.push(`y${y - 1}x${x}`);
 *                  isExist = handle(x, y - 1, indexOfWord + 1, paths);
 *                  if (isExist) {
 *                      return isExist;
 *                  }
 *                  paths = [...originPath];
 *              }
 *              return false;
 *          }
 *      
 *          for (let y = 0; y < board.length; y++) {
 *              for (let x = 0; x < board[0].length; x++) {
 *                  if (board[y][x] === word[0]) {
 *                      if (word.length === 1) {
 *                          return true;
 *                      }
 *                      const isExist = handle(x, y, 1, [`y${y}x${x}`]);
 *                      if (isExist) {
 *                          return true;
 *                      }
 *                  }
 *              }
 *          }
 *          return false;
 *      };
 *  优化版本：
 *      var exist = function (board, word) {
 *          const m = board.length;
 *          const n = board[0].length;
 *          var dfs = (j, i, preFix, idxOfWord, already) => {
 *              if (preFix === word) return true;
 *              const index = [
 *                  [j, i - 1],
 *                  [j, i + 1],
 *                  [j - 1, i],
 *                  [j + 1, i],
 *              ];
 *              for (let [newJ, newI] of index) {
 *                  if (newJ < 0 || newJ >= m) continue;
 *                  if (newI < 0 || newI >= n) continue;
 *                  if (board[newJ][newI] !== word[idxOfWord + 1]) continue;
 *                  const keyAlready = `j${newJ}i${newI}`;
 *                  if (already.indexOf(keyAlready) > -1) continue;
 *                  const isExist = dfs(newJ, newI, preFix + board[newJ][newI], idxOfWord + 1, [...already, keyAlready]);
 *                  if (isExist) return true;
 *              }
 *              return false;
 *          }
 *          for (let j = 0; j < m; j++) {
 *              for (let i = 0; i < n; i++) {
 *                  const keyAlready = `j${j}i${i}`;
 *                  const isExist = dfs(j, i, board[j][i], 0, [keyAlready]);
 *                  if (isExist) return true;
 *              }
 *          }
 *          return false;
 *      };
 */
var exist = function (board, word) {
};
// @lc code=end

