/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 *
 * https://leetcode.cn/problems/partition-list/description/
 *
 * algorithms
 * Medium (64.71%)
 * Likes:    839
 * Dislikes: 0
 * Total Accepted:    288.2K
 * Total Submissions: 444.9K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,4,3,2,5,2], x = 3
 * 输出：[1,2,2,4,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [2,1], x = 2
 * 输出：[1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 200] 内
 * -100 
 * -200 
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
 * @param {number} x
 * @return {ListNode}
 * 
 *  方法一：双head
 *  思路: 创建两个链表，一个存储小于x的节点，一个存储大于等于x的节点，最后将两个链表拼接起来
 *  复杂度：
 *      时间复杂度：O(n)
 *      空间复杂度：O(1)
 *  代码：
 *      var partition = function (head, x) {
 *          let headSmaller = new ListNode();
 *          let headBigger = new ListNode();
 *          let curr = head;
 *          let currSmaller = headSmaller;
 *          let currBigger = headBigger;
 *          while (curr) {
 *              if (curr.val < x) {
 *                  currSmaller.next = curr;
 *                  currSmaller = currSmaller.next;
 *              } else {
 *                  currBigger.next = curr;
 *                  currBigger = currBigger.next;
 *              }
 *              curr = curr.next;
 *          }
 *      
 *          currBigger.next = null;
 *          currSmaller.next = headBigger.next;
 *          return headSmaller.next;
 *      };
 *  测试用例：
 *      function ListNode (val) {
 *          this.val = val;
 *          this.next = null;
 *      }
 *      let head = new ListNode(1);
 *      let cur = head;
 *      [4, 3, 2, 5, 2].forEach(item => {
 *          let node = new ListNode(item);
 *          cur.next = node;
 *          cur = cur.next;
 *      });
 *      console.log(head)
 *      partition(head, 3);
 */
var partition = function (head, x) {
};
// @lc code=end

