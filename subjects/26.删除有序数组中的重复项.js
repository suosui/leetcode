/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 *  方法一: 双指针
 *  过程: 
 *     a.设置left,right指针，数组下标0至left始终是不重复的元素。
 *     b.如果 nums[left] === nums[right] 说明有重复的元素，让right++直到nums[left] !== nums[right]。因为是递增关系，所以这时的nums[right]是下一个不重复的元素。
 *     c. nums[left+1] = nums[right] && left++。
 *     d. 直到left<nums.length 或 right<nums.length。
 *  复杂度:
 *     时间复杂度: O(n)。
 *     空间复杂度: O(1)。
 *  代码:
 *      var removeDuplicates = function (nums) {
 *        let left = 0;
 *        let right = left + 1;
 *        while (left < nums.length && right < nums.length) {
 *            if (nums[left] === nums[right]) {
 *                while (nums[left] === nums[right]) {
 *                    right++;
 *                }
 *                if (right >= nums.length) return left + 1;
 *                nums[left + 1] = nums[right];
 *                left++;
 *                right++;
 *            } else {
 *                nums[left + 1] = nums[right];
 *                left++;
 *                continue;
 *            }
 *        }
 *        return left + 1;
 *      };
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
};
// @lc code=end