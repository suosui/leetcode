/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 *
 * https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (73.77%)
 * Likes:    1690
 * Dislikes: 0
 * Total Accepted:    484.8K
 * Total Submissions: 656.3K
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 * 
 * 
 * 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 * 展开后的单链表应该与二叉树 先序遍历 顺序相同。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,5,3,4,null,6]
 * 输出：[1,null,2,null,3,null,4,null,5,null,6]
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
 * 输入：root = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中结点数在范围 [0, 2000] 内
 * -100 
 * 
 * 
 * 
 * 
 * 进阶：你可以使用原地算法（O(1) 额外空间）展开这棵树吗？
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
 * @return {void} Do not return anything, modify root in-place instead.
 * 
 *  方法一：递归（模拟）
 *  思路： 没啥可以说的，就是递归模拟。
 *  复杂度：
 *      时间复杂度：O(n) n为节点数
 *      空间复杂度：O(1)
 *  代码：
*       var flatten = function (root) {
*           _flatten(root);
*       };
*       
*       var _flatten = function (curr) {
*           if (!curr) {
*               return null;
*           }
*           if (!curr.left && !curr.right) {
*               return curr;
*           }
*           if (curr.left) {
*               curr.left = _flatten(curr.left, curr);
*           }
*           if (curr.right) {
*               curr.right = _flatten(curr.right, curr);
*           }
*           if (curr.right) {
*               let tmp = curr.right;
*               if (curr.left) {
*                   curr.right = curr.left;
*                   let p = curr.right
*                   while (p.right) {
*                       p = p.right;
*                   }
*                   p.right = tmp;
*                   curr.left = null;
*               }
*           } else {
*               if (curr.left) {
*                   curr.right = curr.left;
*                   curr.left = null;
*               }
*           }
*           return curr;
*       }
*/
var flatten = function (root) {
};
// @lc code=end

