/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 *
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (48.30%)
 * Likes:    2880
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 3M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中结点的数目为 sz
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 * 
 * 
 * 
 * 
 * 进阶：你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 * 
 *  方法一：遍历两次
 *  思路：
 *       没啥好说的，先遍历一次链表，得到链表的长度，然后再遍历一次，找到倒数第 n 个节点的前一个节点，然后删除即可
 *  代码：
 *      var removeNthFromEnd = function (head, n) {
 *          let len = 0;
 *          let curr = head;
 *          while (curr) {
 *              len++;
 *              curr = curr.next;
 *          }
 *          let i = 0;
 *          curr = head;
 *          let pre = null;
 *          if (n === len) {
 *              head = head.next;
 *              return head;
 *          }
 *          while (i < len - n) {
 *              pre = curr;
 *              curr = curr.next;
 *              i++;
 *          }
 *          if (pre) {
 *              pre.next = curr.next;
 *          }
 *          return head;
 *      };
 */
var removeNthFromEnd = function (head, n) {
    let slow = head;
    let fast = head;
    let diff = 0;
    let pre = null;
    while (fast) {
        if (diff >= n) {
            slow = slow.next;
        }
        if (diff === n) {
            pre = fast;
        }
        diff++;
        fast = fast.next;
    }
    if(diff === n) return null;
    if (pre) pre.next = slow.next;
    return head;
};

// 创建链表
function ListNode (val) {
    this.val = val;
    this.next = null;
}
let head = new ListNode(1);
head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

// 测试用例
let result = removeNthFromEnd(head, 1);

// 打印结果
let node = result;
while (node !== null) {
    console.log(node.val);
    node = node.next;
}
// @lc code=end

