/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if(nums.length ===0 ) return 0;
    let len = 1;
    let j = 1;
    for (let i = 0; i < nums.length; i++) {
        while (j < nums.length) {
            if (nums[j] === nums[i]) {
                j ++;
                continue;
            }
            nums[i+1] = nums[j];
            len ++;
            break;
        }

    }
    return len;
};
// @lc code=end