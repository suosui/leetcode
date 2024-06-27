/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (77.61%)
 * Likes:    1841
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 1.7M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树 root ，返回其最大深度。
 * 
 * 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 
 * 
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：3
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,null,2]
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点的数量在 [0, 10^4] 区间内。
 * -100 <= Node.val <= 100
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
 * @return {number}
 * 
 *  方法一：递归
 *  思路：递归遍历左右子树，获取左右子树的最大深度，然后取最大值
 *  复杂度：
 *      时间复杂度：O(n)，n 为二叉树的节点数
 *      空间复杂度：O(n)，递归栈的深度
 *  代码：
 *      var maxDepth = function (root) {
 *          if (!root) return 0;
 *          return getMaxDepth(root, 1);
 *      };
 *      
 *      var getMaxDepth = function (root, depth) {
 *          let leftDepth = root.left ? getMaxDepth(root.left, depth + 1) : depth;
 *          let rightDepth = root.right ? getMaxDepth(root.right, depth + 1) : depth;
 *          if (leftDepth > rightDepth) {
 *              return leftDepth;
 *          }
 *          return rightDepth;
 *      }
 *  测试用例：
 *      let root = {
 *          val: 3,
 *          left: {
 *              val: 9,
 *              left: null,
 *              right: null
 *          },
 *          right: {
 *              val: 20,
 *              left: {
 *                  val: 15,
 *                  left: null,
 *                  right: null
 *              },
 *              right: {
 *                  val: 7,
 *                  left: null,
 *                  right: null
 *              }
 *          }
 *      }
 *      console.log(maxDepth(root)); // 3
 */
var maxDepth = function (root) {
};
// @lc code=end

