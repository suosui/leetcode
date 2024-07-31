/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 *
 * https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (59.00%)
 * Likes:    906
 * Dislikes: 0
 * Total Accepted:    390.9K
 * Total Submissions: 660.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[3],[20,9],[15,7]]
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
 * @return {number[][]}
 *  
 *  方法一：队列
 *  思路：
 *       1. 如果level是偶数，就正常添加到数组中 
 *       2. 如果level是奇数，就添加到数组的头部
 *       3. 递归遍历左右子树
 *       4. 返回结果
 *  复杂度：
 *       时间复杂度：O(n)，其中 n 是二叉树的节点个数。每个节点会且仅会被遍历一次。
 *       空间复杂度：O(n)。与普通层序遍历相同，最坏情况下，队列中会包含同一层的所有节点。
 *  代码：
 *       var zigzagLevelOrder = function (root) {
 *           var toReturn = [];
 *           if (!root) return toReturn;
 *           var dfs = (root, level) => {
 *               if (!toReturn[level]) {
 *                   toReturn[level] = [];
 *               }
 *               if (level % 2 === 0) {
 *                   toReturn[level].push(root.val);
 *               } else {
 *                   toReturn[level].unshift(root.val);
 *               }
 *               if (root.left) dfs(root.left, level + 1);
 *               if (root.right) dfs(root.right, level + 1);
 *           }
 *           dfs(root, 0)
 *           return toReturn;
 *       };
 */
var zigzagLevelOrder = function (root) {
};
// @lc code=end

