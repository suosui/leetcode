/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 *
 * https://leetcode.cn/problems/range-sum-query-2d-immutable/description/
 *
 * algorithms
 * Medium (60.16%)
 * Likes:    443
 * Dislikes: 0
 * Total Accepted:    109.5K
 * Total Submissions: 181.2K
 * Testcase Example:  '["NumMatrix","sumRegion","sumRegion","sumRegion"]\n' +
  '[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]'
 *
 * 给定一个二维矩阵 matrix，以下类型的多个请求：
 * 
 * 
 * 计算其子矩形范围内元素的总和，该子矩阵的 左上角 为 (row1, col1) ，右下角 为 (row2, col2) 。
 * 
 * 
 * 实现 NumMatrix 类：
 * 
 * 
 * NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
 * int sumRegion(int row1, int col1, int row2, int col2) 返回 左上角 (row1, col1)
 * 、右下角 (row2, col2) 所描述的子矩阵的元素 总和 。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入: 
 * ["NumMatrix","sumRegion","sumRegion","sumRegion"]
 * 
 * [[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
 * 输出: 
 * [null, 8, 11, 12]
 * 
 * 解释:
 * NumMatrix numMatrix = new
 * NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);
 * numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)
 * numMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)
 * numMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 200
 * -10^5 <= matrix[i][j] <= 10^5
 * 0 <= row1 <= row2 < m
 * 0 <= col1 <= col2 < n
 * 最多调用 10^4 次 sumRegion 方法
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix;
    this.sum = new Map();
    const getYSum = (x, y) => {
        let res = 0;
        for (let i = 0; i <= x; i++) {
            res += Number(this.matrix[i][y]);
        }
        return res;
    }
    for (let x = 0; x < this.matrix.length; x++) {
        for (let y = 0; y < this.matrix[0].length; y++) {
            if (x === 0 && y === 0) {
                this.sum.set('0,0', this.matrix[0][0]);
                continue;
            }
            this.sum.set(`${x},${y}`, (this.sum.get(`${x},${y - 1}`) || 0) + getYSum(x, y));
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    return this.sum.get(`${row2},${col2}`) - (this.sum.get(`${row1-1},${col2}`) || 0) - (this.sum.get(`${row2},${col1-1}`)|| 0 )+ (this.sum.get(`${row1-1},${col1-1}`) || 0);
};



/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

