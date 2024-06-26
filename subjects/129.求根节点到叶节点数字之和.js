/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 *
 * https://leetcode.cn/problems/sum-root-to-leaf-numbers/description/
 *
 * algorithms
 * Medium (70.64%)
 * Likes:    743
 * Dislikes: 0
 * Total Accepted:    275K
 * Total Submissions: 389K
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
 * 
 * 
 * 每条从根节点到叶节点的路径都代表一个数字：
 * 
 * 
 * 例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
 * 
 * 
 * 计算从根节点到叶节点生成的 所有数字之和 。
 * 
 * 叶节点 是指没有子节点的节点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,3]
 * 输出：25
 * 解释：
 * 从根到叶子节点路径 1->2 代表数字 12
 * 从根到叶子节点路径 1->3 代表数字 13
 * 因此，数字总和 = 12 + 13 = 25
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [4,9,0,5,1]
 * 输出：1026
 * 解释：
 * 从根到叶子节点路径 4->9->5 代表数字 495
 * 从根到叶子节点路径 4->9->1 代表数字 491
 * 从根到叶子节点路径 4->0 代表数字 40
 * 因此，数字总和 = 495 + 491 + 40 = 1026
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点的数目在范围 [1, 1000] 内
 * 0 
 * 树的深度不超过 10
 * 
 * 
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
 *  思路：没啥好说的，递归遍历二叉树，然后将路径上的数字拼接起来，最后求和
 *  复杂度：
 *      时间复杂度：O(n)，n为二叉树的节点个数
 *      空间复杂度：O(n)，n为二叉树的节点个数
 *  代码：
 *      var sumNumbers = function (root) {
 *          const nums = [];
 *          let toReturn = 0;
 *          var fillNums = function (curr, already) {
 *              if (!curr) {
 *                  return;
 *              }
 *              already += curr.val;
 *              if (!curr.left && !curr.right) {
 *                  nums.push(already);
 *                  return;
 *              }
 *              if (curr.left) {
 *                  fillNums(curr.left, already);
 *              }
 *              if (curr.right) {
 *                  fillNums(curr.right, already);
 *              }
 *          }
 *          fillNums(root, '');
 *          for(let num of nums){
 *              toReturn += Number(num);
 *          }
 *          return toReturn;
 *      };
 */
var sumNumbers = function (root) {
};
// @lc code=end

