/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
 *
 * https://leetcode.cn/problems/kth-smallest-element-in-a-bst/description/
 *
 * algorithms
 * Medium (77.41%)
 * Likes:    881
 * Dislikes: 0
 * Total Accepted:    392.8K
 * Total Submissions: 505.4K
 * Testcase Example:  '[3,1,4,null,2]\n1'
 *
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（从 1 开始计数）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [3,1,4,null,2], k = 1
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [5,3,6,2,4,null,null,1], k = 3
 * 输出：3
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中的节点数为 n 。
 * 1 <= k <= n <= 10^4
 * 0 <= Node.val <= 10^4
 * 
 * 
 * 
 * 
 * 进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？
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
 * @param {number} k
 * @return {number}
 *  
 *  方法一：中序遍历
 *  思路：
 *       1. 二叉搜索树的中序遍历结果是一个递增的序列
 *       2. 因此，我们可以通过中序遍历得到第 k 小的元素
 *       3. 具体做法是，对二叉搜索树进行中序遍历，得到的序列是递增的
 *       4. 返回序列的第 k - 1 个元素
 *  复杂度：
 *       时间复杂度：O(n)，其中 n 是二叉搜索树的节点数。中序遍历需要 O(n) 的时间
 *       空间复杂度：O(n)，其中 n 是二叉搜索树的节点数。空间复杂度主要取决于递归栈的空间
 *  代码：
 *       var kthSmallest = function (root, k) {
 *           const nodes = [];
 *           const mid = (root) => {
 *               if (root.left) mid(root.left);
 *               nodes.push(root.val);
 *               if (root.right) mid(root.right);
 *           }
 *           mid(root);
 *           return nodes[k - 1];
 *       };
 */
var kthSmallest = function (root, k) {
};
// @lc code=end

