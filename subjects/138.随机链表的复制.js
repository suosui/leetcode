/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 随机链表的复制
 *
 * https://leetcode.cn/problems/copy-list-with-random-pointer/description/
 *
 * algorithms
 * Medium (67.02%)
 * Likes:    1396
 * Dislikes: 0
 * Total Accepted:    296.5K
 * Total Submissions: 442.1K
 * Testcase Example:  '[[7,null],[13,0],[11,4],[10,2],[1,0]]'
 *
 * 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。
 * 
 * 构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random
 * 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。
 * 
 * 例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random
 * --> y 。
 * 
 * 返回复制链表的头节点。
 * 
 * 用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：
 * 
 * 
 * val：一个表示 Node.val 的整数。
 * random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
 * 
 * 
 * 你的代码 只 接受原链表的头节点 head 作为传入参数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：head = [[1,1],[2,1]]
 * 输出：[[1,1],[2,1]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 
 * 
 * 输入：head = [[3,null],[3,0],[3,null]]
 * 输出：[[3,null],[3,0],[3,null]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 1000
 * -10^4 <= Node.val <= 10^4
 * Node.random 为 null 或指向链表中的节点。
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 * 
 *  方法一：哈希表
 *  思想：利用Map的Key类型可以是对象的特性，将原链表的节点作为Key，新链表的节点作为Value，建立一个哈希表。
 *       遍历两次链表，第一次遍历创建新节点，第二次遍历设置新节点的next和random指针。
 *  过程：
 *      1. 如果head为空，返回null
 *      2. 初始化curr为head，newHead为null，dict为Map
 *      3. 第一次遍历链表，创建新节点，将原节点和新节点存入dict
 *      4. 第二次遍历链表，设置新节点的next和random指针
 *      5. 返回新链表的头节点
 *  复杂度分析：
 *      时间复杂度：O(n)，其中 n 是链表中节点的数目。
 *      空间复杂度：O(n)。如果使用哈希表，空间复杂度是 O(n)。如果不使用哈希表，空间复杂度是 O(1)。
 *  代码：
 *      var copyRandomList = function (head) {
 *          if (!head) return null;
 *          let curr = head;
 *          let newHead = null;
 *          let dict = new Map();
 *          while (curr) {
 *              let newNode = new _Node(curr.val);
 *              if (!newHead) {
 *                  newHead = newNode;
 *              }
 *              dict.set(curr, newNode);
 *              curr = curr.next;
 *          }
 *          curr = head;
 *          while (curr) {
 *              dict.get(curr).next = dict.get(curr.next) || null;
 *              dict.get(curr).random = curr.random && dict.get(curr.random) || null
 *              curr = curr.next;
 *          }
 *          return newHead;
 *      };
 *     
 *  测试用例：
 *      // Define the Node class
 *      function _Node (val, next, random) {
 *          this.val = val;
 *          this.next = next;
 *          this.random = random;
 *      }
 *      
 *      // Define the input array
 *      let arr = [[1, 1], [2, 1]]
 *      
 *      // Create an array of nodes
 *      let nodes = arr.map(([val]) => new _Node(val));
 *      
 *      // Set the next and random pointers
 *      for (let i = 0; i < arr.length; i++) {
 *          if (i < arr.length - 1) {
 *              nodes[i].next = nodes[i + 1];
 *          }
 *          let randomIndex = arr[i][1];
 *          if (randomIndex !== null) {
 *              nodes[i].random = nodes[randomIndex];
 *          }
 *      }
 *      
 *      // The head of the list is the first node
 *      let head = nodes[0];
 *      
 *      // Call the function with the test case
 *      let result = copyRandomList(head);
 *      console.log(result);
 */
var copyRandomList = function (head) {
};
// @lc code=end

