/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 *
 * https://leetcode.cn/problems/next-greater-element-ii/description/
 *
 * algorithms
 * Medium (66.06%)
 * Likes:    718
 * Dislikes: 0
 * Total Accepted:    169.1K
 * Total Submissions: 255.7K
 * Testcase Example:  '[1,2,1]'
 *
 * 给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的
 * 下一个更大元素 。
 * 
 * 数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1
 * 。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [1,2,1]
 * 输出: [2,-1,2]
 * 解释: 第一个 1 的下一个更大的数是 2；
 * 数字 2 找不到下一个更大的数； 
 * 第二个 1 的下一个最大的数需要循环搜索，结果也是 2。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums = [1,2,3,4,3]
 * 输出: [2,3,4,-1,4]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let stack = [], map = new Map(), ans = [], loop = 0;

    for (let i = 0, len = nums.length; i < len;) {
        let curr = nums[i];
        while (stack.length > 0 && curr > nums[stack[stack.length - 1]]) {
            let last = stack.pop();
            if (!map.has(last)) {
                map.set(last, curr);
            }
        }
        stack.push(i);

        if (i === len - 1 && loop < 1) {
            i = 0;
            loop++;
        }
        else {
            i++;
        }
    }

    while (stack.length > 0) {
        let last = stack.pop();
        if (!map.has(last)) {
            map.set(last, -1);
        }
    }

    for (let i = 0, len = nums.length; i < len; i++) {
        ans.push(map.get(i));
    }

    return ans;
};
// @lc code=end

