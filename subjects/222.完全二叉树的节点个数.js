/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 *
 * https://leetcode.cn/problems/count-complete-tree-nodes/description/
 *
 * algorithms
 * Easy (81.70%)
 * Likes:    1155
 * Dislikes: 0
 * Total Accepted:    414.4K
 * Total Submissions: 506.6K
 * Testcase Example:  '[1,2,3,4,5,6]'
 *
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
 * 
 * 完全二叉树
 * 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h
 * 层，则该层包含 1~ 2^h 个节点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,3,4,5,6]
 * 输出：6
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = []
 * 输出：0
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点的数目范围是[0, 5 * 10^4]
 * 0 
 * 题目数据保证输入的树是 完全二叉树
 * 
 * 
 * 
 * 
 * 进阶：遍历树来统计节点是一种时间复杂度为 O(n) 的简单解决方案。你可以设计一个更快的算法吗？
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
 *  复杂度：
 *       时间：O(logn * logn)
 *       空间：O(logn)
 *  代码：
 *       var countNodes = function (root) {
 *           if (!root) return 0;
 *           return countNodes(root.left) + countNodes(root.right) + 1;
 *       }
 *  方法二：二分查找
 *  思路：
 *      1. 由于是完全二叉树，所以可以先求出左子树的深度和右子树的深度
 *      2. 如果左子树的深度等于右子树的深度，说明左子树是满二叉树，右子树是完全二叉树
 *      3. 如果左子树的深度不等于右子树的深度，说明右子树是满二叉树，左子树是完全二叉树
 *      4. 递归求解左子树或者右子树的节点个数
 *      5. 求解左子树或者右子树的节点个数时，可以直接计算节点个数，不需要递归
 *  复杂度：
 *     时间：O(logn * logn)
 *     空间：O(logn)
 *  代码：
 *      var countNodes = function (root) {
 *          const getDepth = (root) => {
 *              let dept = 0;
 *              if (!root) return dept;
 *              dept++;
 *              while (root.left) {
 *                  dept++;
 *                  root = root.left;
 *              }
 *              return dept;
 *          }
 *          if (!root) return 0;
 *          const lDept = getDepth(root.left);
 *          const rDept = getDepth(root.right);
 *          if (lDept === rDept) {
 *              return countNodes(root.right) + (1 << lDept);
 *          } else {
 *              return countNodes(root.left) + (1 << rDept);
 *          }
 *      };
 */
var countNodes = function (root) {
}
// @lc code=end

