/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode.cn/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (56.27%)
 * Likes:    1800
 * Dislikes: 0
 * Total Accepted:    521.1K
 * Total Submissions: 925.7K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left  。请你反转从位置 left 到位置 right 的链表节点，返回
 * 反转后的链表 。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], left = 2, right = 4
 * 输出：[1,4,3,2,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [5], left = 1, right = 1
 * 输出：[5]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目为 n
 * 1 
 * -500 
 * 1 
 * 
 * 
 * 
 * 
 * 进阶： 你可以使用一趟扫描完成反转吗？
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
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head || !head.next) return head;
    let pre = head;
    let curr = head.next;
    let i = 1;
    let pre_start = null;
    let start = null;
    if(i === left){
        start = pre;
    }
    while (curr) {
        if (i === left - 1) {
            pre_start = pre;
            start = curr;
        }
        if (i === right) {
            if (start) start.next = curr;
            if (pre_start) pre_start.next = pre;
        }
        let next = curr.next;
        if (i >= left && i < right) {
            if (i === left) {
                pre.next = null;
            }
            curr.next = pre;
        }
        pre = curr;
        curr = next;
        i++;
    }
    if (left === 1 && i === right) return pre;
    return head;
};

// // 链表节点类
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 创建链表
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

// 测试用例
let result = reverseBetween(head, 1, 2);

// 打印结果
let node = result;
while (node !== null) {
    console.log(node.val);
    node = node.next;
}
// @lc code=end

