/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (71.67%)
 * Likes:    2318
 * Dislikes: 0
 * Total Accepted:    666.3K
 * Total Submissions: 929.2K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder
 * 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 输出: [3,9,20,null,null,15,7]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: preorder = [-1], inorder = [-1]
 * 输出: [-1]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= preorder.length <= 3000
 * inorder.length == preorder.length
 * -3000 <= preorder[i], inorder[i] <= 3000
 * preorder 和 inorder 均 无重复 元素
 * inorder 均出现在 preorder
 * preorder 保证 为二叉树的前序遍历序列
 * inorder 保证 为二叉树的中序遍历序列
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

function TreeNode (val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const root = new TreeNode();
    building(preorder, inorder, root);
    return root;
};

var building = function (preorder, inorder, root) {
    const indexOfMid = inorder.indexOf(preorder[0]);
    const [lefts, , rights] = splitArrayByMid(inorder, indexOfMid);
    const leftsMap = new Set();
    const rightsMap = new Set();
    lefts.map(each => {
        leftsMap.add(each);
    });
    rights.map(each => {
        rightsMap.add(each);
    })
    const [leftsOfPreOrder, rightsOfPreOrder] = splitArray(preorder, leftsMap, rightsMap);
    root.val = preorder[0];
    if (lefts.length) {
        root.left = new TreeNode();
        building(leftsOfPreOrder, lefts, root.left);
    }
    if (rights.length) {
        root.right = new TreeNode();
        building(rightsOfPreOrder, rights, root.right);
    }
};

var splitArrayByMid = (array, mid) => {
    const pre = array.slice(0, mid);
    const midElement = array[mid];
    const after = array.slice(mid + 1);
    return [pre, midElement, after];
}

var splitArray = (array, leftsMap, rightsMap) => {
    const lefts = [];
    const rights = [];
    if (!leftsMap.size && !rightsMap.size) {
        return [[], []]
    }
    for (let each of array) {
        if (leftsMap.has(each)) {
            lefts.push(each);
        }
        if (rightsMap.has(each)) {
            rights.push(each);
        }
    }
    return [lefts, rights];
}

let preorder = [1, 2, 3], inorder = [3, 2, 1];
console.log(buildTree(preorder, inorder));
// @lc code=end

