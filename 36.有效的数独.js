/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const hashX = { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {} };
  const hashY = { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {} };
  const hash3X3 = { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {} };

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      const number = board[x][y];
      if (number === '.') {
        continue;
      }
      if (!hashX[x + 1][number]) {
        hashX[x + 1][number] = true;
      } else {
        return false;
      }
      if (!hashY[y + 1][number]) {
        hashX[y + 1][number] = true;
      } else {
        return false;
      }
      const key3X3 = convertTo3X3Key(x, y);
      if (!hash3X3[key3X3][number]) {
        hash3X3[key3X3][number] = true;
      } else {
        return false;
      }
    }
  }
  return true;
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

isValidSudoku([
  [".","8","7","6","5","4","3","2","1"],
  ["2",".",".",".",".",".",".",".","."],
  ["3",".",".",".",".",".",".",".","."],
  ["4",".",".",".",".",".",".",".","."],
  ["5",".",".",".",".",".",".",".","."],
  ["6",".",".",".",".",".",".",".","."],
  ["7",".",".",".",".",".",".",".","."],
  ["8",".",".",".",".",".",".",".","."],
  ["9",".",".",".",".",".",".",".","."]
  ]);
// @lc code=end

