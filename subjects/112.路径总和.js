/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 *
 * https://leetcode.cn/problems/path-sum/description/
 *
 * algorithms
 * Easy (54.33%)
 * Likes:    1364
 * Dislikes: 0
 * Total Accepted:    695.3K
 * Total Submissions: 1.3M
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点
 * 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
 * 
 * 叶子节点 是指没有子节点的节点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 * 输出：true
 * 解释：等于目标和的根节点到叶节点路径如上图所示。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,3], targetSum = 5
 * 输出：false
 * 解释：树中存在两条根节点到叶子节点的路径：
 * (1 --> 2): 和为 3
 * (1 --> 3): 和为 4
 * 不存在 sum = 5 的根节点到叶子节点的路径。
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [], targetSum = 0
 * 输出：false
 * 解释：由于树是空的，所以不存在根节点到叶子节点的路径。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点的数目在范围 [0, 5000] 内
 * -1000 <= Node.val <= 1000
 * -1000 <= targetSum <= 1000
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 * 
 *  方法一：递归
 *  思路：
 *       递归的判断左右子树，如果当前节点是叶子节点，那么判断当前节点的值是否等于目标值，如果等于则返回true，否则返回false
 *       如果当前节点不是叶子节点，那么递归的判断左右子树，判断左右子树是否有一条路径的和等于目标值
 *       如果有则返回true，否则返回false
 *       如果左右子树都没有找到，则返回false
 *       如果当前节点是null，则返回false
 *  复杂度：
 *       时间复杂度：O(n) n为节点个数
 *       空间复杂度：O(n) n为节点个数
 *  代码：
 *      var hasPathSum = function (root, targetSum) {
 *          if (!root) {
 *              return false;
 *          }
 *          return sum(root, 0, targetSum);
 *      };
 *      
 *      var sum = function (curr, alreadySum, targetSum) {
 *          let total = alreadySum + curr.val;
 *          if (total === targetSum) {
 *              if (!curr.left && !curr.right) {
 *                  return true;
 *              }
 *          } else {
 *              if (!curr.left && !curr.right) {
 *                  return false;
 *              }
 *          }
 *          if (curr.left) {
 *              if (sum(curr.left, total, targetSum)) {
 *                  return true;
 *              }
 *          }
 *          if (curr.right) {
 *              if (sum(curr.right, total, targetSum)) {
 *                  return true;
 *              }
 *          }
 *          return false;
 *      }
 */
var hasPathSum = function (root, targetSum) {
};
// @lc code=end

