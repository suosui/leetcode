/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 *
 * https://leetcode.cn/problems/rotate-list/description/
 *
 * algorithms
 * Medium (41.34%)
 * Likes:    1059
 * Dislikes: 0
 * Total Accepted:    389.5K
 * Total Submissions: 941.8K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [0,1,2], k = 4
 * 输出：[2,0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 500] 内
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10^9
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
 *  方法一：快慢指针
 *  思路： 利用快慢指针，找到链表的尾节点，然后根据k值，找到新的链表头节点，然后断开链表
 *  复杂度：
 *       时间复杂度：O(n)
 *       空间复杂度：O(1)
 *  代码：
 *      var rotateRight = function(head, k) {
 *          if (!head || !head.next || k === 0) return head;
 *          
 *          // Initialize pointers and find the length of the list
 *          let fast = head, slow = head;
 *          let length = 1; // Start with 1 to account for the head
 *          while (fast.next) {
 *              fast = fast.next;
 *              length++;
 *          }
 *          
 *          // Adjust k to avoid unnecessary cycles
 *          k = k % length;
 *          if (k === 0) return head; // No rotation needed
 *          
 *          // Reset fast to head and move it k steps ahead
 *          fast = head;
 *          for (let i = 0; i < k; i++) {
 *              fast = fast.next;
 *          }
 *          
 *          // Move both pointers until fast reaches the end
 *          while (fast.next) {
 *              slow = slow.next;
 *              fast = fast.next;
 *          }
 *          
 *          // Rearrange pointers to rotate the list
 *          fast.next = head; // Close the loop
 *          head = slow.next; // New head is slow.next
 *          slow.next = null; // Break the loop
 *          
 *          return head;
 *      };
 *  方法二：环形链表
 *  思路：将链表首尾相连，然后根据k值，找到新的链表头节点，然后断开链表
 *       问题：怎么找到新的链表头节点？
 *       答案：找到链表的尾节点，然后根据k值，找到新的链表头节点，新的链表头节点为len - k % len
 *  复杂度：
 *       时间复杂度：O(n)
 *       空间复杂度：O(1)
 *  代码：
 *      var rotateRight = function (head, k) {
 *         if (!head || !head.next || k === 0) return head;
 *         let tail = null;
 *         let curr = head;
 *         let len = 0;
 *         while (curr) {
 *             len++;
 *             if (!curr.next) {
 *                 tail = curr;
 *                 tail.next = head;
 *                 break;
 *             }
 *             curr = curr.next;
 *         }
 *         let i = len - k % len;
 *         if (i === len) {
 *             tail.next = null;
 *             return head;
 *         }
 *         while (i > 0) {
 *             tail = tail.next;
 *             i--;
 *         }
 *         let newHead = tail.next;
 *         tail.next = null;
 *         return newHead;
 *      };
 *  
 *  方法三：hash表
 *  思路：遍历链表，将链表的每个节点存入hash表，然后根据k值，将hash表中的节点重新排序，最后重新组装链表
 *  复杂度：
 *     时间复杂度：O(n)
 *     空间复杂度：O(n)
 *  代码：
 *     var rotateRight = function (head, k) {
 *         if (!head || !head.next) return head;
 *         let hash = new Map();
 *         let curr = head;
 *         let i = 1;
 *         while (curr) {
 *             hash.set(i, curr);
 *             curr = curr.next;
 *             i++;
 *         }
 *         let len = i - 1;
 *         i--;
 *         while (i >= 1) {
 *             let newKey;
 *             if (i + k > len) {
 *                 newKey = (i + k - 1) % len + 1;
 *             } else {
 *                 newKey = i + k;
 *             }
 *             hash.set(newKey + '_', hash.get(i));
 *             i--;
 *         }
 *         i++;
 *         let newHead = null;
 *         while (i <= len) {
 *             if (i === 1) {
 *                 newHead = hash.get(i + '_');
 *                 newHead.next = hash.get(i + 1 + '_');
 *             } else if (i === len) {
 *                 hash.get(i + '_').next = null;
 *             } else {
 *                 hash.get(i + '_').next = hash.get(i + 1 + '_')
 *             }
 *             i++;
 *         }
 *         return newHead;
 *     };
 *  测试用例：
 *     function ListNode (val) {
 *         this.val = val;
 *         this.next = null;
 *     }
 *     let head = new ListNode(0);
 *     let cur = head;
 *     [1, 2].forEach(item => {
 *         let node = new ListNode(item);
 *         cur.next = node;
 *         cur = cur.next;
 *     });
 *     console.log(head)
 *     rotateRight(head, 4);
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;
    
    // Initialize pointers and find the length of the list
    let fast = head, slow = head;
    let length = 1; // Start with 1 to account for the head
    while (fast.next) {
        fast = fast.next;
        length++;
    }
    
    // Adjust k to avoid unnecessary cycles
    k = k % length;
    if (k === 0) return head; // No rotation needed
    
    // Reset fast to head and move it k steps ahead
    fast = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }
    
    // Move both pointers until fast reaches the end
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // Rearrange pointers to rotate the list
    fast.next = head; // Close the loop
    head = slow.next; // New head is slow.next
    slow.next = null; // Break the loop
    
    return head;
};

function ListNode (val) {
    this.val = val;
    this.next = null;
}
let head = new ListNode(1);
let cur = head;
[2, 3, 4, 5].forEach(item => {
    let node = new ListNode(item);
    cur.next = node;
    cur = cur.next;
});
console.log(head)
rotateRight(head, 2);
// @lc code=end

