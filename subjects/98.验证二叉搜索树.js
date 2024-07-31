/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode.cn/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (38.00%)
 * Likes:    2384
 * Dislikes: 0
 * Total Accepted:    954.8K
 * Total Submissions: 2.5M
 * Testcase Example:  '[2,1,3]'
 *
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 * 
 * 有效 二叉搜索树定义如下：
 * 
 * 
 * 节点的左子树只包含 小于 当前节点的数。
 * 节点的右子树只包含 大于 当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [2,1,3]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [5,1,4,null,null,3,6]
 * 输出：false
 * 解释：根节点的值是 5 ，但是右子节点的值是 4 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目范围在[1, 10^4] 内
 * -2^31 <= Node.val <= 2^31 - 1
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
 * @return {boolean}
 * 
 *  方法一：中序遍历
 *  思路： 
 *      1. 二叉搜索树的中序遍历是升序的
 *      2. 遍历二叉搜索树，将节点值存入数组中
 *      3. 遍历数组，判断是否是升序
 *      4. 返回结果
 *  复杂度：
 *      时间复杂度：O(n)，其中 n 是二叉搜索树的节点数。中序遍历需要 O(n) 的时间
 *      空间复杂度：O(n)，其中 n 是二叉搜索树的节点数。空间复杂度主要取决于数组的空间
 *  代码：
 *      var isValidBST = function (root) {
 *          const nodes = [];
 *          const mid = (root) => {
 *              if (root.left) mid(root.left);
 *              nodes.push(root.val);
 *              if (root.right) mid(root.right);
 *          }
 *          mid(root);
 *          let i = 0;
 *          while (i < nodes.length - 1) {
 *              if (nodes[i] >= nodes[i + 1]) {
 *                  return false;
 *              }
 *              i++;
 *          }
 *          return true;
 *      };
 */
var isValidBST = function (root) {
};
// @lc code=end

