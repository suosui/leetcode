/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode.cn/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (68.02%)
 * Likes:    2343
 * Dislikes: 0
 * Total Accepted:    615.9K
 * Total Submissions: 905K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[2,1,4,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 3
 * 输出：[3,2,1,4,5]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中的节点数目为 n
 * 1 <= k <= n <= 5000
 * 0 <= Node.val <= 1000
 * 
 * 
 * 
 * 
 * 进阶：你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？
 * 
 * 
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 
 *  方法一：迭代
 *  思路：
 *     写出本题的前提是要先写出 206. 反转链表 和 92. 反转链表 II。
 *     确定要反转的链表的起始节点和结束节点，然后调用 92. 反转链表 II 的函数进行反转。
 *  过程：
 *     1. 先计算链表的长度 len
 *     2. 初始化 cnt = 1，start = 1，i = 0
 *     3. 当 i < len 时，执行以下操作：
 *        3.1 如果 cnt < k，cnt++，i++，继续下一次循环
 *        3.2 如果 cnt === k，调用 reverseBetween 函数反转链表的 start 和 start + k - 1 之间的链表
 *  复杂度分析：
 *     时间复杂度：O(n)，其中 n 是链表的长度
 *     空间复杂度：O(1)
 *  代码：
 *      var reverseKGroup = function (head, k) {
 *          let len = 0;
 *          let curr = head;
 *          while (curr) {
 *              len++;
 *              curr = curr.next;
 *          }
 *      
 *          let cnt = 1;
 *          let start = 1;
 *          let i = 0;
 *          while (i < len) {
 *              if (cnt < k) {
 *                  cnt++;
 *                  i++;
 *                  continue;
 *              }
 *              head = reverseBetween(head, start, start + k - 1);
 *              start = start + k;
 *              cnt = 1;
 *              i++;
 *          }
 *          return head;
 *      };
 *      
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
 *  测试用例：
 *      // 创建链表
 *      function ListNode (val) {
 *         this.val = val;
 *         this.next = null;
 *      }
 *      let head = new ListNode(1);
 *      head.next = new ListNode(2);
 *      head.next.next = new ListNode(3);
 *      head.next.next.next = new ListNode(4);
 *      // head.next.next.next.next = new ListNode(5);
 *      
 *      // 测试用例
 *      let result = reverseKGroup(head, 2);
 *      
 *      // 打印结果
 *      let node = result;
 *      while (node !== null) {
 *          console.log(node.val);
 *          node = node.next;
 *      }
 */
var reverseKGroup = function (head, k) {
};
// @lc code=end

