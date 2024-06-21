/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (54.39%)
 * Likes:    1298
 * Dislikes: 0
 * Total Accepted:    448K
 * Total Submissions: 823.5K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,3,4,4,5]
 * 输出：[1,2,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,1,1,2,3]
 * 输出：[2,3]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目在范围 [0, 300] 内
 * -100 <= Node.val <= 100
 * 题目数据保证链表已经按升序 排列
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
 *  方法一：双指针
 *  思路：
 *     没啥好说的，就是双指针，一个指向当前节点，一个指向下一个节点，
 *     如果当前节点和下一个节点的值相等，就一直往后遍历，直到找到不相等的节点，
 *     然后将前一个节点的 next 指向这个不相等的节点。
 *     重复上述操作，直到遍历结束。
 *  复杂度：
 *     时间复杂度：O(n)，其中 n 是链表的长度。
 *     空间复杂度：O(1)。
 *  代码：
 *     var deleteDuplicates = function (head) {
 *         if (!head) return null;
 *         if (!head.next) return head;
 *         let left = head;
 *         let pre = null;
 *         let right = head.next;
 *         let isSame = false;
 *         while (right) {
 *             if (left.val === right.val) {
 *                 isSame = true;
 *                 right = right.next;
 *             } else {
 *                 if (isSame) {
 *                     if (pre) {
 *                         pre.next = right;
 *                     } else {
 *                         head = right;
 *                     }
 *                 } else {
 *                     pre = left;
 *                 }
 *                 isSame = false;
 *                 left = right;
 *                 right = right.next;
 *             }
 *         }
 *         if (isSame) {
 *             if (pre) {
 *                 pre.next = null;
 *             } else {
 *                 head = null;
 *             }
 *         }
 *         return head;
 *     };
 *  测试用例：
*      function ListNode (val) {
*          this.val = val;
*          this.next = null;
*      }
*      let head = new ListNode(1);
*      head.next = new ListNode(1);
*      head.next.next = new ListNode(1);
*      head.next.next.next = new ListNode(2);
*      head.next.next.next.next = new ListNode(3);
*      
*      // 测试用例
*      let result = deleteDuplicates(head);
 */
var deleteDuplicates = function (head) {
};
// @lc code=end

