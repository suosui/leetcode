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
 */

// @lc code=start
var Node = function (val, key) {
    this.val = val;
    this.key = key;
}

Node.prototype.next = function (node) {
    this.next = node;
}

Node.prototype.pre = function (node) {
    this.pre = node;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.head = this.tail = null;
    this.capacity = capacity;
    this.hash = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const n = this.hash.get(key);
    if (!n) return -1;
    if (this.head.key === key) {
        return this.head.val;
    }
    if (this.capacity === 1) {
        return n.val;
    }
    const pre = n.pre || null;
    const next = n.next || null;
    if (pre) pre.next = next;
    if (next) next.pre = pre;
    n.next = this.head;
    this.head.pre = n;
    n.pre = null;
    this.head = n;
    if (this.tail && key === this.tail.key) {
        this.tail = pre;
    }
    return n.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (!this.head) {
        const n = new Node(value, key);
        this.head = this.tail = n;
        this.hash.set(key, n);
        return;
    }
    if (this.hash.has(key)) {
        const n = this.hash.get(key);
        n.val = value;
        if (this.capacity === 1) {
            return;
        }
        if (this.head.key !== key) {
            const pre = n.pre || null;
            const next = n.next || null;
            if (pre) pre.next = next;
            if (next) next.pre = pre;
            n.next = this.head;
            this.head.pre = n;
            n.pre = null;
            this.head = n;
            if (this.tail && key === this.tail.key) {
                this.tail = pre;
            }
        }
        return;
    }
    const n = new Node(value, key);
    if (this.hash.size === this.capacity) {
        if (this.capacity === 1) {
            this.head = this.tail = n;
            this.hash.set(key, n);
            return;
        }
        this.hash.delete(this.tail.key);
        this.tail = this.tail.pre;
        if (this.tail) this.tail.next = null;
    }
    if (this.capacity === 1) {
        this.head = this.tail = n;
        this.hash.set(key, n);
        return;
    }
    n.next = this.head;
    this.head.pre = n;
    this.head = n;
    this.hash.set(key, n);
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(1)
console.log(obj.get(6))
console.log(obj.get(8));
obj.put(12, 1);
console.log(obj.get(2));
obj.put(15, 11);
obj.put(5, 2);
obj.put(1, 15);
obj.put(4, 2);
console.log(obj.get(5));
obj.put(15, 15);
// @lc code=end

