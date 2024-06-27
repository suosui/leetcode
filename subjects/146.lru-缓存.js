/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 *
 * https://leetcode.cn/problems/lru-cache/description/
 *
 * algorithms
 * Medium (53.29%)
 * Likes:    2469
 * Dislikes: 0
 * Total Accepted:    427.8K
 * Total Submissions: 801.6K
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
    '[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 * 
 * 实现 LRUCache 类：
 * 
 * 
 * 
 * 
 * LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组
 * key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
 * 
 * 
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 * 
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= capacity <= 3000
 * 0 <= key <= 10000
 * 0 <= value <= 10^5
 * 最多调用 2 * 10^5 次 get 和 put
 * 
 * 
 *  方法一：Map+双向链表
 *  思路：利用 Map 存储 key 和 Node 的映射关系，Node 是双向链表的节点，存储 key 和 value。
 *  代码：
 * 
*       var Node = function (key, val) {
*           this.val = val;
*           this.key = key;
*           this.next = null;
*           this.pre = null;
*       }
*
*       var LRUCache = function (capacity) {
*           this.head = this.tail = new Node();
*           this.capacity = capacity;
*           this.hash = new Map();
*           this.cnt = 0;
*       };
*
*       LRUCache.prototype.get = function (key) {
*           let node = this.hash.get(key);
*           if (!node) {
*               return -1;
*           }
*           if (this.head.next === node) return node.val;
*       
*           node.pre.next = node.next;
*           if (node.next) {
*               node.next.pre = node.pre;
*           } else {
*               this.tail = node.pre;
*           }
*       
*           node.pre = this.head;
*           node.next = this.head.next;
*       
*           this.head.next.pre = node;
*           this.head.next = node;
*       
*           return node.val;
*       };
*
*       LRUCache.prototype.put = function (key, value) {
*           let val = this.get(key);
*           if (val && val !== -1) {
*               let node = this.hash.get(key);
*               node.val = value;
*       
*               return;
*           }
*           if (this.cnt + 1 > this.capacity) {
*               this.tail.pre.next = null;
*               this.hash.delete(this.tail.key);
*               this.tail = this.tail.pre;
*           }
*       
*           node = new Node(key, value)
*           this.hash.set(key, node);
*           this.cnt++;
*       
*           if (!this.head.next) {
*               this.head.next = node;
*               node.pre = this.head;
*               this.tail = node;
*               return;
*           }
*       
*           node.next = this.head.next;
*           node.pre = this.head;
*       
*           this.head.next.pre = node;
*           this.head.next = node;
*       };
*/

// @lc code=start
var Node = function (key, val) {
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

