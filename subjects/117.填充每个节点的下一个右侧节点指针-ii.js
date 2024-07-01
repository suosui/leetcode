/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 *
 * https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/description/
 *
 * algorithms
 * Medium (69.41%)
 * Likes:    848
 * Dislikes: 0
 * Total Accepted:    264.9K
 * Total Submissions: 381K
 * Testcase Example:  '[1,2,3,4,5,null,7]'
 *
 * 给定一个二叉树：
 * 
 * 
 * struct Node {
 * ⁠ int val;
 * ⁠ Node *left;
 * ⁠ Node *right;
 * ⁠ Node *next;
 * }
 * 
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL 。
 * 
 * 初始状态下，所有 next 指针都被设置为 NULL 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,3,4,5,null,7]
 * 输出：[1,#,2,3,#,4,5,7,#]
 * 解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化输出按层序遍历顺序（由 next
 * 指针连接），'#' 表示每层的末尾。
 * 
 * 示例 2：
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
 * 树中的节点数在范围 [0, 6000] 内
 * -100 <= Node.val <= 100
 * 
 * 
 * 进阶：
 * 
 * 
 * 你只能使用常量级额外空间。
 * 使用递归解题也符合要求，本题中递归程序的隐式栈空间不计入额外空间复杂度。
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 * 
 *  方法一：递归
 *  思路：
 *     寻找当前节点的下一个右侧节点，我们可以分为两种情况：
 *      1. 当前节点的左右子节点都存在，那么左子节点的 next 指向右子节点
 *      2. 当前节点的左右子节点有一个不存在，那么我们需要通过parent节点来找到下一个右侧节点
 *  复杂度：
 *     时间复杂度：O(n)
 *     空间复杂度：O(1)
 *  代码：
 *     var connect = function (root) {
 *         if (!root) return null;
 *         _connect(root, null);
 *         return root;
 *     };
 *     
 *     var _connect = function (curr, parent, tag) {
 *         if (!parent) {
 *             curr.next = null;
 *         } else {
 *             if (tag === 'left') {
 *                 if (parent.right) {
 *                     curr.next = parent.right;
 *                 } else if (parent.next) {
 *                     p = parent.next;
 *                     while (p) {
 *                         if (p.left) {
 *                             curr.next = p.left;
 *                             break;
 *                         }
 *                         if (p.right) {
 *                             curr.next = p.right;
 *                             break;
 *                         }
 *                         p = p.next;
 *                     }
 *                 }
 *             } else {
 *                 p = parent.next;
 *                 while (p) {
 *                     if (p.left) {
 *                         curr.next = p.left;
 *                         break;
 *                     }
 *                     if (p.right) {
 *                         curr.next = p.right;
 *                         break;
 *                     }
 *                     p = p.next;
 *                 }
 *             }
 *         }
 *         if (curr.right) _connect(curr.right, curr, '');
 *         if (curr.left) _connect(curr.left, curr, 'left');
 *     }
 *     
 */
var connect = function (root) {
};
// @lc code=end

