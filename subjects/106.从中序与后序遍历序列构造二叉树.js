/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (72.24%)
 * Likes:    1233
 * Dislikes: 0
 * Total Accepted:    392.9K
 * Total Submissions: 543.8K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder
 * 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
 * 输出：[3,9,20,null,null,15,7]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入：inorder = [-1], postorder = [-1]
 * 输出：[-1]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= inorder.length <= 3000
 * postorder.length == inorder.length
 * -3000 <= inorder[i], postorder[i] <= 3000
 * inorder 和 postorder 都由 不同 的值组成
 * postorder 中每一个值都在 inorder 中
 * inorder 保证是树的中序遍历
 * postorder 保证是树的后序遍历
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 * 
 *  方法一：递归
 *  思路：
 *     本题和105题思路一样，只是后序遍历的最后一个元素是根节点，所以我们可以先找到根节点，然后根据根节点在中序遍历中的位置，将中序遍历分为左右两部分，然后再根据左右两部分的长度，将后序遍历分为左右两部分，然后递归的构建左右子树。
 *  步骤：
 *     1. 构建一个后序遍历的map，方便我们根据值找到对应的索引
 *     2. 找到根节点在中序遍历中的位置，然后将中序遍历分为左右两部分 lefts 和 rights 
 *     3. 根据左右两部分的长度，将后序遍历分为左右两部分 leftsOfPreOrder 和 rightsOfPreOrder
 *     4. 递归的构建左右子树
 *     5. 返回根节点
 *  复杂度：
 *     时间复杂度：O(n) n为节点数
 *     空间复杂度：O(n) n为节点数
 *  代码：
 *     var buildTree = function (inorder, postorder) {
 *         const root = new TreeNode();
 *         const postOrderMap = {};
 *         postorder.forEach((value, index) => {
 *             postOrderMap[value] = index;
 *         });
 *         building(postorder, inorder, postOrderMap, root);
 *         return root;
 *     };
 *     
 *     var building = function (postorder, inorder, postOrderMap, root) {
 *         const indexOfMid = inorder.indexOf(postorder[postorder.length - 1]);
 *         const [lefts, , rights] = splitArrayByMid(inorder, indexOfMid);
 *         const [leftsOfPreOrder, rightsOfPreOrder] = splitArray(postOrderMap, [...lefts], [...rights]);
 *         root.val = postorder[postorder.length - 1];
 *         if (lefts.length) {
 *             root.left = new TreeNode();
 *             building(leftsOfPreOrder, lefts, postOrderMap, root.left);
 *         }
 *         if (rights.length) {
 *             root.right = new TreeNode();
 *             building(rightsOfPreOrder, rights, postOrderMap, root.right);
 *         }
 *     };
 *     
 *     var splitArrayByMid = (array, mid) => {
 *         const pre = array.slice(0, mid);
 *         const midElement = array[mid];
 *         const after = array.slice(mid + 1);
 *         return [pre, midElement, after];
 *     }
 *     
 *     var splitArray = (postOrderMap, lefts, rights) => {
 *         if (!lefts.length && !rights.length) {
 *             return [[], []]
 *         }
 *         lefts.sort((a, b) => {
 *             return postOrderMap[a] - postOrderMap[b];
 *         });
 *         rights.sort((a, b) => {
 *             return postOrderMap[a] - postOrderMap[b];
 *         });
 *         return [lefts, rights];
 *     }
 */
var buildTree = function (inorder, postorder) {
};
// @lc code=end

