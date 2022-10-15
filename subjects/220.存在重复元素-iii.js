/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 *
 * https://leetcode-cn.com/problems/contains-duplicate-iii/description/
 *
 * algorithms
 * Medium (28.76%)
 * Likes:    549
 * Dislikes: 0
 * Total Accepted:    70.7K
 * Total Submissions: 245.8K
 * Testcase Example:  '[1,2,3,1]\n3\n0'
 *
 * 给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j])
 * ，同时又满足 abs(i - j)  。
 * 
 * 如果存在则返回 true，不存在返回 false。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3,1], k = 3, t = 0
 * 输出：true
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,0,1,1], k = 1, t = 2
 * 输出：true
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1,5,9,1,5,9], k = 2, t = 3
 * 输出：false
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -2^31 
 * 0 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    var mapArr = [];
    for (let i = 0; i < nums.length; i++) {
        mapArr.push({
            value: nums[i],
            index: i,
        })
    }
    mapArr.sort((a, b) => a.value - b.value);
    for (let i = 0; i < mapArr.length - 1; i++) {
        for (let j = i + 1; j < mapArr.length; j++) {
            if (match(mapArr, i, j, t, k)) {
                return true;
            }
        }
    }
    return false;
};

var match = (nums, i, j, t, k) => {
    return Math.abs(nums[i].value - nums[j].value) <= t && Math.abs(nums[i].index - nums[j].index) <= k;
}
// @lc code=end

