/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode.cn/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (52.39%)
 * Likes:    2302
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.1M
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m
 * 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 * 解释：需要合并 [1,2,3] 和 [2,5,6] 。
 * 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [1], m = 1, nums2 = [], n = 0
 * 输出：[1]
 * 解释：需要合并 [1] 和 [] 。
 * 合并结果是 [1] 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums1 = [0], m = 0, nums2 = [1], n = 1
 * 输出：[1]
 * 解释：需要合并的数组是 [] 和 [1] 。
 * 合并结果是 [1] 。
 * 注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums1.length == m + n
 * nums2.length == n
 * 0 <= m, n <= 200
 * 1 <= m + n <= 200
 * -10^9 <= nums1[i], nums2[j] <= 10^9
 * 
 * 
 * 
 * 
 * 进阶：你可以设计实现一个时间复杂度为 O(m + n) 的算法解决此问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 方法一: 双指针
 * 过程: 
 *     a. 比较nums1[i]和nums[j].
 *     b. 把较小的推进sorted数组.
 *     c. sorted 赋值给 nums1.
 * 复杂度:
 *     时间复杂度: O(2(m+n)) 即 O(m+n).
 *     空间复杂度: O(m+n).
 * 代码:
 *     var merge = function (nums1, m, nums2, n) {
 *         const sorted = [];
 *         let j = 0;
 *         let i = 0;
 *         while (j < m && i < n) {
 *             if (nums1[j] <= nums2[i]) {
 *                 sorted.push(nums1[j])
 *                 j++;
 *             } else {
 *                 sorted.push(nums2[i]);
 *                 i++;
 *             }
 *         }
 *         if (i < n) {
 *             for (let s = i; s < n; s++) {
 *                 sorted.push(nums2[s])
 *             }
 *         }
 *         if (j < m) {
 *             for (let s = j; s < m; s++) {
 *                 sorted.push(nums1[s])
 *             }
 *         }
 *         for (let i = 0; i < sorted.length; i++) {
 *             nums1[i] = sorted[i];
 *         }
 *     };
 * 方法二: 倒序插入 + 双指针
 * 过程: 
 *     a. 从后往前遍历nums1和nums2. 
 *     b. 把大的优先插入到nums1
 * 复杂度:
 *     空间复杂度: O(m+n).
 *     时间复杂度: O(m+n).
 * 代码:    
 *     var merge = function (nums1, m, nums2, n) {
 *         let i = m + n - 1;
 *         while (i >= 0 && m > 0 && n > 0) {
 *             if (nums1[m-1] >= nums2[n-1]) {
 *                 nums1[i] = nums1[m-1];
 *                 m--;
 *             } else {
 *                 nums1[i] = nums2[n-1];
 *                 n--;
 *             }
 *             i--;
 *         }
 *         if (n > 0) {
 *             for (let j = n - 1; j >= 0; j--) {
 *                 nums1[j] = nums2[j];
 *             }
 *         }
 *     }
 **/
var merge = function (nums1, m, nums2, n) {

}
// @lc code=end

