/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 *
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (67.42%)
 * Likes:    1993
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 1.6M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[3],[9,20],[15,7]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1]
 * 输出：[[1]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [0, 2000] 内
 * -1000 <= Node.val <= 1000
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
 * @return {number[][]}
 * 
 *  方法一：递归
 *  思路：没啥好说的，递归遍历，然后把每一层的节点值放到一个数组里面，然后返回
 *  复杂度：
 *       时间复杂度：O(n)
 *       空间复杂度：O(n)
 *  代码：
 *      var levelOrder = function (root) {
 *          let toReturn = [];
 *          if (!root) return toReturn;
 *          const dfs = (root, level) => {
 *              if (!toReturn[level]) {
 *                  toReturn[level] = [];
 *              }
 *              toReturn[level].push(root.val);
 *              if (root.left) {
 *                  dfs(root.left, level + 1);
 *              }
 *              if (root.right) {
 *                  dfs(root.right, level + 1);
 *              }
 *          }
 *          dfs(root, 0);
 *          return toReturn;
 *      };
 */
var levelOrder = function (root) {
};
// @lc code=end

