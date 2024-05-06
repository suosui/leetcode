/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 *
 * https://leetcode.cn/problems/remove-element/description/
 *
 * algorithms
 * Easy (59.42%)
 * Likes:    1490
 * Dislikes: 0
 * Total Accepted:    835.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '[3,2,2,3]\n3'
 *
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 
 * 说明:
 * 
 * 为什么返回数值是整数，但输出的答案是数组呢?
 * 
 * 请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 * 
 * 你可以想象内部操作如下:
 * 
 * 
 * // nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
 * int len = removeElement(nums, val);
 * 
 * // 在函数里修改输入数组对于调用者是可见的。
 * // 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [3,2,2,3], val = 3
 * 输出：2, nums = [2,2]
 * 解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而
 * nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1,2,2,3,0,4,2], val = 2
 * 输出：5, nums = [0,1,4,0,3]
 * 解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0,
 * 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * 0 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 方法: 双指针
 * 过程: 
 *     a. 设置l(left), r(right)指针，从两边往中间遍历.
 *     b. 如果左边或右边跟val相同，则交换两边元素（前提是另一边的元素跟val不相同）
 *     c. 直到left === right
 * 复杂度: 
 *     空间复杂度: O(1)
 *     时间复杂度: O(n)
 * 代码:
 *     var removeElement = function (nums, val) {
 *         let r = 0;
 *         let l = nums.length - 1;
 *         // 主逻辑
 *         while (r < l) {
 *             if (nums[r] === val) {
 *                 if (nums[l] === val) {
 *                     l--;
 *                 } else {
 *                     [nums[r], nums[l]] = [nums[l], nums[r]];
 *                     r++;
 *                     l--;
 *                 }
 *             } else {
 *                 if (nums[l] === val) {
 *                     l--;
 *                     r++;
 *                 } else {
 *                     r++;
 *                 }
 *             }
 *         }
 *         // 边界
 *         if (r === 0 && nums[r] === val) {
 *             return 0;
 *         }
 *         if (r === l) {
 *             if (nums[r] === val) return r;
 *         } else if (r > l) {
 *             return r;
 *         }
 *         return r + 1;
 *     };
 **/
var removeElement = function (nums, val) {
};
// @lc code=end

