/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 *
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (71.33%)
 * Likes:    2749
 * Dislikes: 0
 * Total Accepted:    755.4K
 * Total Submissions: 1.1M
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n1'
 *
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x
 * 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 输出：3
 * 解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * 输出：5
 * 解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1,2], p = 1, q = 2
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [2, 10^5] 内。
 * -10^9 
 * 所有 Node.val 互不相同 。
 * p != q
 * p 和 q 均存在于给定的二叉树中。
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 
 *  方法一：存储父节点
 *  思路：
 *      1. 从根节点开始遍历整棵二叉树，用哈希表记录每个节点的父节点指针。
 *      2. 从p节点开始不断往它的祖先移动，并用数据结构记录已经访问过的祖先节点。
 *      3. 同样，我们再从q节点开始不断往它的祖先移动，如果有祖先已经被访问过，即意味着这是p和q的深度最深的公共祖先，即LCA节点。
 *  复杂度：
 *      时间复杂度：O(n)，其中 n 是二叉树的节点数。二叉树的所有节点有且只会被访问一次，从而使用 O(n) 的时间复杂度构建哈希表。
 *      空间复杂度：O(n)，其中 n 是二叉树的节点数。哈希表存储每个节点的父节点需要 O(n) 的空间复杂度。
 *  代码：
 *      var lowestCommonAncestor = function (root, p, q) {
 *          if (!root) return root;
 *          let fatherMap = {};
 *          let pathMap = {};
 *          const dfs = (root) => {
 *              if (root.left) {
 *                  fatherMap[root.left.val] = root;
 *                  dfs(root.left);
 *              }
 *              if (root.right) {
 *                  fatherMap[root.right.val] = root;
 *                  dfs(root.right);
 *              }
 *          }
 *          dfs(root);
 *          pathMap[p.val] = true;
 *          let pFather = fatherMap[p.val];
 *          while (pFather) {
 *              pathMap[pFather.val] = true;
 *              pFather = fatherMap[pFather.val];
 *          }
 *          if (pathMap[q.val]) return q;
 *          let qFather = fatherMap[q.val];
 *          while (qFather) {
 *              if (pathMap[qFather.val]) return qFather;
 *              qFather = fatherMap[qFather.val];
 *          }
 *      };
 */
var lowestCommonAncestor = function (root, p, q) {
};
// @lc code=end

