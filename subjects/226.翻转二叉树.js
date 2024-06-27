/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 *
 * https://leetcode.cn/problems/invert-binary-tree/description/
 *
 * algorithms
 * Easy (80.51%)
 * Likes:    1820
 * Dislikes: 0
 * Total Accepted:    917.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '[4,2,7,1,3,6,9]'
 *
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：root = [4,2,7,1,3,6,9]
 * 输出：[4,7,2,9,6,3,1]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：root = [2,1,3]
 * 输出：[2,3,1]
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
 * 树中节点数目范围在 [0, 100] 内
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
 * @return {TreeNode}
 *  
 *  方法一：递归
 *  思路： 没啥可说的。
 *  复杂度：
 *     时间复杂度：O(n)
 *     空间复杂度：O(1)
 *  代码：
 *     var invertTree = function (root) {
 *         if (!root) return root;
 *         let tmp = root.left;
 *         root.left = root.right;
 *         root.right = tmp;
 *         if (root.left) invertTree(root.left);
 *         if (root.right) invertTree(root.right);
 *         return root;
 *     };
 */
var invertTree = function (root) {
};
// @lc code=end

