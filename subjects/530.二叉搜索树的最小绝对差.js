/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 *
 * https://leetcode.cn/problems/minimum-absolute-difference-in-bst/description/
 *
 * algorithms
 * Easy (62.78%)
 * Likes:    575
 * Dislikes: 0
 * Total Accepted:    263.9K
 * Total Submissions: 420.2K
 * Testcase Example:  '[4,2,6,1,3]'
 *
 * 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
 * 
 * 差值是一个正数，其数值等于两值之差的绝对值。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [4,2,6,1,3]
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,0,48,null,null,12,49]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点的数目范围是 [2, 10^4]
 * 0 <= Node.val <= 10^5
 * 
 * 
 * 
 * 
 * 注意：本题与 783
 * https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/ 相同
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
 *  方法一：数组+排序
 *  思路：
 *      1. 遍历二叉搜索树，将节点值存入数组中
 *      2. 对数组进行排序
 *      3. 遍历数组，找到相邻两个节点值的最小差值
 *      4. 返回最小差值
 *  复杂度：
 *      时间复杂度：O(nlogn)，其中 n 是二叉搜索树的节点数。中序遍历需要 O(n) 的时间，排序数组需要 O(nlogn) 的时间
 *      空间复杂度：O(n)，其中 n 是二叉搜索树的节点数。空间复杂度主要取决于数组的空间
 *  代码：
 *      var getMinimumDifference = function(root) {
 *          const nodes = [];
 *          const dfs = (root) => {
 *              nodes.push(root.val);
 *              if (root.left) dfs(root.left);
 *              if (root.right) dfs(root.right);
 *          }
 *          dfs(root);
 *          nodes.sort((a, b) => {
 *              return a - b;
 *          });
 *          let toReturn = Infinity;
 *          let i = 0;
 *          while (i < nodes.length - 1) {
 *              if (nodes[i + 1] - nodes[i] < toReturn) {
 *                  toReturn = nodes[i + 1] - nodes[i];
 *              }
 *              i++;
 *          }
 *          return toReturn;
 *      };
 *  方法二：中序遍历
 *  思路：
 *        1. 二叉搜索树的中序遍历是有序的，因此可以在中序遍历的过程中维护前一个节点的值。
 *        2. 在中序遍历的过程中，每次遍历的时候计算当前节点值与前一个节点值的差值，取最小值即可。
 *        3. 返回最小差值
 *  复杂度：
 *       时间复杂度：O(n)，其中 n 是二叉搜索树的节点数。中序遍历需要 O(n) 的时间
 *       空间复杂度：O(n)，其中 n 是二叉搜索树的节点数。空间复杂度主要取决于递归调用的栈空间
 *  代码：
 *       var getMinimumDifference = function (root) {
 *           let toReturn = Infinity;
 *           let queue = [];
 *           let mid = (root) => {
 *               if (root.left) mid(root.left);
 *               queue.push(root.val);
 *               if (root.right) mid(root.right);
 *           }
 *           mid(root);
 *           let i = 0;
 *           while (i < queue.length - 1) {
 *               if (queue[i + 1] - queue[i] < toReturn) {
 *                   toReturn = queue[i + 1] - queue[i];
 *               }
 *               i++;
 *           }
 *           return toReturn;
 *       };
 */
var getMinimumDifference = function (root) {
};
// @lc code=end

