/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Easy (76.14%)
 * Likes:    1585
 * Dislikes: 0
 * Total Accepted:    974K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1]
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [0, 100] 内
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * @return {number[]}
 * 
 *  方法一：递归
 *  思路：递归遍历左子树，访问根节点，递归遍历右子树
 *  复杂度：
 *       时间复杂度：O(n)，n为二叉树的节点个数
 *       空间复杂度：O(n)，递归调用的栈空间
 *  代码：
 *       var inorderTraversal = function (root) {
 *           const res = [];
 *           var inorder = (root) => {
 *               if (!root) {
 *                   return;
 *               }
 *               inorder(root.left);
 *               res.push(root.val);
 *               inorder(root.right);
 *           }
 *           inorder(root);
 *           return res;
 *       }; 
 *  
 *  方法二：迭代
 *  思路：使用栈模拟递归过程，模拟递归过程的调用栈
 *  复杂度：
 *       时间复杂度：O(2n)，n为二叉树的节点个数
 *       空间复杂度：O(n)，栈空间
 *  代码：
 *       var inorderTraversal = function (root) {
 *           const res = [];
 *           const stack = [];
 *           if(!root) return res;
 *           stack.push({ color: 'WHITE', node: root });
 *           while (stack.length) {
 *               const { color, node } = stack.pop();
 *               if (color === 'WHITE') {
 *                   if (node.right) stack.push({ color: 'WHITE', node: node.right });
 *                   stack.push({ color: 'GREY', node });
 *                   if (node.left) stack.push({ color: 'WHITE', node: node.left });
 *               } else if (color === 'GREY') {
 *                   res.push(node.val);
 *               }
 *           }
 *           return res;
 *       };
 */
var inorderTraversal = function (root) {
};
// @lc code=end

