/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode.cn/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (76.64%)
 * Likes:    1185
 * Dislikes: 0
 * Total Accepted:    802.1K
 * Total Submissions: 1M
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,null,2,3]
 * 输出：[3,2,1]
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
 * 树中节点的数目在范围 [0, 100] 内
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * 
 * 进阶：递归算法很简单，你可以通过迭代算法完成吗？
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
 *  思路：后序遍历的顺序是左右根，所以我们可以先递归遍历左子树，再递归遍历右子树，最后将根节点的值加入结果数组中
 *  复杂度：
 *      时间复杂度：O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次。
 *      空间复杂度：O(n)，为递归过程中栈的开销，平均情况下为 O(logn)，最坏情况下树呈现链状，为 O(n)。
 *  代码：
 *      var postorderTraversal = function(root) {
 *          const toReturn = [];
 *          var traversal = (root) => {
 *              if(!root) return;
 *              if(root.left) traversal(root.left);
 *              if(root.right) traversal(root.right);
 *              toReturn.push(root.val);
 *          }
 *          traversal(root);
 *          return toReturn;
 *      };
 *  方法二：迭代
 *  思路：我们可以用迭代的方法实现后序遍历。我们首先把根节点入栈，然后依次将右子树、左子树入栈。这样我们就保证了每次取栈顶元素的时候，左子树在右子树前面被遍历，右子树在左子树后面被遍历。
 *  复杂度：
 *      时间复杂度：O(2n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历两次。
 *      空间复杂度：O(n)，为迭代过程中显式栈的开销，平均情况下为 O(logn)，最坏情况下树呈现链状，为 O(n)。
 *  代码：
 *      var postorderTraversal = function (root) {
 *          const toReturn = [];
 *          if (!root) return toReturn;
 *          const stack = [];
 *          stack.push({ node: root, color: 'WHITE' });
 *          while (stack.length) {
 *              const { node, color } = stack.pop();
 *              if (color === 'WHITE') {
 *                  stack.push({ node, color: 'GREY' });
 *                  if (node.right) stack.push({ node: node.right, color: 'WHITE' });
 *                  if (node.left) stack.push({ node: node.left, color: 'WHITE' });
 *              } else if (color === 'GREY') {
 *                  toReturn.push(node.val);
 *              }
 *          }
 *          return toReturn;
 *      }
 */
var postorderTraversal = function(root) {
};
// @lc code=end

