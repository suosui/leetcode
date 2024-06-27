/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (60.38%)
 * Likes:    2737
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 1.8M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * 
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
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
 *  方法一：递归
 *  思路：
 *     1. 递归地判断左子树和右子树是否对称。
 *     2. 如果左子树和右子树对称，那么根节点的左右子树也对称。
 *     3. 判断左子树的右子树和右子树的左子树是否对称。
 *     4. 递归结束条件：左子树为空且右子树为空时，返回 true。
 *     5. 递归结束条件：左子树为空或右子树为空时，返回 false。
 *     6. 递归结束条件：左子树的值不等于右子树的值时，返回 false。
 *     7. 递归结束条件：左子树的左子树和右子树的右子树不对称时，返回 false。
 *     8. 递归结束条件：左子树的右子树和右子树的左子树不对称时，返回 false。
 *     9. 递归结束条件：以上条件都不满足时，返回 true。
 *  复杂度：
 *     时间复杂度：O(n)
 *     空间复杂度：O(1)
 *  代码：
 *     var isSymmetric = function (root) {
 *         if (!root) return true;
 *         return check(root.left, root.right);
 *     };
 *     
 *     var check = function (left, right) {
 *         if (!left && right) return false;
 *         if (left && !right) return false;
 *         if (left && right) {
 *             if (left.val !== right.val) return false;
 *             return check(left.left, right.right) && check(left.right, right.left);
 *         }
 *         return true;
 *     }
 */
var isSymmetric = function (root){
};
// @lc code=end

