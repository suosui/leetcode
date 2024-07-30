/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 *
 * https://leetcode.cn/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (67.18%)
 * Likes:    1096
 * Dislikes: 0
 * Total Accepted:    451.4K
 * Total Submissions: 669K
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 
 * 
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1,3,4]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [1,null,3]
 * 输出: [1,3]
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: []
 * 输出: []
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 二叉树的节点个数的范围是 [0,100]
 * -100  
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
 * @return {number[]}
 * 
 * 方法一：深度优先搜索
 * 思路：
 *      1. 从根节点开始，根节点是第一层，根节点的左右子节点是第二层，以此类推
 *      2. 对于每一层，只选择最右边的节点
 *      3. 递归遍历树，传递当前节点和当前层级
 *      4. 如果当前层级不存在，则将当前节点的值放入结果数组
 *      5. 递归遍历右子树和左子树
 *      6. 返回结果数组
 *  复杂度：
 *      时间复杂度：O(n)，其中 n 是二叉树的节点个数。每一个节点最多被访问一次。
 *      空间复杂度：O(n)。我们需要存储每一层的最右边的节点。
 *  代码：
 *      var rightSideView = function (root) {
 *          if(!root) return [];
 *          var map = {
 *          };
 *          var bfs = function (parent, level) {
 *              if (parent.right) {
 *                  if (map[level] === undefined) {
 *                      map[level] = parent.right.val;
 *                  }
 *                  bfs(parent.right, level + 1);
 *              }
 *              if (parent.left) {
 *                  if (map[level] === undefined) {
 *                      map[level] = parent.left.val;
 *                  }
 *                  bfs(parent.left, level + 1);
 *              }
 *          }
 *          bfs(root, 1);
 *          return [root.val,...Object.values(map)];
 *      };
 */
var rightSideView = function (root) {
};
// @lc code=end

