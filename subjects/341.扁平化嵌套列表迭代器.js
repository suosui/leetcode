/*
 * @lc app=leetcode.cn id=341 lang=javascript
 *
 * [341] 扁平化嵌套列表迭代器
 *
 * https://leetcode.cn/problems/flatten-nested-list-iterator/description/
 *
 * algorithms
 * Medium (72.84%)
 * Likes:    470
 * Dislikes: 0
 * Total Accepted:    68.3K
 * Total Submissions: 93.9K
 * Testcase Example:  '[[1,1],2,[1,1]]'
 *
 * 给你一个嵌套的整数列表 nestedList
 * 。每个元素要么是一个整数，要么是一个列表；该列表的元素也可能是整数或者是其他列表。请你实现一个迭代器将其扁平化，使之能够遍历这个列表中的所有整数。
 * 
 * 实现扁平迭代器类 NestedIterator ：
 * 
 * 
 * NestedIterator(List<NestedInteger> nestedList) 用嵌套列表 nestedList 初始化迭代器。
 * int next() 返回嵌套列表的下一个整数。
 * boolean hasNext() 如果仍然存在待迭代的整数，返回 true ；否则，返回 false 。
 * 
 * 
 * 你的代码将会用下述伪代码检测：
 * 
 * 
 * initialize iterator with nestedList
 * res = []
 * while iterator.hasNext()
 * ⁠   append iterator.next() to the end of res
 * return res
 * 
 * 如果 res 与预期的扁平化列表匹配，那么你的代码将会被判为正确。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nestedList = [[1,1],2,[1,1]]
 * 输出：[1,1,2,1,1]
 * 解释：通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,1,2,1,1]。
 * 
 * 示例 2：
 * 
 * 
 * 输入：nestedList = [1,[4,[6]]]
 * 输出：[1,4,6]
 * 解释：通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,4,6]。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nestedList.length <= 500
 * 嵌套列表中的整数值在范围 [-10^6, 10^6] 内
 * 
 * 
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.list = []
    const preTraverse = (nestedList) => {
        for (let val of nestedList) {
            if (val.isInteger()) {
                this.list.push(val.getInteger())
            } else {
                preTraverse(val.getList())
            }
        }
    }
    preTraverse(nestedList)
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    return !!this.list.length
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    return this.list.shift()
};
