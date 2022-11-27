/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 *
 * https://leetcode.cn/problems/daily-temperatures/description/
 *
 * algorithms
 * Medium (69.55%)
 * Likes:    1348
 * Dislikes: 0
 * Total Accepted:    377.8K
 * Total Submissions: 543.4K
 * Testcase Example:  '[73,74,75,71,69,72,76,73]'
 *
 * 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i
 * 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: temperatures = [73,74,75,71,69,72,76,73]
 * 输出: [1,1,4,2,1,1,0,0]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: temperatures = [30,40,50,60]
 * 输出: [1,1,1,0]
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: temperatures = [30,60,90]
 * 输出: [1,1,0]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= temperatures.length <= 10^5
 * 30 <= temperatures[i] <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const tempObjs = [];
    const ans = [];
    for (let i = 0; i < temperatures.length; i++) {
        const temp = temperatures[i];
        tempObjs.push({
            idx: i,
            val: temp
        });
    }
    const stack = [];
    for (let temp of tempObjs) {
        let top = stack[stack.length - 1];
        if (!top || top.val >= temp.val) {
            stack.push(temp);
            continue;
        }
        top = stack.pop();
        while (top && top.val < temp.val) {
            ans[top.idx] = temp.idx - top.idx;
            top = stack.pop();
        }
        if (top && top.val >= temp.val) {
            stack.push(top);
        }
        stack.push(temp);
    }
    for (let left of stack) {
        ans[left.idx] = 0;
    }
    return ans;
};
// @lc code=end

