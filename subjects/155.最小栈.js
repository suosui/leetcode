/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 *
 * https://leetcode.cn/problems/min-stack/description/
 *
 * algorithms
 * Medium (58.65%)
 * Likes:    1435
 * Dislikes: 0
 * Total Accepted:    432.1K
 * Total Submissions: 736.3K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n' +
  '[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * 
 * 实现 MinStack 类:
 * 
 * 
 * MinStack() 初始化堆栈对象。
 * void push(int val) 将元素val推入堆栈。
 * void pop() 删除堆栈顶部的元素。
 * int top() 获取堆栈顶部的元素。
 * int getMin() 获取堆栈中的最小元素。
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入：
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 * 
 * 输出：
 * [null,null,null,null,-3,null,0,-2]
 * 
 * 解释：
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 <= val <= 2^31 - 1
 * pop、top 和 getMin 操作总是在 非空栈 上调用
 * push, pop, top, and getMin最多被调用 3 * 10^4 次
 * 
 * 
 */

// @lc code=start

var MinStack = function () {
    this.stack = [];
    this.sortedStack = [];
    this.min = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (val <= this.min) {
        this.min = val;
        this.sortedStack.unshift(val);
    } else {
        sortStack(this.sortedStack, val, 'push');
        this.min = this.sortedStack[0];
    }
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const top = this.stack[this.stack.length - 1];
    if (!top && top !== 0) {
        return;
    }
    if (top === this.min) {
        this.sortedStack.shift(top);
        this.min = this.sortedStack[0];
    } else if (top >= this.sortedStack[this.sortedStack.length - 1]) {
        // to nothing
    } else {
        sortStack(this.sortedStack, top, 'pop');
        this.min = this.sortedStack[0];
    }
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.sortedStack[0];
};

var sortStack = function (stack, val, action) {
    let i = stack.length - 1;
    let top = stack[i];
    if (!top && top !== 0) {
        if (action === 'push') {
            stack.push(val);
            return;
        }
    }
    const tmp = [];
    while (top > val) {
        tmp.push(top);
        stack.pop();
        i--;
        top = stack[i];
    }
    if (action === 'push') {
        stack.push(val, ...tmp);
    } else if (action === 'pop') {
        stack.pop();
        stack.push(...tmp);
    }
}


/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

