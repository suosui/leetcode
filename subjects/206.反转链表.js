/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode.cn/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (73.30%)
 * Likes:    2836
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 1.7M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,2]
 * 输出：[2,1]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目范围是 [0, 5000]
 * -5000 
 * 
 * 
 * 
 * 
 * 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
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
 * @return {ListNode}
 * 
 *  方法一： 头插法
 *  思路：
 *     就是从头到尾遍历原链表，去出curr,pre两个指针，然后将curr指向pre，然后pre和curr都往后移动一位.
 *     对于头结点，需要将头结点的next指向null，否则会形成环
 *  复杂度：
 *     时间复杂度：O(n) 遍历一次链表
 *     空间复杂度：O(1) 使用常数个变量
 *  代码：
 *      var reverseList = function (head) {
 *          if (!head || !head.next) return head;
 *          let pre = head;
 *          let curr = head.next;
 *          let isFirst = true;
 *          while (curr) {
 *              if (isFirst) {
 *                  pre.next = null;
 *                  isFirst = false;
 *              }
 *              let next = curr.next;
 *              curr.next = pre;
 *              pre = curr;
 *              curr = next;
 *          }
 *          return pre;
 *      };
 *  测试用例：
 *      function ListNode (val) {
 *          this.val = val;
 *          this.next = null;
 *       }
 *      let head = new ListNode(1);
 *      let cur = head;
 *      [2, 3, 4, 5].forEach(item => {
 *          let node = new ListNode(item);
 *          cur.next = node;
 *          cur = cur.next;
 *      });
 *      console.log(head)
 *      reverseList(head);
 */
var reverseList = function (head) {
};
// @lc code=end

