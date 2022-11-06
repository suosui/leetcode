/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode.cn/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (42.11%)
 * Likes:    8737
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 3.6M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 每个链表中的节点数在范围 [1, 100] 内
 * 0 
 * 题目数据保证列表表示的数字不含前导零
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let ans = new ListNode();
    let cur = ans;
    let carry = 0;
    while (l1 && l2) {
        let sum = l1.val + l2.val;
        l1 = l1.next;
        l2 = l2.next;
        if (carry) {
            sum++;
            carry = 0;
        }
        if (sum > 9) {
            carry = 1;
            sum -= 10;
        }
        cur.val = sum;
        if (l1 || l2) {
            let node = new ListNode();
            cur.next = node;
            cur = node;
        }
    }
    while (l1) {
        let sum = l1.val;
        if (carry) {
            sum += 1;
            carry = 0;
        }
        if (sum > 9) {
            carry = 1;
            sum -= 10;
        }
        cur.val = sum;
        l1 = l1.next;
        if (l1) {
            cur.next = l1;
            cur = l1;
        }
    }
    while (l2) {
        let sum = l2.val;
        if (carry) {
            sum += 1;
            carry = 0;
        }
        if (sum > 9) {
            carry = 1;
            sum -= 10;
        }
        cur.val = sum;
        l2 = l2.next;
        if (l2) {
            cur.next = l2;
            cur = l2;
        }
    }
    if (carry) {
        let node = new ListNode(1);
        cur.next = node;
    }
    return ans;
};
// @lc code=end

