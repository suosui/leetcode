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
 *      优化：
 *         // 可以将 isFirst 这个变量去掉用一个变量i来判断。
 *         // pre变量可以不用，直接用curr来代替
 *         var reverseList = function (head) {
 *             if (!head || !head.next) return head;
 *             let i = 0;
 *             let tail = head;
 *             let curr = head.next;
 *             let newHead = null;
 *             while (curr) {
 *                 let next = curr.next;
 *                 if (i === 0) {
 *                     tail.next = null;
 *                 }
 *                 curr.next = tail;
 *                 tail = curr;
 *                 if (curr) {
 *                     newHead = curr;
 *                 }
 *                 curr = next;
 *                 i++;
 *             }
 *             return newHead;
 *         };
 *  方法二：递归
 *  思路：
 *     递归的终止条件是当前节点或者下一个节点==null，这时候我们需要修改下一个节点的指针指向当前节点。
 *     如果链表是 1->2->3->4->5，那么此时的cur就是5，而head就是4，我们希望5的next指向4，所以5.next.next = 5。
 *     即head.next.next = head。需要注意的是head.next = null，否则会产生环
 *     最后返回新的头节点newHead
 *     递归的过程是从尾部开始，然后逐渐返回到头部
 *  代码：
 *     var reverseList = function(head) {
 *         if(!head || !head.next){
 *             return head;
 *         }
 *         var newHead = reverseList(head.next);
 *         head.next.next = head;
 *         head.next = null;
 *         return newHead;
 *     };
 *  过程：
 *     leetcode 官网评论区有一很详细的分析过程，这里摘录一下：
 *     以链表1->2->3->4->5举例
 *     public ListNode reverseList(ListNode head) {
 *         if (head == null || head.next == null) {
 *             //直到当前节点的下一个节点为空时返回当前节点
 *             //由于5没有下一个节点了，所以此处返回节点5
 *             return head;
 *         }
 *         //递归传入下一个节点，目的是为了到达最后一个节点
 *         ListNode newHead = reverseList(head.next);
 *               
 *             // 第一轮出栈，head为5，head.next为空，返回5
 *             // 第二轮出栈，head为4，head.next为5，执行head.next.next=head也就是5.next=4，
 *             //           把当前节点的子节点的子节点指向当前节点
 *             //           此时链表为1->2->3->4<->5，由于4与5互相指向，所以此处要断开4.next=null
 *             //           此时链表为1->2->3->4<-5
 *             //           返回节点5
 *             // 第三轮出栈，head为3，head.next为4，执行head.next.next=head也就是4.next=3，
 *             //           此时链表为1->2->3<->4<-5，由于3与4互相指向，所以此处要断开3.next=null
 *             //           此时链表为1->2->3<-4<-5
 *             //           返回节点5
 *             // 第四轮出栈，head为2，head.next为3，执行head.next.next=head也就是3.next=2，
 *             //           此时链表为1->2<->3<-4<-5，由于2与3互相指向，所以此处要断开2.next=null
 *             //           此时链表为1->2<-3<-4<-5
 *             //           返回节点5
 *             // 第五轮出栈，head为1，head.next为2，执行head.next.next=head也就是2.next=1，
 *             //           此时链表为1<->2<-3<-4<-5，由于1与2互相指向，所以此处要断开1.next=null
 *             //           此时链表为1<-2<-3<-4<-5
 *             //           返回节点5
 *             // 出栈完成，最终头节点5->4->3->2->1
 *          
 *         head.next.next = head;
 *         head.next = null;
 *         return newHead;
 *     }
 *  复杂度：
 *     时间复杂度：O(n) 遍历一次链表
 *     空间复杂度：O(n) 递归调用的栈空间
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
var reverseList = function(head) {
};
// @lc code=end

