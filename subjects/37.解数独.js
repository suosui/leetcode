/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 *
 * https://leetcode.cn/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (67.61%)
 * Likes:    1420
 * Dislikes: 0
 * Total Accepted:    172.3K
 * Total Submissions: 254.8K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * 编写一个程序，通过填充空格来解决数独问题。
 * 
 * 数独的解法需 遵循如下规则：
 * 
 * 
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 * 
 * 
 * 数独部分空格内已填入了数字，空白格用 '.' 表示。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：board =
 * [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
 * 
 * 输出：[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
 * 解释：输入的数独如上图所示，唯一有效的解决方案如下所示：
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * board.length == 9
 * board[i].length == 9
 * board[i][j] 是一位数字或者 '.'
 * 题目数据 保证 输入数独仅有一个解
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const hashX = { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {} };
    const hashY = { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {} };
    const hash3X3 = { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {} };
    const hashHistory = {};
    const needFill = [];
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[0].length; y++) {
            const number = board[x][y];
            if (number === '.') {
                needFill.push([x, y]);
                continue;
            }
            hashX[x + 1][number] = true;
            hashY[y + 1][number] = true;
            const key3X3 = convertTo3X3Key(x, y);
            hash3X3[key3X3][number] = true;
        }
    }

    var solveSudokuCore = function (xStart, yStart, idx) {
        const key3X3 = convertTo3X3Key(xStart, yStart);
        if (idx === needFill.length - 1) {
            const newNumber = getNumber(xStart, yStart, key3X3);
            if (newNumber) {
                hashX[xStart + 1][newNumber] = true;
                hashY[yStart + 1][newNumber] = true;
                hash3X3[key3X3][newNumber] = true;
                board[xStart][yStart] = `${newNumber}`;
                return true;
            }
            return false;
        }
        hashHistory[`${xStart}${yStart}`] = {};
        let newNumber = getNumber(xStart, yStart, key3X3);
        while (newNumber) {
            hashX[xStart + 1][newNumber] = true;
            hashY[yStart + 1][newNumber] = true;
            hash3X3[key3X3][newNumber] = true;
            board[xStart][yStart] = `${newNumber}`;
            if (solveSudokuCore(needFill[idx + 1][0], needFill[idx + 1][1], idx + 1)) {
                return true;
            }
            hashX[xStart + 1][newNumber] = false;
            hashY[yStart + 1][newNumber] = false;
            hash3X3[key3X3][newNumber] = false;
            board[xStart][yStart] = `.`;
            newNumber = getNumber(xStart, yStart, key3X3);
        }
        return false;

    }

    var getNumber = function (x, y, key3X3) {
        hashHistory[`${x}${y}`] = hashHistory[`${x}${y}`] || {};
        const triedMax = Number((Object.keys(hashHistory[`${x}${y}`]).sort((a, b) => { return b - a })[0] || 0)) + 1
        let i = triedMax
        while (i <= 9) {
            if (!hashHistory[`${x}${y}`][i]
                && !hashX[x + 1][i]
                && !hashY[y + 1][i]
                && !hash3X3[key3X3][i]) {
                hashHistory[`${x}${y}`][i] = true;
                return i;
            }
            hashHistory[`${x}${y}`][i] = true;
            i++;
        }
    }

    solveSudokuCore(needFill[0][0], needFill[0][1], 0);
};

var convertTo3X3Key = function (x, y) {
    if (x < 3) {
        if (y < 3) {
            return 1;
        } else if (y < 6) {
            return 2;
        } else {
            return 3;
        }
    } else if (x < 6) {
        if (y < 3) {
            return 4;
        } else if (y < 6) {
            return 5;
        } else {
            return 6;
        }
    } else {
        if (y < 3) {
            return 7;
        } else if (y < 6) {
            return 8;
        } else {
            return 9;
        }
    }
}
// @lc code=end