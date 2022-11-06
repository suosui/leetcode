/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 *
 * https://leetcode.cn/problems/add-two-numbers-ii/description/
 *
 * algorithms
 * Medium (60.08%)
 * Likes:    563
 * Dislikes: 0
 * Total Accepted:    113.5K
 * Total Submissions: 188.8K
 * Testcase Example:  '[7,2,4,3]\n[5,6,4]'
 *
 * 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
 * 
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 * 
 * 
 * 
 * 示例1：
 * 
 * 
 * 
 * 
 * 输入：l1 = [7,2,4,3], l2 = [5,6,4]
 * 输出：[7,8,0,7]
 * 
 * 
 * 示例2：
 * 
 * 
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[8,0,7]
 * 
 * 
 * 示例3：
 * 
 * 
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表的长度范围为 [1, 100]
 * 0 <= node.val <= 9
 * 输入数据保证链表代表的数字无前导 0
 * 
 * 
 * 
 * 
 * 进阶：如果输入链表不能翻转该如何解决？
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
    l1 = reverseList(l1);
    l2 = reverseList(l2);
    let l3 = add(l1, l2);
    return reverseList(l3)
};

var add = function (l1, l2) {
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

var reverseList = function (head) {
    if (!head || !head.next) return head;
    let pre = head;
    let cur = head.next;
    while (cur.next) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    cur.next = pre;
    head.next = null;
    return cur;
};
// @lc code=end

