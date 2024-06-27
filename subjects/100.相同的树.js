/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 *
 * https://leetcode.cn/problems/same-tree/description/
 *
 * algorithms
 * Easy (61.54%)
 * Likes:    1155
 * Dislikes: 0
 * Total Accepted:    583.2K
 * Total Submissions: 946.6K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
 * 
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：p = [1,2,3], q = [1,2,3]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：p = [1,2], q = [1,null,2]
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：p = [1,2,1], q = [1,1,2]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 两棵树上的节点数目都在范围 [0, 100] 内
 * -10^4 
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 
 *  方法一：递归
 *  复杂度：
 *      时间复杂度：O(n)，其中 n 是树的结点数。每个结点在递归中只被访问一次。
 *      空间复杂度：O(n)，其中 n 是树的结点数。空间复杂度取决于递归的栈深度，而栈深度在最坏情况下等于树的高度，最坏情况下树的高度等于结点数。
 *  代码：
var isSameTree = function (p, q) {
    if (!p && !q) {
        return true;
    }
    if (!p || !q) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    if (p.left && !q.left) {
        return false;
    }
    if (!p.left && q.left) {
        return false;
    }
    if (p.right && !q.right) {
        return false;
    }
    if (!p.right && q.right) {
        return false;
    }
    if (p.left && p.left.val !== q.left.val) {
        return false;
    }
    if (p.right && p.right.val !== q.right.val) {
        return false;
    }
    let leftIsSame = true;
    let rightIsSame = true;
    if (p.left && q.left) {
        leftIsSame = isSameTree(p.left, q.left);
    }
    if (p.right && q.right) {
        rightIsSame = isSameTree(p.right, q.right);
    }
    return leftIsSame && rightIsSame;
};
 */
var isSameTree = function (p, q) {
    if (!p && !q) {
        return true;
    }
    if (!p || !q) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    if (p.left && !q.left) {
        return false;
    }
    if (!p.left && q.left) {
        return false;
    }
    if (p.right && !q.right) {
        return false;
    }
    if (!p.right && q.right) {
        return false;
    }
    if (p.left && p.left.val !== q.left.val) {
        return false;
    }
    if (p.right && p.right.val !== q.right.val) {
        return false;
    }
    let leftIsSame = true;
    let rightIsSame = true;
    if (p.left && q.left) {
        leftIsSame = isSameTree(p.left, q.left);
    }
    if (p.right && q.right) {
        rightIsSame = isSameTree(p.right, q.right);
    }
    return leftIsSame && rightIsSame;
};
// @lc code=end

