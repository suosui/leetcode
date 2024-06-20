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
 * 
 *  方法一：迭代
 *  思路：
 *      根据 206.反转列表 的思路，找到 left 和 right 的位置，然后反转 left 和 right 之间的链表
 *      区别是，需要记录 left 的前一个节点 pre_start 和 right 的后一个节点 start
 *  过程：
 *      1. 找到 left 和 right 的位置
 *      2. 反转 left 和 right 之间的链表
 *      3. 连接 pre_start 和 right，连接 left 和 start
 *      4. 返回 head
 *  复杂度：
 *      时间复杂度：O(n)，n 为链表长度
 *      空间复杂度：O(1)
 *  注意：
 *     1. left === 1 时，需要返回 pre
 *  
 *  代码：
 *      var reverseBetween = function (head, left, right) {
 *          if (!head || !head.next) return head; // 链表为空或只有一个节点
 *      
 *          let pre = head;
 *          let curr = head.next;
 *          let i = 1;
 *          let pre_start = null;
 *          let start = null;
 *          
 *          if (i === left) {
 *              start = pre;
 *          }
 *          while (curr) {
 *              if (i === left - 1) { // 找到 left 的前一个节点
 *                  pre_start = pre;  // 记录 left 的前一个节点
 *                  start = curr;     // 记录 left 的节点
 *              }
 *              if (i === right) {
 *                  if (start) start.next = curr; // 连接 left 和 right
 *                  if (pre_start) pre_start.next = pre; // 连接 pre_start 和 right
 *                  break;
 *              }
 *              let next = curr.next;
 *              if (i >= left && i < right) { // 反转 left 和 right 之间的链表
 *                  if (i === left) {
 *                      pre.next = null;
 *                  }
 *                  curr.next = pre;
 *              }
 *              pre = curr;
 *              curr = next;
 *              i++;
 *          }
 *          if (i === right) {
 *              if (start) start.next = curr;
 *              if (pre_start) pre_start.next = pre;
 *          }
 *          if (left === 1) return pre; // left === 1 时，返回 pre
 *          return head;
 *      };
 *  
 *  测试用例：
 *      // 链表节点类
 *      class ListNode {
 *          constructor(val, next = null) {
 *              this.val = val;
 *              this.next = next;
 *          }
 *      }
 *      
 *      // 创建链表
 *      let head = new ListNode(1);
 *      head.next = new ListNode(2);
 *      head.next.next = new ListNode(3);
 *      head.next.next.next = new ListNode(4);
 *      head.next.next.next.next = new ListNode(5);
 *      
 *      // 测试用例
 *      let result = reverseBetween(head, 2, 4);
 *      
 *      // 打印结果
 *      let node = result;
 *      while (node !== null) {
 *          console.log(node.val);
 *          node = node.next;
 *      }
 */
var reverseBetween = function (head, left, right) {
};
// @lc code=end

